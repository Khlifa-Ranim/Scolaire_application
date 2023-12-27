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

import com.Scolarite_managment.Service.CourseService;
import com.Scolarite_managment.model.Course;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/course")
public class CourseController {
	
	CourseService courseService;

	public CourseController(CourseService courseService) {
		this.courseService = courseService;
	}
	
	@GetMapping("/all")
	public ResponseEntity <List<Course>> getAllCourse (){
		List<Course> course= courseService.findAllCourse();
		return  new ResponseEntity <>(course,HttpStatus.OK);
		
	}
	

	@PostMapping("/add")
	public ResponseEntity <Course> AddCourse(@RequestBody Course course){
		Course newcourse = courseService.addCourse(course);
		return new ResponseEntity <> (newcourse,HttpStatus.CREATED);
	}
	
	
	@PutMapping("/edit")
    public ResponseEntity <Course> EditCourse(@RequestBody Course course){
     Course EditCourse =courseService.EditCourse(course);
     return new ResponseEntity<>(EditCourse,HttpStatus.OK);
		
	}
	
	@DeleteMapping("/delete/{id}")
    public ResponseEntity <Course> deleteCourse(@PathVariable("id") Long id){
     courseService.deleteCourse(id);
     return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity <Course> findCourseById(@PathVariable("id")Long id)
	{
		Course course =courseService.findCourseById(id);
		return new ResponseEntity <>(course,HttpStatus.OK);
	}
	
	

}
