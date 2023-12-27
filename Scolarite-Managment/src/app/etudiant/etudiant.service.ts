import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Etudiant } from './etudiant.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor (
   private http: HttpClient,
   private authService: LoginService,
   ){}

  public getEtudiant():Observable <Etudiant[]>{
   let jwt = this.authService.getToken();
   jwt = "Bearer " + jwt;
   let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.get<Etudiant[]>(`${this.apiServerUrl}/etudiant/all`,{ headers: httpHeaders })   }

      
  public AddEtudiant (etudiant:Etudiant):Observable <Etudiant>{
   let jwt = this.authService.getToken();
   jwt = "Bearer " + jwt;
   let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.post<Etudiant>(`${this.apiServerUrl}/etudiant/add`,etudiant,{ headers: httpHeaders })  
   };

   public UpdateEtudiant (etudiant:Etudiant):Observable <Etudiant>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.put<Etudiant>(`${this.apiServerUrl}/etudiant/update`,etudiant,{ headers: httpHeaders })  
   };

   public DeleteEtudiant (etudiantId:number):Observable <void>{
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      return this.http.delete<void>(`${this.apiServerUrl}/etudiant/delete/${etudiantId}`,{ headers: httpHeaders })  
   };

   public getEtudiantById(etudiantId: number): Observable<Etudiant> {
      let jwt = this.authService.getToken();
      jwt = "Bearer " + jwt;
      let httpHeaders = new HttpHeaders({ "Authorization": jwt })
      // You need to implement this method based on your API
      return this.http.get<Etudiant>(`${this.apiServerUrl}/etudiant/find/${etudiantId}`,{ headers: httpHeaders })  

    }
}
