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

---

## Country Web Service (`/country`)

- `Country` — a plain POJO bean (`code`, `name` fields) in the `model` package
- `country-beans.xml` — classic Spring **XML bean configuration**, defines a bean with `id="india"` and sets its `code`/`name` properties via `<property>` tags
- `SpringLearnApplication` — annotated with `@ImportResource("classpath:country-beans.xml")` so the Spring Boot container loads that XML file at startup, alongside its usual annotation-based configuration
- `CountryController` — exposes `GET /country` via `@RequestMapping(value = "/country", method = RequestMethod.GET)`, returns the `india` bean
- `CountryControllerTest` — MockMvc test asserting `status().isOk()` and the JSON field values via `jsonPath()`

### Sample request/response
```
GET http://localhost:8083/country

{
  "code": "IN",
  "name": "India"
}
```

### What happens in the controller method?
`getCountryIndia()` does not construct a `Country` object itself. The `india` field is injected by Spring (`@Resource(name = "india")`) directly from the bean that was defined in `country-beans.xml` and instantiated by the container when the application started. The method simply hands that already-built bean back to the framework. This demonstrates that bean creation/wiring (XML config) is decoupled from request handling (the controller).

### How is the bean converted into a JSON response?
Because `CountryController` is annotated `@RestController` (a combination of `@Controller` + `@ResponseBody`), Spring does not look for a view to render. Instead, the returned `Country` object is passed to the `HttpMessageConverter` chain registered by the Spring Boot web starter. Since Jackson (`spring-boot-starter-web` pulls in `jackson-databind`) is on the classpath, Spring selects `MappingJackson2HttpMessageConverter`, which uses reflection over the bean's getters (`getCode()`, `getName()`) to serialize it into the JSON shown above, and sets the response `Content-Type` header to `application/json`.

### Viewing HTTP headers
- **Chrome DevTools**: F12 → Network tab → browse to `http://localhost:8083/country` → click the `country` request → inspect **General** (status, request URL/method), **Response Headers** (note `Content-Type: application/json`), and **Request Headers**.
- **Postman**: Send a GET request to `http://localhost:8083/country`, then click the **Headers** tab on the response panel to see all response headers, including `Content-Type` and `Content-Length`.
