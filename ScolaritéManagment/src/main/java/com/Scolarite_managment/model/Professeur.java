package com.Scolarite_managment.model;




import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Professeur {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable=false,updatable=false)
private Long id;
private String name;
private String email;
private String matierTitle;
private String phone;
private String imageUrl;
  @Column(nullable=false, updatable=false)
private String professeurCode;
  
  
public Professeur() {
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
public String getMatierTitle() {
	return matierTitle;
}
public void setMatierTitle(String matierTitle) {
	this.matierTitle = matierTitle;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getImageUrl() {
	return imageUrl;
}
public void setImageUrl(String imageUrl) {
	this.imageUrl = imageUrl;
}
public String getProfesseurCode() {
	return professeurCode;
}
public void setProfesseurCode(String professeurCode) {
	this.professeurCode = professeurCode;
}

@Override
public String toString() {
	return "Professeur [id=" + id + ", name=" + name + ", email=" + email + ", matierTitle=" + matierTitle + ", phone="
			+ phone + ", imageUrl=" + imageUrl + ", employeeCode=" + professeurCode + "]";
}



}
