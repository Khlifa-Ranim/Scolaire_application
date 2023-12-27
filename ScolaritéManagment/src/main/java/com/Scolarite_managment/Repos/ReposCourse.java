package com.Scolarite_managment.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Scolarite_managment.model.Course;

public interface ReposCourse extends JpaRepository<Course,Long>{
	
  void deleteCourseById(Long id);
  Course findCourseById (Long id);
}
