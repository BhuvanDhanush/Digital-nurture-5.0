package com.example;

/**
 * Simple Calculator class used to demonstrate AAA pattern in JUnit tests.
 */
public class Calculator {

    private double result;

    public Calculator() {
        this.result = 0;
    }

    public double add(double a, double b) {
        return a + b;
    }

    public double subtract(double a, double b) {
        return a - b;
    }

    public double multiply(double a, double b) {
        return a * b;
    }

    public double divide(double a, double b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return a / b;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }

    public void reset() {
        this.result = 0;
    }
}
