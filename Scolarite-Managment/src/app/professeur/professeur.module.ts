import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfesseurComponent } from './list-professeur/list-professeur.component';
import { AddProfesseurComponent } from './add-professeur/add-professeur.component';
import { UpdateProfesseurComponent } from './update-professeur/update-professeur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    ListProfesseurComponent,
    AddProfesseurComponent,
    UpdateProfesseurComponent,
    ConfirmationDialogComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MatDialogModule,
    MatButtonModule,
    
  ],
  // exports: [
  //   ProfesseurModule,
  // ],
})
export class ProfesseurModule { }
