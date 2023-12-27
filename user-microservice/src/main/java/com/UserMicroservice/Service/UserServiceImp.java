package com.UserMicroservice.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.UserMicroservice.Repository.RoleRepository;
import com.UserMicroservice.Repository.UserRepository;
import com.UserMicroservice.Repository.VerificationTokenRepository;
import com.UserMicroservice.exception.EmailAlreadyExistsException;
import com.UserMicroservice.model.RegistrationRequest;
import com.UserMicroservice.model.Role;
import com.UserMicroservice.model.User;
import com.UserMicroservice.model.VerificationToken;

import jakarta.transaction.Transactional;

@Transactional
@Service

public class UserServiceImp implements  UserService {
	
	@Autowired
	 UserRepository userRepository;
	@Autowired
    RoleRepository roleRepository;
	@Autowired
	VerificationTokenRepository verificationTokenRepo;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;
	


	@Override
	public User findUserByUsername(String username) {
		return userRepository.findByUsername(username);
	}

	@Override
	public Role addRole(Role role) {
		return roleRepository.save(role);
	}

	@Override
	public User addRoleToUser(String username, String rolename) {
	User usr=userRepository.findByUsername(username);
	Role rle=roleRepository.findByRole(rolename);
	usr.getRoles().add(rle);
	return usr;
	}
	@Override
	public List <User> findAllUsers(){
		return userRepository.findAll();
	}

	@Override
	public RegistrationRequest registerUser(RegistrationRequest registrationRequest) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User SaveUser(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

	@Override
	public User RegisterUser(RegistrationRequest request) {
		Optional <User> optionaluser = userRepository.findByEmail(request.getEmail());
		if(optionaluser.isPresent())
		throw new EmailAlreadyExistsException("email déjà existant!");
		User newUser = new User();
		 newUser.setUsername(request.getUsername());
		 newUser.setEmail(request.getEmail());
		 newUser.setPassword(bCryptPasswordEncoder.encode(request.getPassword()));
		 newUser.setEnabled(false);
		 userRepository.save(newUser);
		 
		 //ajouter à newUser le role par défaut USER
		 Role r = roleRepository.findByRole("USER");
		 List<Role> roles = new ArrayList<>();
		 roles.add(r);
		 newUser.setRoles(roles);

		 userRepository.save(newUser);

		 //génére le code secret
		 String code = this.generateCode();

		 VerificationToken token = new VerificationToken(code, newUser);
		 verificationTokenRepo.save(token);

		 return newUser;

	}
	

	public String generateCode() {
		 Random random = new Random();
		 Integer code = 100000 + random.nextInt(900000);

		 return code.toString();
		}

}
