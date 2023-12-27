import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCoursComponent } from './list-cours/list-cours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddCoursComponent } from './add-cours/add-cours.component';
import { UpdateCoursComponent } from './update-cours/update-cours.component';
import { ConfirmationDialogComponentComponent } from './confirmation-dialog-component/confirmation-dialog-component.component';



@NgModule({
  declarations: [
    ListCoursComponent,
    AddCoursComponent,
    UpdateCoursComponent,
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
export class CoursModule { }
