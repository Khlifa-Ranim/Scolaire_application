import { Component, OnInit } from '@angular/core';
import { Cours } from '../Cours.model';
import { CoursService } from '../cours.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfirmationDialogComponentComponent } from '../confirmation-dialog-component/confirmation-dialog-component.component';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-list-cours',
  templateUrl: './list-cours.component.html',
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {

 
  public cours !:  Cours [];
  selectedCoursId!: number;
  selectedCours!: Cours;

  searchText: string = '';
  filteredCours: Cours[] = []; // Filtered list

  constructor (
    private coursService: CoursService,
    private router: Router,
    private dialog: MatDialog,
    public authService:LoginService,

    // private modalService: NgbModal  // Inject NgbModal
    ){}

  ngOnInit(): void {
    this.getCours();
    this.filteredCours = this.cours;

  }
  public getCours(): void{
    this.coursService.getCours().subscribe(
      (response :Cours [])=>{
        this.cours =response;
      },
      (error:HttpErrorResponse)=>{
        alert (error.message)
      }
    )
  } 

  filterCours(): void {
    if (!this.searchText) {
      this.filteredCours = this.cours; // If search text is empty, show all professors
    } else {
      this.filteredCours = this.cours.filter(cour => this.matchesSearchCriteria(cour));
    }
  }

  
  matchesSearchCriteria(cours: any): boolean {
    if (!this.searchText) {
      // If search text is empty, show all professors
      return true;
    }
    if (cours && cours.name && cours.description && cours.professeur!== undefined) {

    const searchTextLower = this.searchText.toLowerCase();
    const nameMatches = cours.name.toLowerCase().includes(searchTextLower);
    const descriptionMatches = cours.description.toLowerCase().includes(searchTextLower);
    const professeuratches = cours.professeur.toLowerCase().includes(searchTextLower);

  
    // Show the card if any of the properties match the search text
    return nameMatches || descriptionMatches || professeuratches;
    }
    return false;

  }
  

  editCours(cour: Cours): void {
    this.router.navigate(['/editCours', cour.id]); // Assuming you have route setup for editProfesseur with id as a param
  }
  
  // deleteProfesseur(professeur: Professeur): void {
  //   this.router.navigate(['/deleteProfesseur', professeur.id]); // Assuming you have route setup for editProfesseur with id as a param
  // }


  onDeleteCours(coursId: number, coursName: string, Professeur: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponentComponent, {
      data: { coursName, Professeur },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.selectedCoursId= coursId;
        this.coursService.DeleteCours(coursId).subscribe(
          () => {
            console.log('cours deleted!');
            this.getCours(); // Refresh the list of professeurs
          },
          (error: HttpErrorResponse) => {
            console.error('Error deleting cours:', error.message);
          }
        );
      }
    });
  }
}
