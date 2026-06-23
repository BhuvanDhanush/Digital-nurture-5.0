package com.bank.app;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorTest {

    @Test
    public void testAdditionSuccess() {
        Calculator calc = new Calculator();
        
        // Assert that 10 + 5 equals 15
        int result = calc.add(10, 5);
        assertEquals("Addition method failed math evaluation", 15, result);
    }

    @Test
    public void testSubtractionSuccess() {
        Calculator calc = new Calculator();
        
        // Assert that 20 - 8 equals 12
        int result = calc.subtract(20, 8);
        assertEquals("Subtraction method failed math evaluation", 12, result);
    }
}
