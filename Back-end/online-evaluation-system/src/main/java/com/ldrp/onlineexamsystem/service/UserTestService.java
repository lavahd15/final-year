package com.ldrp.onlineexamsystem.service;

import com.ldrp.onlineexamsystem.model.UserTest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserTestService {
    List<UserTest> getAllTestByUserId(int userId);
}
