package com.ldrp.onlineexamsystem.controller;

import com.ldrp.onlineexamsystem.model.UserTest;
import com.ldrp.onlineexamsystem.service.UserTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usertest")
public class UserTestController {
    @Autowired
    private UserTestService userTestService;

    /**
     * @param userId
     * @return get all test based on userId
     */
    @GetMapping("/userid/{userId}")
    private List<UserTest> getALlTestByUserId(@PathVariable int userId) {
        return userTestService.getAllTestByUserId(userId);
    }

}
