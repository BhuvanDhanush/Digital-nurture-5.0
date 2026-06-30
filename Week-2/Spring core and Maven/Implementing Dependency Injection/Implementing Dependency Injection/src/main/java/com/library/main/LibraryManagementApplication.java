package com.library.main;

import com.library.model.Book;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        System.out.println("Starting Spring IoC container...\n");

        // Load the Spring container using the XML configuration file
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve the BookService bean - Spring has already injected BookRepository into it
        BookService bookService = (BookService) context.getBean("bookService");

        // Verify that the dependency was injected successfully
        if (bookService.getBookRepository() != null) {
            System.out.println("\nSUCCESS: BookRepository was successfully injected into BookService.\n");
        } else {
            System.out.println("\nFAILURE: BookRepository was NOT injected.\n");
        }

        // Use the service (which internally delegates to the injected repository)
        bookService.displayAllBooks();

        // Add a new book through the service layer
        bookService.addBook(new Book("978-1491950357", "Building Microservices", "Sam Newman"));

        System.out.println("After adding a new book:");
        bookService.displayAllBooks();

        // Look up a book by ISBN
        Book found = bookService.getBookByIsbn("978-0132350884");
        System.out.println("Lookup by ISBN 978-0132350884 -> " + found);
    }
}
