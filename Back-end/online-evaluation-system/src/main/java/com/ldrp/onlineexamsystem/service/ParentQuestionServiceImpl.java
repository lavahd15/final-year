/*
 * ParentQuestionServiceImpl
 *
 * Version information
 *
 * 10/26/2018
 *
 * Copyright (c) 2018 Cybage software Pvt. Ltd. All rights reserved
 */

/**
 * @file ParentQuestionServiceImpl
 * Brief description of contents of file.
 * Long description
 * @date 10/31/2018
 */

package com.ldrp.onlineexamsystem.service;

import com.ldrp.onlineexamsystem.exceptions.ParentQuestionNotFoundException;
import com.ldrp.onlineexamsystem.exceptions.TestNotFoundException;
import com.ldrp.onlineexamsystem.model.ParentQuestion;
import com.ldrp.onlineexamsystem.repository.ParentQuestionRepository;
import com.ldrp.onlineexamsystem.repository.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * This class provides ...
 *
 * @author Poojan Patel
 */
@Component
public class ParentQuestionServiceImpl implements ParentQuestionService {

    @Autowired
    private ParentQuestionRepository parentQuestionRepository;

    @Autowired
    private TestRepository testRepository;

    /**
     * @param parentQuestion object with values to save in database
     */
    @Override
    public void insertParentQuestion(ParentQuestion parentQuestion) {
        parentQuestionRepository.save(parentQuestion);
    }

    /**
     * @return List of all categories in ParentQuestion table.
     */
    @Override
    public List<ParentQuestion> getAllParentQuestion() {
        return parentQuestionRepository.findAll();
    }

    /**
     * @param testId to find Parentquestions
     * @return list of ParentQuestion of given testId
     * @throws ParentQuestionNotFoundException
     */
    public List<ParentQuestion> getParentQuestionByTestId(int testId)
            throws TestNotFoundException {
        return testRepository.findById(testId).orElseThrow(TestNotFoundException::new).getParentQuestionList();
    }

    /**
     * @param parentQuestionId the id to find ParentQuestionDescription Name
     * @return ParentQuestionDescription name for a particular Id.
     * @throws ParentQuestionNotFoundException
     */
    @Override
    public ParentQuestion getParentQuestionById(int parentQuestionId) throws
            ParentQuestionNotFoundException {
        return parentQuestionRepository.findById(parentQuestionId).orElseThrow(ParentQuestionNotFoundException::new);
    }
}
