package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Simple POJO representing a Country, loaded as a Spring bean from country.xml.
 * Instance variables (code, name) are populated by Spring via SETTER INJECTION
 * (<property name="..." value="..."/>) after the no-arg constructor runs.
 */
public class Country {

    private static final Logger LOGGER = LoggerFactory.getLogger(Country.class);

    private String code;
    private String name;

    // Empty/no-arg constructor - required by Spring to instantiate the bean
    // before setter injection populates the properties.
    public Country() {
        LOGGER.debug("Inside Country Constructor.");
    }

    public String getCode() {
        LOGGER.debug("Inside getCode() - returning code: {}", code);
        return code;
    }

    public void setCode(String code) {
        LOGGER.debug("Inside setCode() - setting code to: {}", code);
        this.code = code;
    }

    public String getName() {
        LOGGER.debug("Inside getName() - returning name: {}", name);
        return name;
    }

    public void setName(String name) {
        LOGGER.debug("Inside setName() - setting name to: {}", name);
        this.name = name;
    }

    @Override
    public String toString() {
        return "Country{code='" + code + "', name='" + name + "'}";
    }
}
