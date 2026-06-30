package com.cognizant.springlearn.beans;

/**
 * A simple POJO used to demonstrate CONSTRUCTOR INJECTION via Spring XML config.
 * See applicationContext.xml -> <constructor-arg>
 */
public class Engine {

    private String type;
    private int horsePower;

    // No-arg constructor (not used by XML config here, but good practice)
    public Engine() {
    }

    // Constructor used by Spring via <constructor-arg> in XML
    public Engine(String type, int horsePower) {
        this.type = type;
        this.horsePower = horsePower;
    }

    public String getType() {
        return type;
    }

    public int getHorsePower() {
        return horsePower;
    }

    @Override
    public String toString() {
        return "Engine{type='" + type + "', horsePower=" + horsePower + "}";
    }
}
