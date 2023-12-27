package com.Scolarite_managment.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Course {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable=false,updatable=false)
	private Long id;
	private String name;
	private String description;
	private String Professeur;
	@Column(nullable=false, updatable=false)
	private String coursCode;

	


	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCoursCode() {
		return coursCode;
	}

	public void setCoursCode(String coursCode) {
		this.coursCode = coursCode;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getProfesseur() {
		return Professeur;
	}

	public void setProfesseur(String professeur) {
		Professeur = professeur;
	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", name=" + name + ", coursCode=" + coursCode + ", description=" + description
				+ ", Professeur=" + Professeur + "]";
	}
	
	
	
	
	
	

}
