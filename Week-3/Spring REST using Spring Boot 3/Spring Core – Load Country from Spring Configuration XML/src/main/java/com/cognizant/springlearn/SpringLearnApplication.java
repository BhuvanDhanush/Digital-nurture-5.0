package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Entry point of the Spring Boot application.
 *
 * @SpringBootApplication is a convenience annotation that combines:
 *   - @Configuration      : marks this class as a source of bean definitions
 *   - @EnableAutoConfiguration : tells Spring Boot to auto-configure beans
 *                            based on the jars on the classpath (e.g. Tomcat,
 *                            Spring MVC, Jackson) — this is what removes the
 *                            need for tedious manual/XML configuration.
 *   - @ComponentScan      : tells Spring to scan this package (and sub-packages)
 *                            for components (@Component, @Service, @Repository,
 *                            @Controller, etc.)
 */
@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        logger.info("===== Entering main() method of SpringLearnApplication =====");

        // SpringApplication.run() bootstraps the application:
        // 1. Creates the ApplicationContext (IoC container)
        // 2. Registers/auto-configures beans
        // 3. Starts the embedded Tomcat server (because spring-boot-starter-web is on the classpath)
        ApplicationContext context = SpringApplication.run(SpringLearnApplication.class, args);

        logger.debug("ApplicationContext started with {} beans defined", context.getBeanDefinitionCount());
        logger.info("===== SpringLearnApplication started successfully =====");

        // ----- Demonstrates loading beans from a classic Spring XML configuration file -----
        XmlBeanDemo.run();

        // ----- Loads the Country bean from country.xml and displays its details -----
        displayCountry();

        logger.warn("This is a sample WARN log to show log levels in action");
        logger.info("===== Exiting main() method of SpringLearnApplication =====");
    }

    /**
     * Reads the "country" bean from the Spring XML configuration file (country.xml)
     * and logs its details.
     *
     * ApplicationContext            - the central interface for the Spring IoC container;
     *                                  provides bean lookup, lifecycle, and config metadata.
     * ClassPathXmlApplicationContext - an ApplicationContext implementation that loads
     *                                  bean definitions from an XML file found on the classpath.
     * context.getBean("country", Country.class)
     *                                - looks up the bean registered with id "country" in the
     *                                  XML config, casts/checks it against Country.class, and
     *                                  returns the fully initialized (constructed + setter-injected)
     *                                  instance from the container.
     */
    public static void displayCountry() {
        logger.info("----- Loading Country bean from country.xml -----");

        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        Country country = context.getBean("country", Country.class);
        logger.debug("Country : {}", country.toString());

        logger.info("----- Finished displayCountry() -----");
    }
}
