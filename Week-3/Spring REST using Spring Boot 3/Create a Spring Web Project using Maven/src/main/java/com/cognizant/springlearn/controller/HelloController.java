package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * A minimal REST controller served by the embedded Tomcat server that
 * Spring Boot auto-configures because spring-boot-starter-web is on the classpath.
 * Visit: http://localhost:8080/hello
 */
@RestController
public class HelloController {

    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/hello")
    public String hello() {
        logger.info("GET /hello endpoint was called");
        return "Hello from Spring Boot! (spring-learn application)";
    }
}
