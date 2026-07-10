package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    @GetMapping
    public List<Map<String, Object>> getAllAccounts() {
        return List.of(
                Map.of("accountId", 1001, "accountHolder", "John Doe", "balance", 25000.00),
                Map.of("accountId", 1002, "accountHolder", "Jane Smith", "balance", 42000.00)
        );
    }

    @GetMapping("/{accountId}")
    public Map<String, Object> getAccountById(@PathVariable int accountId) {
        return Map.of("accountId", accountId, "accountHolder", "John Doe", "balance", 25000.00);
    }

}
