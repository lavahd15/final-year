package com.ldrp.onlineexamsystem.service;

import com.ldrp.onlineexamsystem.model.Response;
import com.ldrp.onlineexamsystem.repository.ResponseRepository;
import com.ldrp.onlineexamsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ResponseServiceImpl implements ResponseService {

    @Autowired
    private ResponseRepository responseRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public void insertResponse(Response response) {
        responseRepository.save(response);
    }

    @Override
    public List<Response> getAllReponse() {
        return responseRepository.findAll();
    }

//    @Override
//    public List<Response> getResponseByUserId(int userId) throws UserNotFoundException {
//        return userRepository.findById(userId).orElseThrow(UserNotFoundException::new).get;
//    }


}
