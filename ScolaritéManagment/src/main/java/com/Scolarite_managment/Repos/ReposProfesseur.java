package com.Scolarite_managment.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Scolarite_managment.model.Professeur;

public interface ReposProfesseur extends JpaRepository <Professeur,Long> {
	void deleteProfesseurById (Long id);

	Professeur findProfesseurById (Long id);

}
