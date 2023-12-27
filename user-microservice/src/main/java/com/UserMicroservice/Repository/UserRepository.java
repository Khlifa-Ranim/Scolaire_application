package com.UserMicroservice.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UserMicroservice.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	
	User findByUsername(String username);
	Optional <User> findByEmail(String email);

}
