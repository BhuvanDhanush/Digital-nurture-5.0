package com.example;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
    }

    @Test
    public void testAdd() {
        assertEquals(8, calculator.add(3, 5));
    }

    @Test
    public void testSubtract() {
        assertEquals(6, calculator.subtract(10, 4));
    }

    @Test
    public void testMultiply() {
        assertEquals(12, calculator.multiply(3, 4));
    }

    @Test
    public void testDivide() {
        assertEquals(5.0, calculator.divide(10, 2), 0.001);
    }

    @Test(expected = ArithmeticException.class)
    public void testDivideByZero() {
        calculator.divide(10, 0);
    }
}
