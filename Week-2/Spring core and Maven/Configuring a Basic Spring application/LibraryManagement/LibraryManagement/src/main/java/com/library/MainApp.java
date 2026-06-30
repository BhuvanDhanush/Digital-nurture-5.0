package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Main application entry point.
 * Loads the Spring application context from applicationContext.xml
 * and demonstrates retrieval/usage of the configured beans.
 */
public class MainApp {

    public static void main(String[] args) {

        // Load the Spring container using the XML configuration file
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean from the context
        BookService bookService = (BookService) context.getBean("bookService");

        // Test the configuration
        bookService.addBook("Effective Java");
        bookService.getBook(101);

        System.out.println("Spring context loaded and beans tested successfully!");
    }
}
