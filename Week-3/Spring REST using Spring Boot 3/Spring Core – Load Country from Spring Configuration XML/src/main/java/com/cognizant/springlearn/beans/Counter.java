package com.cognizant.springlearn.beans;

/**
 * Used to demonstrate PROTOTYPE scope.
 * Every call to context.getBean("counterBean") on a prototype-scoped bean
 * returns a NEW instance (vs. singleton, which returns the SAME shared instance).
 */
public class Counter {

    private int count = 0;

    public void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}
