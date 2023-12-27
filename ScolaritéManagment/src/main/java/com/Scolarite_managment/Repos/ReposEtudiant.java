package com.Scolarite_managment.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Scolarite_managment.model.Etudiant;

public interface ReposEtudiant extends JpaRepository<Etudiant,Long> {

	void deleteEtudiantById(Long id);
	Etudiant findEtudiantById(Long id);
}
