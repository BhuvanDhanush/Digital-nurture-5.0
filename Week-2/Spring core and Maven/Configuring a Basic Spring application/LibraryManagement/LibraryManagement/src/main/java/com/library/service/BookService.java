package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public BookService() {
        System.out.println("BookService: Instance created.");
    }

 
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
