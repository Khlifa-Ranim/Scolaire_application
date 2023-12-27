import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Professeur } from '../Professeur.model';
import { ProfesseurService } from '../professeur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-professeur',
  templateUrl: './update-professeur.component.html',
  styleUrls: ['./update-professeur.component.css']
})
export class UpdateProfesseurComponent implements OnInit {

   
  // public updateProfesseur!: Professeur;
  professeurForm!: FormGroup;
  professeur!: Professeur;

  constructor(
    private professeurService: ProfesseurService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.professeurForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      matierTitle: ['', Validators.required],
      imageUrl: ['', Validators.required],
      professeurCode: ['', Validators.required]
    });
 
    // Assume getProfesseurById() is a method in your service to fetch the professeur details
    this.professeurService.getProfesseurById(this.route.snapshot.params['id']).subscribe(data => {
      this.professeur = data;
      this.professeurForm.patchValue(this.professeur);
    });
  }

onSubmit() {
  if (this.professeurForm.valid) {
    this.professeurService.UpdateProfesseur(this.professeurForm.value).subscribe(res => {
      console.log('Professeur updated!');
      this.router.navigate(['/professeur']); // or where you want to redirect after update
    });
  }
}


onClose() {
  // You can add any additional logic before navigation if needed
  this.router.navigate(['/professeur']);
}

}
