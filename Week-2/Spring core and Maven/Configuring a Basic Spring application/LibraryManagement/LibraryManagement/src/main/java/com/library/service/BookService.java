package com.library.service;

import com.library.repository.BookRepository;

/**
 * Service class that contains business logic for managing books.
 * Depends on BookRepository, injected by the Spring container.
 */
public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService: Instance created.");
    }

    // Setter used by Spring for dependency injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("BookService: Adding book -> " + title);
        bookRepository.save(title);
    }

    public void getBook(int id) {
        String book = bookRepository.findById(id);
        System.out.println("BookService: Retrieved -> " + book);
    }
}
