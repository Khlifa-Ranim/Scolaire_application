import { Component, OnInit, ViewChild } from '@angular/core';
import { Professeur } from '../Professeur.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ProfesseurService } from '../professeur.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-professeur',
  templateUrl: './add-professeur.component.html',
  styleUrls: ['./add-professeur.component.css']
})
export class AddProfesseurComponent implements OnInit {
  name: string = '';
  email:string= '';
  phone:string= '';
  matierTitle:string= '';
  imageUrl:string= '';
  @ViewChild('addForm') addForm!: NgForm;


  constructor(
    private professeurService: ProfesseurService,
    private router: Router
    ) { } // Inject the service



  ngOnInit(): void {
  }



  public onAddProfesseur(addForm: NgForm): void {
    // Check if the form is valid
    if (!addForm.valid) {
      console.error('Form is not valid');
      alert('Please fill out the form correctly.');

      return;
    }
  
    const newProfesseur: Professeur = {
      id: 0, // Assuming your server generates the ID
      name: this.name,
      email: this.email,
      phone: this.phone,
      matierTitle: this.matierTitle,
      imageUrl: this.imageUrl,
      professeurCode: '' // Provide a default value or leave it empty if not required
    };
  
    this.professeurService.AddProfesseur(newProfesseur).subscribe(
      (response: Professeur) => {
        console.log(response);
        // Clear the form after successful submission if needed
        addForm.reset();
        console.log('Professeur updated!');
        this.router.navigate(['/professeur']); // or where you want to redirect after update
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClose() {
    // You can add any additional logic before navigation if needed
    this.router.navigate(['/professeur']);
  }
  
  
}
