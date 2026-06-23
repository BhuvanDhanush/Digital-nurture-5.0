SET SERVEROUTPUT ON;

BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE test_loans';
    EXECUTE IMMEDIATE 'DROP TABLE test_accounts';
    EXECUTE IMMEDIATE 'DROP TABLE test_customers';
EXCEPTION WHEN OTHERS THEN NULL; 
END;
/


    
    CREATE TABLE test_customers (
    cust_id       NUMBER PRIMARY KEY,
    customer_name VARCHAR2(100),
    age           NUMBER
);

CREATE TABLE test_loans (
    loan_id       NUMBER PRIMARY KEY,
    cust_id       NUMBER REFERENCES test_customers(cust_id),
    interest_rate NUMBER(5,2),
    due_date      DATE,
    amount_due    NUMBER(10,2)
);

CREATE TABLE test_accounts (
    cust_id       NUMBER PRIMARY KEY REFERENCES test_customers(cust_id),
    balance       NUMBER(12,2),
    IsVIP         VARCHAR2(1) DEFAULT 'N'
);



INSERT INTO test_customers (cust_id, customer_name, age) VALUES (101, 'Alice Jones', 65);
INSERT INTO test_customers (cust_id, customer_name, age) VALUES (102, 'Bob Smith', 45);
INSERT INTO test_customers (cust_id, customer_name, age) VALUES (103, 'Charlie Brown', 72);

INSERT INTO test_loans (loan_id, cust_id, interest_rate, due_date, amount_due) VALUES (5001, 101, 6.50, SYSDATE + 15, 1200.00);
INSERT INTO test_loans (loan_id, cust_id, interest_rate, due_date, amount_due) VALUES (5002, 102, 5.00, SYSDATE + 45, 3500.00);
INSERT INTO test_loans (loan_id, cust_id, interest_rate, due_date, amount_due) VALUES (5003, 103, 7.00, SYSDATE + 10, 450.00);

INSERT INTO test_accounts (cust_id, balance, IsVIP) VALUES (101, 15000.00, 'N');
INSERT INTO test_accounts (cust_id, balance, IsVIP) VALUES (102, 4500.00, 'N');
INSERT INTO test_accounts (cust_id, balance, IsVIP) VALUES (103, 12000.00, 'N');

COMMIT;



DECLARE
    CURSOR c_senior_customers IS
        SELECT c.cust_id, l.loan_id, l.interest_rate
        FROM test_customers c
        JOIN test_loans l ON c.cust_id = l.cust_id
        WHERE c.age > 60
        FOR UPDATE OF l.interest_rate;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- Scenario 1 Output ---');
    FOR r_cust IN c_senior_customers LOOP
        UPDATE test_loans
        SET interest_rate = r_cust.interest_rate - 1
        WHERE CURRENT OF c_senior_customers;
        
        DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || r_cust.cust_id);
    END LOOP;
    COMMIT;
END;
/


    
    DECLARE
    CURSOR c_high_balance IS
        SELECT cust_id
        FROM test_accounts
        WHERE balance > 10000
        FOR UPDATE OF IsVIP;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- Scenario 2 Output ---');
    FOR r_cust IN c_high_balance LOOP
        UPDATE test_accounts
        SET IsVIP = 'Y' 
        WHERE CURRENT OF c_high_balance;
        
        DBMS_OUTPUT.PUT_LINE('VIP status activated for Customer ID: ' || r_cust.cust_id);
    END LOOP;
    COMMIT;
END;
/


    
    DECLARE
    CURSOR c_upcoming_loans IS
        SELECT c.customer_name, l.loan_id, l.due_date, l.amount_due
        FROM test_customers c
        JOIN test_loans l ON c.cust_id = l.cust_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    DBMS_OUTPUT.PUT_LINE('--- Scenario 3 Output ---');
    FOR r_loan IN c_upcoming_loans LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: Dear ' || r_loan.customer_name || 
                             ', your loan (ID: ' || r_loan.loan_id || 
                             ') of $' || r_loan.amount_due || 
                             ' is due on ' || TO_CHAR(r_loan.due_date, 'YYYY-MM-DD') || '.');
    END LOOP;
END;
/
