package com.Scolarite_managment.Service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Scolarite_managment.Repos.ReposCourse;
import com.Scolarite_managment.model.Course;

import jakarta.transaction.Transactional;

@Service
public class CourseService {
	public ReposCourse reposCourse;

	@Autowired
	public CourseService(ReposCourse reposCourse) {
		this.reposCourse = reposCourse;
	}
	
	public List <Course> findAllCourse(){
		return reposCourse.findAll();
	}
	

	public Course findCourseById(Long id){
		return reposCourse.findCourseById(id);
	}
	public Course addCourse(Course course)
	{
		course.setCoursCode(UUID.randomUUID().toString());
		return reposCourse.save(course);
	}
	 
	public Course EditCourse(Course course) {
		 return reposCourse.save(course);
	}
	
    @Transactional

	public void deleteCourse(Long id) {
		reposCourse.deleteById(id);
	}
	

}
