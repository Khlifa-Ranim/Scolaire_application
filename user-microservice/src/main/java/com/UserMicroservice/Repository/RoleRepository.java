package com.UserMicroservice.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UserMicroservice.model.Role;

public interface RoleRepository extends JpaRepository<Role,Long>{
	Role findByRole (String Role);
	

}
