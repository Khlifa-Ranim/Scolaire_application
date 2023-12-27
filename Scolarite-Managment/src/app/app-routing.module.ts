import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProfesseurComponent } from './professeur/list-professeur/list-professeur.component';
import { AddProfesseurComponent } from './professeur/add-professeur/add-professeur.component';
import { UpdateProfesseurComponent } from './professeur/update-professeur/update-professeur.component';
import { LoginComponent } from './login/login/login.component';
import { ListEtudiantComponent } from './etudiant/list-etudiant/list-etudiant.component';
import { ListCoursComponent } from './cours/list-cours/list-cours.component';
import { AddEtudiantComponent } from './etudiant/add-etudiant/add-etudiant.component';
import { AddCoursComponent } from './cours/add-cours/add-cours.component';
import { UpdateEtudiantComponent } from './etudiant/update-etudiant/update-etudiant.component';
import { UpdateCoursComponent } from './cours/update-cours/update-cours.component';
import { ForbiddenComponent } from './login/forbidden/forbidden.component';
import { ProduitGuard } from './login/login.guard';
import { RegisterComponent } from './login/register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'professeur', component: ListProfesseurComponent },
  { path: 'addprofesseur', component: AddProfesseurComponent ,canActivate:[ProduitGuard]},
  { path: 'editProfesseur/:id', component: UpdateProfesseurComponent,canActivate:[ProduitGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'Student', component: ListEtudiantComponent },
  { path: 'addStudent', component:AddEtudiantComponent,canActivate:[ProduitGuard] },
  { path: 'editEtudiant/:id', component: UpdateEtudiantComponent },
  { path: 'Cours', component: ListCoursComponent ,canActivate:[ProduitGuard]},
  { path: 'addCours', component: AddCoursComponent ,canActivate:[ProduitGuard]},
  { path: 'editCours/:id', component: UpdateCoursComponent ,canActivate:[ProduitGuard] },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: 'register', component: RegisterComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
