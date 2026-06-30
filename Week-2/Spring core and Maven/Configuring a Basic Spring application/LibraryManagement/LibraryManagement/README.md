# LibraryManagement

A basic Spring Framework (XML-configuration) project demonstrating
dependency injection between a service and repository layer.

## Project Structure
```
LibraryManagement/
├── pom.xml
└── src/main/
    ├── java/com/library/
    │   ├── MainApp.java
    │   ├── service/BookService.java
    │   └── repository/BookRepository.java
    └── resources/
        └── applicationContext.xml
```

## How to Build and Run

1. Make sure you have Maven and JDK 17+ installed.
2. From the project root directory, build the project:
   ```
   mvn clean install
   ```
3. Run the application:
   ```
   mvn exec:java -Dexec.mainClass="com.library.MainApp"
   ```
   OR, after packaging:
   ```
   java -cp target/LibraryManagement.jar:$(mvn dependency:build-classpath -Dmdep.outputFile=/dev/stdout -q) com.library.MainApp
   ```

## Expected Output
```
BookRepository: Instance created.
BookService: Instance created.
BookService: Adding book -> Effective Java
BookRepository: Saving book -> Effective Java
BookRepository: Fetching book with id 101
BookService: Retrieved -> Sample Book Title (id=101)
Spring context loaded and beans tested successfully!
```

## What This Demonstrates
- Maven project setup with Spring Core/Context/Beans dependencies.
- XML-based Spring configuration (`applicationContext.xml`) defining
  `bookRepository` and `bookService` beans.
- Setter-based dependency injection of `BookRepository` into `BookService`.
- Loading the Spring `ApplicationContext` and retrieving beans in `MainApp`.
