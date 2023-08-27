package com.example.sklep;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/")
    public void checkAll() {
        System.out.print("good connection");
    }

}
