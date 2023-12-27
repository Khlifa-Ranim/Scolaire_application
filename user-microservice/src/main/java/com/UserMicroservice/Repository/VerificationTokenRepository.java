package com.UserMicroservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UserMicroservice.model.VerificationToken;

public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
	 VerificationToken findByToken(String token);

}
