package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;


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

        logger.warn("This is a sample WARN log to show log levels in action");
        logger.info("===== Exiting main() method of SpringLearnApplication =====");
    }
}
