-- Make sure server output is ON to see the printed messages in VS Code
SET SERVEROUTPUT ON;

-- ====================================================================
-- SCENARIO 1: Senior Citizen Loan Discount
-- ====================================================================
DECLARE
    CURSOR c_senior_customers IS
        SELECT customer_id, loan_id, interest_rate
        FROM customers c
        JOIN loans l ON c.customer_id = l.customer_id
        WHERE c.age > 60
        FOR UPDATE OF l.interest_rate;
BEGIN
    FOR r_cust IN c_senior_customers LOOP
        UPDATE loans
        SET interest_rate = r_cust.interest_rate - 1
        WHERE CURRENT OF c_senior_customers;
        
        DBMS_OUTPUT.PUT_LINE('Discount applied for Customer ID: ' || r_cust.customer_id);
    END LOOP;
    
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error in Scenario 1: ' || SQLERRM);
END;
/

-- ====================================================================
-- SCENARIO 2: VIP Status Promotion
-- ====================================================================
DECLARE
    CURSOR c_high_balance IS
        SELECT customer_id
        FROM accounts
        WHERE balance > 10000
        FOR UPDATE OF IsVIP;
BEGIN
    FOR r_cust IN c_high_balance LOOP
        UPDATE accounts
        SET IsVIP = 'Y' 
        WHERE CURRENT OF c_high_balance;
        
        DBMS_OUTPUT.PUT_LINE('VIP status activated for Customer ID: ' || r_cust.customer_id);
    END LOOP;
    
    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error in Scenario 2: ' || SQLERRM);
END;
/

-- ====================================================================
-- SCENARIO 3: Upcoming Loan Due Reminders
-- ====================================================================
DECLARE
    CURSOR c_upcoming_loans IS
        SELECT c.customer_name, l.loan_id, l.due_date, l.amount_due
        FROM customers c
        JOIN loans l ON c.customer_id = l.customer_id
        WHERE l.due_date BETWEEN SYSDATE AND SYSDATE + 30;
BEGIN
    FOR r_loan IN c_upcoming_loans LOOP
        DBMS_OUTPUT.PUT_LINE('REMINDER: Dear ' || r_loan.customer_name || 
                             ', your loan (ID: ' || r_loan.loan_id || 
                             ') of $' || r_loan.amount_due || 
                             ' is due on ' || TO_CHAR(r_loan.due_date, 'YYYY-MM-DD') || '.');
    END LOOP;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error in Scenario 3: ' || SQLERRM);
END;
/
