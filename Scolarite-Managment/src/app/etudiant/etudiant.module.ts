import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';



@NgModule({
  declarations: [
    AddEtudiantComponent,
    ListEtudiantComponent,
    UpdateEtudiantComponent,
    ConfirmationDialogComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    MatDialogModule,
    MatButtonModule,
  ]
})
export class EtudiantModule { }
