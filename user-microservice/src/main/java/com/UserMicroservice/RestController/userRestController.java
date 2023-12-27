package com.UserMicroservice.RestController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.UserMicroservice.Service.UserService;
import com.UserMicroservice.model.RegistrationRequest;
import com.UserMicroservice.model.User;
/*
@CrossOrigin(origins = "http://localhost:4200")
*/
@RestController
@CrossOrigin(origins = "*")
public class userRestController {

	@Autowired
	UserService userService;
	
	@RequestMapping(path = "all", method = RequestMethod.GET)
	public List<User> getAllUsers() {
	return userService.findAllUsers();
	}
	
	 @PostMapping("/register")
	 public User register(@RequestBody RegistrationRequest request)
	 {
	 return userService.RegisterUser(request);
	 }


}
