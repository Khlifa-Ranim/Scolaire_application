import { Component, OnInit } from '@angular/core';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Cours } from '../Cours.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {

  name: string = '';
  description:string= '';
  professeur:string= '';


  constructor(
    private coursService: CoursService,
    private router: Router
    ) { } // Inject the service



  ngOnInit(): void {
  }



  public onAddCours(addForm: NgForm): void {
    // Check if the form is valid
    if (!addForm.valid) {
      console.error('Form is not valid');
      alert('Please fill out the form correctly.');

      return;
    }
  
    const newCours: Cours = {
      id: 0, // Assuming your server generates the ID
      name: this.name,
      description: this.description,
      professeur: this.professeur,
      coursCode: '' // Provide a default value or leave it empty if not required
    };
  
    this.coursService.AddCours(newCours).subscribe(
      (response: Cours) => {
        console.log(response);
        // Clear the form after successful submission if needed
        addForm.reset();
        console.log('Course Adedd !');
        this.router.navigate(['/Cours']); // or where you want to redirect after update
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClose() {
    // You can add any additional logic before navigation if needed
    this.router.navigate(['/Cours']);
  }

}
