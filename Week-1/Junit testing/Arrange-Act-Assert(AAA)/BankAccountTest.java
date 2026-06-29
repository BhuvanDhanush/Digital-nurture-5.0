package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.AfterClass;
import org.junit.Test;

import static org.junit.Assert.*;

public class BankAccountTest {

    // ── Test Fixtures ────────────────────────────────────────────────────────────
    private BankAccount account;          // re-created before each test
    private static final double INITIAL_BALANCE = 1000.00;

    /**
     * @BeforeClass – runs ONCE before any test in this class.
     * Good for expensive, shared, read-only resources (DB connection, file load).
     * Must be static.
     */
    @BeforeClass
    public static void setUpClass() {
        System.out.println("====================================================");
        System.out.println("[BEFORE CLASS] Initialising BankAccountTest suite...");
        System.out.println("====================================================\n");
    }

    /**
     * @AfterClass – runs ONCE after ALL tests have finished.
     * Good for releasing shared resources opened in @BeforeClass.
     * Must be static.
     */
    @AfterClass
    public static void tearDownClass() {
        System.out.println("\n====================================================");
        System.out.println("[AFTER CLASS]  BankAccountTest suite complete.");
        System.out.println("====================================================");
    }

    /**
     * @Before – runs before EACH @Test method.
     * Creates a fresh BankAccount so every test starts with the same known state.
     */
    @Before
    public void setUp() {
        System.out.println("[SETUP]    Creating BankAccount with balance $" + INITIAL_BALANCE);
        account = new BankAccount("John Doe", INITIAL_BALANCE);
    }

    /**
     * @After – runs after EACH @Test method.
     * Nulls the fixture to avoid accidental cross-test contamination.
     */
    @After
    public void tearDown() {
        System.out.println("[TEARDOWN] Discarding BankAccount fixture.\n");
        account = null;
    }

    // ── Tests ────────────────────────────────────────────────────────────────────

    /** AAA: verify the account was initialised with the correct balance */
    @Test
    public void testInitialBalance_IsSetCorrectly() {
        // ARRANGE – account created in @Before with INITIAL_BALANCE

        // ACT
        double actualBalance = account.getBalance();

        // ASSERT
        assertEquals("Initial balance should match constructor argument",
                INITIAL_BALANCE, actualBalance, 0.001);
        System.out.println("[TEST]     testInitialBalance passed: $" + actualBalance);
    }

    /** AAA: depositing a valid amount increases the balance */
    @Test
    public void testDeposit_ValidAmount_IncreasesBalance() {
        // ARRANGE
        double depositAmount = 500.00;
        double expectedBalance = INITIAL_BALANCE + depositAmount;  // 1500.00

        // ACT
        account.deposit(depositAmount);

        // ASSERT
        assertEquals("Balance should increase by the deposited amount",
                expectedBalance, account.getBalance(), 0.001);
        System.out.println("[TEST]     testDeposit passed. New balance: $" + account.getBalance());
    }

    /** AAA: depositing zero or a negative amount must throw */
    @Test(expected = IllegalArgumentException.class)
    public void testDeposit_NegativeAmount_ThrowsIllegalArgumentException() {
        // ARRANGE
        double invalidDeposit = -200.00;

        // ACT – exception expected
        account.deposit(invalidDeposit);

        // ASSERT – handled by expected = IllegalArgumentException.class
    }

    /** AAA: withdrawing a valid amount decreases the balance */
    @Test
    public void testWithdraw_ValidAmount_DecreasesBalance() {
        // ARRANGE
        double withdrawAmount  = 300.00;
        double expectedBalance = INITIAL_BALANCE - withdrawAmount;  // 700.00

        // ACT
        account.withdraw(withdrawAmount);

        // ASSERT
        assertEquals("Balance should decrease by the withdrawn amount",
                expectedBalance, account.getBalance(), 0.001);
        System.out.println("[TEST]     testWithdraw passed. New balance: $" + account.getBalance());
    }

    /** AAA: withdrawing more than the balance must throw */
    @Test(expected = IllegalArgumentException.class)
    public void testWithdraw_InsufficientFunds_ThrowsIllegalArgumentException() {
        // ARRANGE
        double overdraftAmount = INITIAL_BALANCE + 500.00;   // more than available

        // ACT – exception expected
        account.withdraw(overdraftAmount);

        // ASSERT – handled by expected attribute
    }

    /** AAA: withdrawing the exact balance leaves a zero balance */
    @Test
    public void testWithdraw_ExactBalance_LeavesZeroBalance() {
        // ARRANGE
        double withdrawAll = INITIAL_BALANCE;   // withdraw everything

        // ACT
        account.withdraw(withdrawAll);

        // ASSERT
        assertEquals("Balance should be exactly 0 after withdrawing all funds",
                0.0, account.getBalance(), 0.001);
        System.out.println("[TEST]     testWithdraw (all) passed. Balance: $" + account.getBalance());
    }

    /** AAA: a new account must be active */
    @Test
    public void testNewAccount_IsActive() {
        // ARRANGE – account already created in @Before

        // ACT
        boolean active = account.isActive();

        // ASSERT
        assertTrue("A newly created account must be active", active);
        System.out.println("[TEST]     testNewAccount_IsActive passed: " + active);
    }

    /** AAA: closing an account sets isActive to false */
    @Test
    public void testCloseAccount_SetsIsActiveToFalse() {
        // ARRANGE – account is active after @Before

        // ACT
        account.closeAccount();

        // ASSERT
        assertFalse("Account should be inactive after closeAccount()", account.isActive());
        System.out.println("[TEST]     testCloseAccount passed. Active: " + account.isActive());
    }

    /** AAA: depositing to a closed account must throw */
    @Test(expected = IllegalStateException.class)
    public void testDeposit_ToClosedAccount_ThrowsIllegalStateException() {
        // ARRANGE
        account.closeAccount();   // put account in the closed state

        // ACT – exception expected
        account.deposit(100.00);

        // ASSERT – handled by expected attribute
    }

    /** AAA: withdrawing from a closed account must throw */
    @Test(expected = IllegalStateException.class)
    public void testWithdraw_FromClosedAccount_ThrowsIllegalStateException() {
        // ARRANGE
        account.closeAccount();

        // ACT – exception expected
        account.withdraw(50.00);

        // ASSERT – handled by expected attribute
    }

    @Test
    public void testAccountHolder_NameStoredCorrectly() {
        // ARRANGE
        String expectedName = "John Doe";

        // ACT
        String actualName = account.getAccountHolder();

        // ASSERT
        assertEquals("Account holder name must match constructor argument",
                expectedName, actualName);
        System.out.println("[TEST]     testAccountHolder passed: " + actualName);
    }
}
