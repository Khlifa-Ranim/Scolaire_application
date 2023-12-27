import { Injectable } from '@angular/core';
import { Professeur } from './Professeur.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
   providedIn: 'root'
})
export class ProfesseurService {
   private apiServerUrl = environment.apiBaseUrl;

   constructor(
      private http: HttpClient,
      private authService: LoginService,
   ) { }

   public getProfessreur(): Observable<Professeur[]> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })

      return this.http.get<Professeur[]>(`${this.apiServerUrl}/professeur/all`, { headers: httpHeaders })
   }


   public AddProfesseur(professeur: Professeur): Observable<Professeur> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.post<Professeur>(`${this.apiServerUrl}/professeur/add`, professeur, { headers: httpHeaders })
   };

   public UpdateProfesseur(professeur: Professeur): Observable<Professeur> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.put<Professeur>(`${this.apiServerUrl}/professeur/update`, professeur, { headers: httpHeaders })
   };

   public DeleteProfesseur(professeurId: number): Observable<void> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.delete<void>(`${this.apiServerUrl}/professeur/delete/${professeurId}`, { headers: httpHeaders })
   };

   public getProfesseurById(professeurId: number): Observable<Professeur> {
      // You need to implement this method based on your API
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.get<Professeur>(`${this.apiServerUrl}/professeur/find/${professeurId}`, { headers: httpHeaders })

   }
}
