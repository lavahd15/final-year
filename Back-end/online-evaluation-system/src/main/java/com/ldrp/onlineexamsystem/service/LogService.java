package com.ldrp.onlineexamsystem.service;

import com.ldrp.onlineexamsystem.exceptions.QuestionNotFoundException;
import com.ldrp.onlineexamsystem.model.Log;
import com.ldrp.onlineexamsystem.model.Response;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LogService {

    int getTestIdformQid(int qid);

    void addLog(Response[] responseList) throws QuestionNotFoundException;

    List<Log> getLogByUid(int userid);
}
