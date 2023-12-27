package com.Scolarite_managment.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Scolarite_managment.Service.ProfesseurService;
import com.Scolarite_managment.model.Professeur;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/professeur")
public class ProfesseurController {

	private final ProfesseurService professeurService;

	
	public ProfesseurController(ProfesseurService professeurService) {
		super();
		this.professeurService = professeurService;
	}
	
	@GetMapping("/all")
	public ResponseEntity <List <Professeur> > getAllProfesseur(){
	    
		List<Professeur> professeur=professeurService.findAllProfesseur();
		return  new ResponseEntity <> (professeur,HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity <Professeur> getProfesseurById(@PathVariable("id") Long id){
	    
		Professeur professeur=professeurService.findProfesseurById(id);
		return  new ResponseEntity <> (professeur,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity <Professeur> addProfesseurById(@RequestBody Professeur professeur){
	    
		Professeur newProfesseur=professeurService.addProfesseur(professeur);
		return  new ResponseEntity <> (newProfesseur,HttpStatus.CREATED);
	}
	@PutMapping("/update")
	public ResponseEntity <Professeur> updateProfesseurById(@RequestBody Professeur professeur){
	    
		Professeur updatedProfesseur=professeurService.updateProfesseur(professeur);
		return  new ResponseEntity <> (updatedProfesseur,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity <?> deleteProfesseurById(@PathVariable("id")  Long id){
	    
		professeurService.deleteProfesseurById(id);
		return  new ResponseEntity <> (HttpStatus.OK);
	}
	
}
