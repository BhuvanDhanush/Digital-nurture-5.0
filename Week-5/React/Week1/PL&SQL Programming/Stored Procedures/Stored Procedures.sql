SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE test_sp_accounts';
    EXECUTE IMMEDIATE 'DROP TABLE test_sp_employees';
EXCEPTION
    WHEN OTHERS THEN
        NULL;
END;
/

CREATE TABLE TEST_SP_ACCOUNTS (
    ACCOUNT_ID   NUMBER PRIMARY KEY,
    ACCOUNT_TYPE VARCHAR2(20), -- 'Savings' or 'Checking'
    BALANCE      NUMBER(12, 2)
);

CREATE TABLE TEST_SP_EMPLOYEES (
    EMP_ID     NUMBER PRIMARY KEY,
    EMP_NAME   VARCHAR2(100),
    DEPARTMENT VARCHAR2(50),
    SALARY     NUMBER(10, 2)
);

INSERT INTO TEST_SP_ACCOUNTS VALUES ( 1,
                                      'Savings',
                                      5000.00 );

INSERT INTO TEST_SP_ACCOUNTS VALUES ( 2,
                                      'Checking',
                                      1500.00 );

INSERT INTO TEST_SP_ACCOUNTS VALUES ( 3,
                                      'Savings',
                                      10000.00 );

INSERT INTO TEST_SP_ACCOUNTS VALUES ( 4,
                                      'Savings',
                                      250.00 );

INSERT INTO TEST_SP_EMPLOYEES VALUES ( 501,
                                       'John Doe',
                                       'HR',
                                       3000.00 );

INSERT INTO TEST_SP_EMPLOYEES VALUES ( 502,
                                       'Jane Smith',
                                       'IT',
                                       5000.00 );

INSERT INTO TEST_SP_EMPLOYEES VALUES ( 503,
                                       'Bob Johnson',
                                       'IT',
                                       6000.00 );

COMMIT;

CREATE OR REPLACE PROCEDURE PROCESSMONTHLYINTEREST IS
BEGIN
    UPDATE TEST_SP_ACCOUNTS
    SET
        BALANCE = BALANCE + ( BALANCE * 0.01 )
    WHERE
        ACCOUNT_TYPE = 'Savings';

    DBMS_OUTPUT.PUT_LINE('Monthly interest applied successfully to all Savings accounts.');
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error processing monthly interest: ' || SQLERRM);
END;
/

CREATE OR REPLACE PROCEDURE UPDATEEMPLOYEEBONUS (
    P_DEPT      IN VARCHAR2,
    P_BONUS_PCT IN NUMBER
) IS
BEGIN
    UPDATE TEST_SP_EMPLOYEES
    SET
        SALARY = SALARY + ( SALARY * ( P_BONUS_PCT / 100 ) )
    WHERE
        DEPARTMENT = P_DEPT;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to employees in department: ' || P_DEPT);
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error updating employee bonus: ' || SQLERRM);
END;
/

CREATE OR REPLACE PROCEDURE TRANSFERFUNDS (
    P_SOURCE_ACC IN NUMBER,
    P_DEST_ACC   IN NUMBER,
    P_AMOUNT     IN NUMBER
) IS
    V_SOURCE_BALANCE NUMBER(12, 2);
BEGIN
    -- Fetch balance and lock row to avoid race conditions
    SELECT
        BALANCE
    INTO V_SOURCE_BALANCE
    FROM
        TEST_SP_ACCOUNTS
    WHERE
        ACCOUNT_ID = P_SOURCE_ACC
    FOR UPDATE;
    
    -- Verify funds availability
    IF V_SOURCE_BALANCE < P_AMOUNT THEN
        RAISE_APPLICATION_ERROR(-20001, 'Transaction Aborted: Insufficient funds in source account.');
    END IF;
    
    -- Deduct money from origin
    UPDATE TEST_SP_ACCOUNTS
    SET
        BALANCE = BALANCE - P_AMOUNT
    WHERE
        ACCOUNT_ID = P_SOURCE_ACC;
    
    -- Add money to destination
    UPDATE TEST_SP_ACCOUNTS
    SET
        BALANCE = BALANCE + P_AMOUNT
    WHERE
        ACCOUNT_ID = P_DEST_ACC;

    DBMS_OUTPUT.PUT_LINE('Transfer successful! Moved $'
                         || P_AMOUNT
                         || ' from Account '
                         || P_SOURCE_ACC
                         || ' to Account ' || P_DEST_ACC);

    COMMIT;
EXCEPTION
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: One or both account IDs do not exist.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer Failed: ' || SQLERRM);
END;
/

BEGIN
    DBMS_OUTPUT.PUT_LINE('--- Executing Scenario 1 ---');
    PROCESSMONTHLYINTEREST;
    DBMS_OUTPUT.PUT_LINE('--- Executing Scenario 2 ---');
    UPDATEEMPLOYEEBONUS('IT', 10);
    DBMS_OUTPUT.PUT_LINE('--- Executing Scenario 3 ---');
    TRANSFERFUNDS(
        P_SOURCE_ACC => 1,
        P_DEST_ACC   => 2,
        P_AMOUNT     => 500
    );
END;
/