/*
 * QuestionServiceImpl
 *
 * Version information
 *
 * 10/26/2018
 *
 * Copyright (c) 2018 Cybage software Pvt. Ltd. All rights reserved
 */

/**
 * @file QuestionServiceImpl
 * Brief description of contents of file.
 * Long description
 * @date 11/12/2018
 */

package com.ldrp.onlineexamsystem.service;

import com.ldrp.onlineexamsystem.exceptions.ParentQuestionNotFoundException;
import com.ldrp.onlineexamsystem.exceptions.QuestionNotFoundException;
import com.ldrp.onlineexamsystem.model.Question;
import com.ldrp.onlineexamsystem.repository.ParentQuestionRepository;
import com.ldrp.onlineexamsystem.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * This class provides ...
 *
 * @author Poojan Patel
 */
@Component
public class QuestionServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private ParentQuestionRepository parentQuestionRepository;

    @Override
    public void insertQuestion(Question question) {
        questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestion() {
        return questionRepository.findAll();
    }

    @Override
    public List<Question> getQuestionByParentQuestionId(int parentQuestionId)
            throws ParentQuestionNotFoundException {
        return parentQuestionRepository.findById(parentQuestionId).orElseThrow(ParentQuestionNotFoundException::new).getQuestionList();
    }

    @Override
    public Question getQuestionById(int questionId) throws
            QuestionNotFoundException {
        return questionRepository.findById(questionId).orElseThrow(QuestionNotFoundException::new);
    }
}
