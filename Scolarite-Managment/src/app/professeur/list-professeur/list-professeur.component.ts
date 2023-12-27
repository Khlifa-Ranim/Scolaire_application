import { Component, OnInit,Inject } from '@angular/core';
import { Professeur } from '../Professeur.model';
import { ProfesseurService } from '../professeur.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-list-professeur',
  templateUrl: './list-professeur.component.html',
  styleUrls: ['./list-professeur.component.css']
})
export class ListProfesseurComponent implements OnInit {

  public professeurs !:  Professeur [];
  selectedProfesseurId!: number;
  selectedProfesseur!: Professeur;

  searchText: string = '';
  filteredProfesseurs: Professeur[] = []; // Filtered list

 
  constructor (
    private professeurService: ProfesseurService,
    private router: Router,
    private dialog: MatDialog,
    public authService:LoginService,
    // private modalService: NgbModal  // Inject NgbModal
    ){}

  ngOnInit(): void {
    this.getProfesseurs();
    this.filteredProfesseurs = this.professeurs;

  }
  public getProfesseurs(): void{
    this.professeurService.getProfessreur().subscribe(
      (response :Professeur [])=>{
        this.professeurs =response;
      },
      (error:HttpErrorResponse)=>{
        alert (error.message)
      }
    )
  } 

  filterProfesseurs(): void {
    if (!this.searchText) {
      this.filteredProfesseurs = this.professeurs; // If search text is empty, show all professors
    } else {
      this.filteredProfesseurs = this.professeurs.filter(professeur => this.matchesSearchCriteria(professeur));
    }
  }
  matchesSearchCriteria(professeur: any): boolean {
    if (!this.searchText) {
      // If search text is empty, show all professors
      return true;
    }
  
    const searchTextLower = this.searchText.toLowerCase();
    const nameMatches = professeur.name.toLowerCase().includes(searchTextLower);
    const emailMatches = professeur.email.toLowerCase().includes(searchTextLower);
    const phoneMatches = professeur.phone.toLowerCase().includes(searchTextLower);
    const courseMatches = professeur.matierTitle.toLowerCase().includes(searchTextLower);

  
    // Show the card if any of the properties match the search text
    return nameMatches || emailMatches || phoneMatches ||courseMatches;
  }
  

  editProfesseur(professeur: Professeur): void {
    this.router.navigate(['/editProfesseur', professeur.id]); // Assuming you have route setup for editProfesseur with id as a param
  }
  
  // deleteProfesseur(professeur: Professeur): void {
  //   this.router.navigate(['/deleteProfesseur', professeur.id]); // Assuming you have route setup for editProfesseur with id as a param
  // }


  onDeleteProfesseur(professeurId: number, professeurName: string, professeurTitle: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponentComponent, {
      data: { professeurName, professeurTitle },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.selectedProfesseurId = professeurId;
        this.professeurService.DeleteProfesseur(professeurId).subscribe(
          () => {
            console.log('Professeur deleted!');
            this.getProfesseurs(); // Refresh the list of professeurs
          },
          (error: HttpErrorResponse) => {
            console.error('Error deleting professeur:', error.message);
          }
        );
      }
    });
  }
}

