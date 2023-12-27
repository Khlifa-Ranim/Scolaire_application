import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Etudiant } from '../etudiant.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
  name: string = '';
  email:string= '';
  levelOfStudy!:number;
  imageUrl:string= '';



  constructor(
    private etudiantService: EtudiantService,
    private router: Router
    ) { } // Inject the service



  ngOnInit(): void {
  }



  public onAddEtudiant(addForm: NgForm): void {
    // Check if the form is valid
    if (!addForm.valid) {
      console.error('Form is not valid');
      alert('Please fill out the form correctly.');

      return;
    }
  
    const newEtudiant: Etudiant = {
      id: 0, // Assuming your server generates the ID
      name: this.name,
      email: this.email,
      levelOfStudy: this.levelOfStudy,
      imageUrl: this.imageUrl,
      studentCode: '' // Provide a default value or leave it empty if not required
    };
  
    this.etudiantService.AddEtudiant(newEtudiant).subscribe(
      (response: Etudiant) => {
        console.log(response);
        // Clear the form after successful submission if needed
        addForm.reset();
        console.log('Etudiant Adedd !');
        this.router.navigate(['/Student']); // or where you want to redirect after update
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClose() {
    // You can add any additional logic before navigation if needed
    this.router.navigate(['/Student']);
  }

}
