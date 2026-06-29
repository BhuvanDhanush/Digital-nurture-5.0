package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * JUnit Test class for Calculator.
 *
 * Demonstrates:
 *  - Arrange-Act-Assert (AAA) pattern in each test
 *  - @Before  : runs before EVERY test method (setup / arrange shared state)
 *  - @After   : runs after  EVERY test method (teardown / clean up)
 */
public class CalculatorTest {

    // ── Test Fixture ────────────────────────────────────────────────────────────
    private Calculator calculator;   // shared object available to every test

    /**
     * @Before – executed before each @Test method.
     * Creates a fresh Calculator instance so tests are fully independent.
     */
    @Before
    public void setUp() {
        System.out.println("[SETUP]    Creating a new Calculator instance...");
        calculator = new Calculator();   // fresh fixture for every test
    }

    /**
     * @After – executed after each @Test method.
     * Resets state and releases resources (simulated here with reset() + log).
     */
    @After
    public void tearDown() {
        System.out.println("[TEARDOWN] Resetting calculator state...\n");
        calculator.reset();
        calculator = null;  // allow GC to reclaim the instance
    }

    // ── Tests ───────────────────────────────────────────────────────────────────

    /** AAA: add two positive numbers */
    @Test
    public void testAdd_TwoPositiveNumbers_ReturnsCorrectSum() {
        // ARRANGE
        double firstNumber  = 10.0;
        double secondNumber =  5.0;

        // ACT
        double result = calculator.add(firstNumber, secondNumber);

        // ASSERT
        assertEquals("10 + 5 should equal 15", 15.0, result, 0.001);
        System.out.println("[TEST]     testAdd passed: " + result);
    }

    /** AAA: add a positive and a negative number */
    @Test
    public void testAdd_PositiveAndNegativeNumber_ReturnsCorrectSum() {
        // ARRANGE
        double positive =  8.0;
        double negative = -3.0;

        // ACT
        double result = calculator.add(positive, negative);

        // ASSERT
        assertEquals("8 + (-3) should equal 5", 5.0, result, 0.001);
        System.out.println("[TEST]     testAdd (mixed sign) passed: " + result);
    }

    /** AAA: subtract smaller from larger */
    @Test
    public void testSubtract_LargerMinusSmaller_ReturnsPositiveResult() {
        // ARRANGE
        double minuend    = 20.0;
        double subtrahend =  7.0;

        // ACT
        double result = calculator.subtract(minuend, subtrahend);

        // ASSERT
        assertEquals("20 - 7 should equal 13", 13.0, result, 0.001);
        System.out.println("[TEST]     testSubtract passed: " + result);
    }

    /** AAA: subtract larger from smaller gives a negative result */
    @Test
    public void testSubtract_SmallerMinusLarger_ReturnsNegativeResult() {
        // ARRANGE
        double minuend    =  3.0;
        double subtrahend = 10.0;

        // ACT
        double result = calculator.subtract(minuend, subtrahend);

        // ASSERT
        assertTrue("3 - 10 should be negative", result < 0);
        assertEquals("3 - 10 should equal -7", -7.0, result, 0.001);
        System.out.println("[TEST]     testSubtract (negative) passed: " + result);
    }

    /** AAA: multiply two numbers */
    @Test
    public void testMultiply_TwoNumbers_ReturnsCorrectProduct() {
        // ARRANGE
        double factor1 = 6.0;
        double factor2 = 7.0;

        // ACT
        double result = calculator.multiply(factor1, factor2);

        // ASSERT
        assertEquals("6 × 7 should equal 42", 42.0, result, 0.001);
        System.out.println("[TEST]     testMultiply passed: " + result);
    }

    /** AAA: multiply by zero always yields zero */
    @Test
    public void testMultiply_ByZero_ReturnsZero() {
        // ARRANGE
        double number = 999.0;
        double zero   =   0.0;

        // ACT
        double result = calculator.multiply(number, zero);

        // ASSERT
        assertEquals("Any number × 0 should be 0", 0.0, result, 0.001);
        System.out.println("[TEST]     testMultiply (by zero) passed: " + result);
    }

    /** AAA: normal division */
    @Test
    public void testDivide_ValidDivisor_ReturnsCorrectQuotient() {
        // ARRANGE
        double dividend = 15.0;
        double divisor  =  3.0;

        // ACT
        double result = calculator.divide(dividend, divisor);

        // ASSERT
        assertEquals("15 ÷ 3 should equal 5", 5.0, result, 0.001);
        System.out.println("[TEST]     testDivide passed: " + result);
    }

    /** AAA: dividing by zero must throw ArithmeticException */
    @Test(expected = ArithmeticException.class)
    public void testDivide_ByZero_ThrowsArithmeticException() {
        // ARRANGE
        double dividend = 10.0;
        double divisor  =  0.0;

        // ACT  (exception expected – @Test annotation handles the ASSERT)
        calculator.divide(dividend, divisor);

        // ASSERT – handled by expected = ArithmeticException.class above
        System.out.println("[TEST]     testDivide (by zero) – exception caught as expected.");
    }
}
