import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtudiantService } from '../etudiant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Etudiant } from '../etudiant.model';

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.css']
})
export class UpdateEtudiantComponent implements OnInit {

   
  // public updateProfesseur!: Professeur;
  etudiantForm!: FormGroup;
  etudiant!: Etudiant;

  constructor(
    private etudiantService: EtudiantService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.etudiantForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      levelOfStudy: ['', Validators.required],
      imageUrl: ['', Validators.required],
      studentCode: ['']
    });
 
    // Assume getProfesseurById() is a method in your service to fetch the professeur details
    this.etudiantService.getEtudiantById(this.route.snapshot.params['id']).subscribe(data => {
      this.etudiant = data;
      this.etudiantForm.patchValue(this.etudiant);
    });
  }

onSubmit() {

  if (this.etudiantForm.valid) {
    this.etudiantService.UpdateEtudiant(this.etudiantForm.value).subscribe(res => {
      console.log('Student updated!');
      this.router.navigate(['/Student']); // or where you want to redirect after update
    });
  }
}


onClose() {
  // You can add any additional logic before navigation if needed
  this.router.navigate(['/Student']);
}


}
