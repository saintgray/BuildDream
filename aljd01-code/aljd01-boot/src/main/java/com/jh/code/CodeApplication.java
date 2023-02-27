package com.jh.code;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jackson.JacksonAutoConfiguration;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;


@SpringBootApplication(
        exclude = {JacksonAutoConfiguration.class},
        scanBasePackages = {"com.jh.code"})
@EntityScan("com.jh.code.jpo")
@RestController
public class CodeApplication {
    public static void main(String[] args) throws IOException {
        SpringApplication.run(CodeApplication.class, args);
    }
}
