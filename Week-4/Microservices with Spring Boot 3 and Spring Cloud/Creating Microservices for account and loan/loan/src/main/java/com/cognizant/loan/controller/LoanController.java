package com.cognizant.loan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoanController {

	@GetMapping("/loans/{number}")
	public Loan getLoanDetails(@PathVariable String number) {

		// Dummy response - no backend connectivity
		Loan loan = new Loan(number, "car", 400000, 3258, 18);

		return loan;
	}

}
