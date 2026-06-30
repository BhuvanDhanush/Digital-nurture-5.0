package com.library.repository;

public class BookRepository {

    public BookRepository() {
        System.out.println("BookRepository: Instance created.");
    }

    public void save(String bookTitle) {
        System.out.println("BookRepository: Saving book -> " + bookTitle);
    }

    public String findById(int id) {
        System.out.println("BookRepository: Fetching book with id " + id);
        return "Sample Book Title (id=" + id + ")";
    }
}
