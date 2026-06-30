package com.example;

/**
 * BankAccount class used to demonstrate test fixtures and setup/teardown in JUnit.
 */
public class BankAccount {

    private String accountHolder;
    private double balance;
    private boolean isActive;

    public BankAccount(String accountHolder, double initialBalance) {
        if (initialBalance < 0) {
            throw new IllegalArgumentException("Initial balance cannot be negative.");
        }
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
        this.isActive = true;
    }

    public void deposit(double amount) {
        if (!isActive) {
            throw new IllegalStateException("Cannot deposit to a closed account.");
        }
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive.");
        }
        this.balance += amount;
    }

    public void withdraw(double amount) {
        if (!isActive) {
            throw new IllegalStateException("Cannot withdraw from a closed account.");
        }
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdrawal amount must be positive.");
        }
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient funds.");
        }
        this.balance -= amount;
    }

    public void closeAccount() {
        this.isActive = false;
    }

    public double getBalance() {
        return balance;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public boolean isActive() {
        return isActive;
    }
}
