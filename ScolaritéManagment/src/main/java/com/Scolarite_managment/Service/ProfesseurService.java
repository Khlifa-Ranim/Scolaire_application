package com.Scolarite_managment.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Scolarite_managment.Repos.ReposProfesseur;
import com.Scolarite_managment.model.Professeur;

import jakarta.transaction.Transactional;


@Service
public class ProfesseurService {
	
	private final ReposProfesseur reposProfesseur;

	
	@Autowired
	public ProfesseurService(ReposProfesseur reposProfesseur) {
		this.reposProfesseur = reposProfesseur;
	}
	
	public Professeur addProfesseur(Professeur professeur) {
		professeur.setProfesseurCode(UUID.randomUUID().toString());
		
		return reposProfesseur.save(professeur);
	}
	
	public Professeur updateProfesseur(Professeur professeur) {		
		return reposProfesseur.save(professeur);
	}
	
	
	public List <Professeur> findAllProfesseur() {
		
		return reposProfesseur.findAll();	}
	
	public Professeur findProfesseurById(Long id) {
		
		return reposProfesseur.findProfesseurById(id);	}
	 
    @Transactional

     public void deleteProfesseurById(Long id) {
		
		reposProfesseur.deleteProfesseurById(id);	}
     
  
	

}
