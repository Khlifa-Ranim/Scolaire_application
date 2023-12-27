package com.UserMicroservice.Service;

import java.util.List;

import com.UserMicroservice.model.RegistrationRequest;
import com.UserMicroservice.model.Role;
import com.UserMicroservice.model.User;

public interface UserService {

	User SaveUser(User user) ;
	User findUserByUsername(String username);
	Role addRole (Role role);
	User addRoleToUser(String username,String rolename);
	List <User> findAllUsers();
	RegistrationRequest registerUser(RegistrationRequest registrationRequest) ;
    User RegisterUser(RegistrationRequest request);
}
