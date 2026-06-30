package com.library.service;

import com.library.model.Book;
import com.library.repository.BookRepository;

import java.util.List;

public class BookService {

    // Dependency to be injected by Spring container
    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService: Bean created (repository not yet injected).");
    }

    /**
     * Setter method used by Spring for Setter-based Dependency Injection.
     * Spring will call this automatically based on the <property> tag
     * defined in applicationContext.xml.
     */
    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("BookService: BookRepository injected via setter.");
        this.bookRepository = bookRepository;
    }

    public BookRepository getBookRepository() {
        return bookRepository;
    }

    public void addBook(Book book) {
        bookRepository.addBook(book);
    }

    public List<Book> getAllBooks() {
        return bookRepository.getAllBooks();
    }

    public Book getBookByIsbn(String isbn) {
        return bookRepository.findByIsbn(isbn);
    }

    public void displayAllBooks() {
        System.out.println("\n--- Library Catalog ---");
        for (Book book : bookRepository.getAllBooks()) {
            System.out.println(book);
        }
        System.out.println("-----------------------\n");
    }
}
