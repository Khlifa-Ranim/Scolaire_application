import { Component, OnInit } from '@angular/core';
import { Cours } from '../Cours.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CoursService } from '../cours.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.css']
})
export class UpdateCoursComponent implements OnInit {

   
  // public updateProfesseur!: Professeur;
  coursForm!: FormGroup;
  cours!: Cours;

  constructor(
    private coursService: CoursService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit() {
    this.coursForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      professeur: ['', Validators.required],
      coursCode: ['']
    });
 
    // Assume getProfesseurById() is a method in your service to fetch the professeur details
    this.coursService.getCoursById(this.route.snapshot.params['id']).subscribe(data => {
      this.cours = data;
      this.coursForm.patchValue(this.cours);
    });
  }

onSubmit() {

  if (this.coursForm.valid) {
    this.coursService.UpdateCours(this.coursForm.value).subscribe(res => {
      console.log('cours updated!');
      this.router.navigate(['/Cours']); // or where you want to redirect after update
    });
  }
}


onClose() {
  // You can add any additional logic before navigation if needed
  this.router.navigate(['/Cours']);
}
}
