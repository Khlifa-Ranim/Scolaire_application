import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cours } from './Cours.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor (
   private http: HttpClient,
   private authService: LoginService,
   ){}

  public getCours ():Observable <Cours[]>{
   let jwt = this.authService.getToken();
   jwt = "Bearer " + jwt;
   let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.get<Cours[]>(`${this.apiServerUrl}/course/all`, { headers: httpHeaders })   }

      
  public AddCours (cours:Cours):Observable <Cours>{
   let jwt = this.authService.getToken();
   jwt = "Bearer " + jwt;
   let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.post<Cours>(`${this.apiServerUrl}/course/add`,cours, { headers: httpHeaders })  
   };

   public UpdateCours  (cours:Cours):Observable <Cours>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.put<Cours>(`${this.apiServerUrl}/course/edit`,cours, { headers: httpHeaders })  
   };

   public DeleteCours (coursId:number):Observable <void>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.delete<void>(`${this.apiServerUrl}/course/delete/${coursId}`, { headers: httpHeaders })  
   };

   public getCoursById(coursId: number): Observable<Cours> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      // You need to implement this method based on your API
      return this.http.get<Cours>(`${this.apiServerUrl}/course/find/${coursId}`, { headers: httpHeaders })  

    }
}
