package com.cognizant.springlearn.beans;

/**
 * Demonstrates:
 *  - CONSTRUCTOR INJECTION: the 'engine' dependency is injected via constructor (<constructor-arg ref="engineBean"/>)
 *  - SETTER INJECTION: 'model' and 'price' are injected via setter methods (<property name="..." value="..."/>)
 */
public class Car {

    private Engine engine;     // injected via constructor
    private String model;      // injected via setter
    private double price;      // injected via setter

    // Constructor injection
    public Car(Engine engine) {
        this.engine = engine;
        System.out.println("Car constructor called - engine injected: " + engine);
    }

    // Setter injection
    public void setModel(String model) {
        this.model = model;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Engine getEngine() {
        return engine;
    }

    public String getModel() {
        return model;
    }

    public double getPrice() {
        return price;
    }

    @Override
    public String toString() {
        return "Car{model='" + model + "', price=" + price + ", engine=" + engine + "}";
    }
}
