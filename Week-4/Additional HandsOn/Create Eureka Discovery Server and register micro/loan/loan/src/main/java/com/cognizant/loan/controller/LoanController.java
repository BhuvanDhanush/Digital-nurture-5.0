package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/loan")
public class LoanController {

    @GetMapping
    public List<Map<String, Object>> getAllLoans() {
        return List.of(
                Map.of("loanId", 2001, "customerName", "John Doe", "loanAmount", 500000.00, "type", "Home Loan"),
                Map.of("loanId", 2002, "customerName", "Jane Smith", "loanAmount", 150000.00, "type", "Car Loan")
        );
    }

    @GetMapping("/{loanId}")
    public Map<String, Object> getLoanById(@PathVariable int loanId) {
        return Map.of("loanId", loanId, "customerName", "John Doe", "loanAmount", 500000.00, "type", "Home Loan");
    }

}
