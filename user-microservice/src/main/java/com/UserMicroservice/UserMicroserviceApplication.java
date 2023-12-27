package com.UserMicroservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.UserMicroservice.Service.UserService;
import com.UserMicroservice.model.Role;
import com.UserMicroservice.model.User;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class UserMicroserviceApplication {
	
	@Autowired
	UserService userService;
	
	public static void main(String[] args) {
		SpringApplication.run(UserMicroserviceApplication.class, args);
		

	}
	@PostConstruct
	/*void init_users() {
		//ajouter les rôles
		userService.addRole(new Role(null,"ADMIN"));
		userService.addRole(new Role(null,"USER"));
		//ajouter les users
		userService.SaveUser(new User(null,"admin","admin","123",true,null));
		userService.SaveUser(new User(null,"amin","amin","123",true,null));
		userService.SaveUser(new User(null,"sabri","sabri","123",true,null));
		//ajouter les rôles aux users
		userService.addRoleToUser("admin", "ADMIN");
		userService.addRoleToUser("admin", "USER");
		userService.addRoleToUser("amin", "USER");
		userService.addRoleToUser("sabri", "USER");
		} ;*/

		@Bean
		BCryptPasswordEncoder getBCE() {
		return new BCryptPasswordEncoder();
		}

}
