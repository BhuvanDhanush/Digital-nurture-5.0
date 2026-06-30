package com.cognizant.springlearn.controller;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;

/**
 * Country RESTful Web Service.
 *
 * Method   : GET
 * URL      : /country
 * Response : JSON representation of the India Country bean,
 *            which is defined and wired in country-beans.xml
 *            (classic Spring XML based configuration).
 */
@RestController
public class CountryController {

    private static final Logger logger = LoggerFactory.getLogger(CountryController.class);

    // Injected from the bean defined in country-beans.xml (bean id="india"),
    // loaded into the application context via @ImportResource on the
    // SpringLearnApplication class.
    @Resource(name = "india")
    private Country india;

    @RequestMapping(value = "/country", method = RequestMethod.GET)
    public Country getCountryIndia() {
        logger.info("START - getCountryIndia()");

        // The 'india' bean was created and populated by the Spring
        // container at startup, straight from the XML configuration -
        // no 'new Country(...)' is done here in code.
        logger.info("END - getCountryIndia()");
        return india;
    }

}
