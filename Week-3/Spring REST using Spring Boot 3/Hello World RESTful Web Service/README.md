# spring-learn — Hello World RESTful Web Service

## What this contains
- `HelloController` — exposes `GET /hello` and returns the plain text `Hello World!!`
- `HelloControllerTest` — end-to-end test using `MockMvc`
- Runs on port **8083** (configured in `application.properties`)

## How to run

### Option 1: Command line (Maven)
```
cd spring-learn
mvn spring-boot:run
```

### Option 2: Eclipse / IntelliJ
1. Import as a Maven project.
2. Run `SpringLearnApplication.java` as a Java Application.

## How to test

### Browser
Open: http://localhost:8083/hello
You should see: `Hello World!!`

### Postman
1. Create a new GET request to `http://localhost:8083/hello`
2. Click **Send**
3. Check the **Body** tab for `Hello World!!`
4. Check the **Headers** tab to view response headers (Content-Type, Content-Length, Date, etc.)

### Chrome DevTools (Network tab)
1. Press F12 to open DevTools, go to the **Network** tab
2. Navigate to http://localhost:8083/hello
3. Click the `hello` request in the list
4. Inspect the **General**, **Response Headers**, and **Request Headers** sections

## How to run the automated test

### Command line (Maven)
```
cd spring-learn
mvn test
```

### Eclipse
Right-click `HelloControllerTest.java` → Run As → JUnit Test
