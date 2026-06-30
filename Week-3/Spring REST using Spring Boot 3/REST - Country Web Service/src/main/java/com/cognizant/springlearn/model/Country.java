package com.cognizant.springlearn.model;

/**
 * Simple POJO representing a Country.
 * Instances of this bean are defined and wired via Spring XML configuration
 * (see src/main/resources/country-beans.xml) rather than via annotations,
 * to demonstrate classic XML-based bean configuration.
 */
public class Country {

    private String code;
    private String name;

    public Country() {
    }

    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}
