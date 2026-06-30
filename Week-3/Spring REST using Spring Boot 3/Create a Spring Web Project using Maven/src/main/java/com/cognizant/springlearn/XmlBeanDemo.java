package com.cognizant.springlearn;

import com.cognizant.springlearn.beans.Car;
import com.cognizant.springlearn.beans.Counter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Demonstrates loading beans from a classic Spring XML configuration file
 * (applicationContext.xml) using ClassPathXmlApplicationContext, separate
 * from the auto-configured Spring Boot ApplicationContext.
 */
public class XmlBeanDemo {

    private static final Logger logger = LoggerFactory.getLogger(XmlBeanDemo.class);

    public static void run() {
        logger.info("----- Loading beans from applicationContext.xml -----");

        // ApplicationContext is the central interface for the Spring IoC container.
        // ClassPathXmlApplicationContext loads bean definitions from an XML file
        // located on the classpath (src/main/resources).
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        // ----- Constructor + Setter injection demo -----
        Car car = (Car) context.getBean("carBean");
        logger.info("Car bean loaded from XML: {}", car);

        // ----- Singleton scope demo: same instance returned every time -----
        Car carAgain = (Car) context.getBean("carBean");
        logger.info("Is carBean a singleton (same instance both times)? {}", (car == carAgain));

        // ----- Prototype scope demo: a NEW instance is returned every time -----
        Counter counter1 = (Counter) context.getBean("counterBean");
        counter1.increment();
        counter1.increment();

        Counter counter2 = (Counter) context.getBean("counterBean");
        counter2.increment();

        logger.info("counter1 count = {} (incremented twice)", counter1.getCount());
        logger.info("counter2 count = {} (incremented once, separate instance)", counter2.getCount());
        logger.info("Is counterBean a prototype (different instances)? {}", (counter1 != counter2));

        logger.info("----- Finished XML bean demo -----");
    }
}
