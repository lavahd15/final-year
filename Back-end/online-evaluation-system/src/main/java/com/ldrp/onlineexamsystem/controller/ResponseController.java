package com.ldrp.onlineexamsystem.controller;

import com.ldrp.onlineexamsystem.exceptions.QuestionNotFoundException;
import com.ldrp.onlineexamsystem.model.Response;
import com.ldrp.onlineexamsystem.service.LogService;
import com.ldrp.onlineexamsystem.service.ResponseService;
import com.ldrp.onlineexamsystem.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/response")
public class ResponseController {

    @Autowired
    private ResponseService responseService;
    @Autowired
    private ResultService resultService;
    @Autowired
    private LogService logService;

    /**
     * insert response
     * @param responseList
     */
    @PostMapping("/insert")
    public void insertResponse(@RequestBody Response[] responseList) throws QuestionNotFoundException {
        for(Response response: responseList){
            response.setTimestamp(new Date());
            responseService.insertResponse(response);
            resultService.checkResponse(response);
        }
        logService.addLog(responseList);
    }

    /**
     * @return get all response
     */
    @GetMapping("/all")
    public List getAllResponses() {
        return responseService.getAllReponse();
    }

}