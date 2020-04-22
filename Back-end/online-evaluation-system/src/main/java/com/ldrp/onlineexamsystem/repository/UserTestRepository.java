package com.ldrp.onlineexamsystem.repository;

import com.ldrp.onlineexamsystem.model.UserTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserTestRepository extends JpaRepository<UserTest, Integer> {
    List<UserTest> findAllByUserId(int userId);
}
