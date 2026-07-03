package com.cognizant.account.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

	@GetMapping("/accounts/{number}")
	public Account getAccountDetails(@PathVariable String number) {

		// Dummy response - no backend connectivity
		Account account = new Account(number, "savings", 234343);

		return account;
	}

}
