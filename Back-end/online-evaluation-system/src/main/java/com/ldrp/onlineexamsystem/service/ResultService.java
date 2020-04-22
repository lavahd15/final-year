package com.ldrp.onlineexamsystem.service;

import com.ldrp.onlineexamsystem.exceptions.QuestionNotFoundException;
import com.ldrp.onlineexamsystem.model.Response;
import com.ldrp.onlineexamsystem.model.Result;
import org.springframework.stereotype.Service;


@Service
public interface ResultService {

    void insertResult(Result result);

    void checkResponse(Response response) throws QuestionNotFoundException;

}
