package com.Scolarite_managment.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Etudiant {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable=false,updatable=false)
	private Long id;
	private String name;
	private String email;
	private int LevelOfStudy;
	private String imageUrl;
	@Column(nullable=false, updatable=false)
	private String studentCode;
	

	
	public Etudiant() {
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


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public int getLevelOfStudy() {
		return LevelOfStudy;
	}


	public void setLevelOfStudy(int levelOfStudy) {
		LevelOfStudy = levelOfStudy;
	}


	public String getImageUrl() {
		return imageUrl;
	}


	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}


	public String getStudentCode() {
		return studentCode;
	}


	public void setStudentCode(String studentCode) {
		this.studentCode = studentCode;
	}


	@Override
	public String toString() {
		return "Etudiant [id=" + id + ", name=" + name + ", email=" + email + ", LevelOfStudy=" + LevelOfStudy
				+ ", imageUrl=" + imageUrl + ", studentCode=" + studentCode + "]";
	}
	
	
	
	

}
