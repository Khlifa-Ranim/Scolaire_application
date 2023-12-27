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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.Scolarite_managment.Service.EtudiantService;
import com.Scolarite_managment.model.Etudiant;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/etudiant")
public class EtudiantController {

 public EtudiantService etudiantService;

	public EtudiantController(EtudiantService etudiantService) {
		this.etudiantService = etudiantService;
	}
 
 @RequestMapping(value="/all",method = RequestMethod.GET)

 public ResponseEntity <List<Etudiant>> GetAllEtudiant()
 {
	 List<Etudiant> etudiant= etudiantService.getAllEtudiant();
	 return  new ResponseEntity   <>(etudiant,HttpStatus.OK);
 }
 
 @RequestMapping(value="/add",method = RequestMethod.POST)

 public ResponseEntity <Etudiant> addEtudiant(@RequestBody Etudiant etudiant) {
	 Etudiant newEtudiant =etudiantService.addEtudiant(etudiant);
	 return new ResponseEntity <> (newEtudiant,HttpStatus.CREATED);
	 
 }
 
 @RequestMapping(value="/update",method = RequestMethod.PUT)

 public ResponseEntity <Etudiant> updateEtudiant(@RequestBody Etudiant etudiant){
	 Etudiant updatedEtudiant =etudiantService.updateEtudiant(etudiant);
	 return new ResponseEntity<>(updatedEtudiant,HttpStatus.OK);
	 }
 @RequestMapping(value="/find/{id}",method = RequestMethod.GET)

 public ResponseEntity <Etudiant> GetEtudiant(@PathVariable("id") Long id){
	 Etudiant etudiant = etudiantService.findEtudiantById(id);
	 return new ResponseEntity<>(etudiant,HttpStatus.OK);
	 
 }
 
 @RequestMapping(value="/delete/{id}",method = RequestMethod.DELETE)

 public ResponseEntity <?> deleteEtudiant (@PathVariable ("id") Long id)
 {
	 etudiantService.deleteEtudiantById(id);
	 return new ResponseEntity<>(HttpStatus.OK);
 }
 
}
