import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {

 
  public etudiant !:  Etudiant [];
  selectedEtudiantId!: number;
  selectedEtudiant!: Etudiant;

  searchText: string = '';
  filteredEtudiants: Etudiant[] = []; // Filtered list

 
  constructor (
    private etudiantService: EtudiantService,
    private router: Router,
    private dialog: MatDialog,
    public authService:LoginService,


    ){}

  ngOnInit(): void {
    this.getEtudiants();
    this.filteredEtudiants = this.etudiant;

  }
  public getEtudiants(): void{
    this.etudiantService.getEtudiant().subscribe(
      (response :Etudiant [])=>{
        this.etudiant =response;
      },
      (error:HttpErrorResponse)=>{
        alert (error.message)
      }
    )
  } 

  filterEtudiants(): void {
    if (!this.searchText) {
      this.filteredEtudiants = this.etudiant; // If search text is empty, show all professors
    } else {
      this.filteredEtudiants = this.etudiant.filter(etud => this.matchesSearchCriteria(etud));
    }
  }
  matchesSearchCriteria(etudiant: any): boolean {
    if (!this.searchText) {
      // If search text is empty, show all etudiants
      return true;
    }
  
    // Ensure etudiant is defined and contains the expected properties
    if (etudiant && etudiant.name && etudiant.email && etudiant.levelOfStudy !== undefined) {
      const searchTextLower = this.searchText.toLowerCase();
      const nameMatches = etudiant.name.toLowerCase().includes(searchTextLower);
      const emailMatches = etudiant.email.toLowerCase().includes(searchTextLower);
      const levelOfStudyMatches = etudiant.levelOfStudy.toString().toLowerCase().includes(searchTextLower);
  
      // Show the card if any of the properties match the search text
      return nameMatches || emailMatches || levelOfStudyMatches;
    }
  
    // If etudiant is undefined or properties are missing, don't match
    return false;
  }
  

  editEtudiant(etudiants: Etudiant): void {
    this.router.navigate(['/editEtudiant', etudiants.id]); // Assuming you have route setup for editProfesseur with id as a param
  }



  onDeleteEtudiant(etudiantId: number, etudiantName: string, LevelOfStudy: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponentComponent, {
      data: { etudiantName, LevelOfStudy },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.selectedEtudiantId = etudiantId;
        this.etudiantService.DeleteEtudiant(etudiantId).subscribe(
          () => {
            console.log('Etudiant deleted!');
            this.getEtudiants(); // Refresh the list of etudiant
          },
          (error: HttpErrorResponse) => {
            console.error('Error deleting Etudiant:', error.message);
          }
        );
      }
    });
  }
}
