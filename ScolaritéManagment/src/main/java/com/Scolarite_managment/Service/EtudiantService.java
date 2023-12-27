package com.Scolarite_managment.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Scolarite_managment.Repos.ReposEtudiant;
import com.Scolarite_managment.model.Etudiant;

import jakarta.transaction.Transactional;

@Service
public class EtudiantService {

	public ReposEtudiant reposEtudiant;

	@Autowired

	public EtudiantService(ReposEtudiant reposEtudiant) {
		
		this.reposEtudiant = reposEtudiant;
	}
	
	
	public Etudiant addEtudiant(Etudiant etudiant) {
		etudiant.setStudentCode(UUID.randomUUID().toString());

		return reposEtudiant.save(etudiant);
	}
	
	public List <Etudiant> getAllEtudiant(){
		return reposEtudiant.findAll();
	}
	
	public Etudiant updateEtudiant(Etudiant etudiant) {
		return reposEtudiant.save(etudiant);
	}
	
    @Transactional
	
	public void deleteEtudiantById(Long id) {
		reposEtudiant.deleteEtudiantById(id);
	}
	
	   public Etudiant findEtudiantById(Long id) {
		   
		   return reposEtudiant.findEtudiantById(id);
	   }
}
