package com.library.repository;

import com.library.model.Book;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {

    private List<Book> books = new ArrayList<>();

    public BookRepository() {
        // Pre-load some sample data so DI can be demonstrated end-to-end
        books.add(new Book("978-0134685991", "Effective Java", "Joshua Bloch"));
        books.add(new Book("978-0596007126", "Head First Design Patterns", "Eric Freeman"));
        books.add(new Book("978-0132350884", "Clean Code", "Robert C. Martin"));
        System.out.println("BookRepository: Bean created and sample data loaded.");
    }

    public void addBook(Book book) {
        books.add(book);
    }

    public List<Book> getAllBooks() {
        return books;
    }

    public Book findByIsbn(String isbn) {
        return books.stream()
                .filter(b -> b.getIsbn().equals(isbn))
                .findFirst()
                .orElse(null);
    }
}
