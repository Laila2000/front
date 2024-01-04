import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent {
  tache: { titre: string, description: string, statute: string, signed: string }
    = { titre: '', description: '', statute: '', signed: '' };

   user: { email: string, mdp: string } = { email: '', mdp: '' }; // Use ':' instead of '=' for property assignment
 
  validation: string = "false";

  constructor(private http: HttpClient, private router: Router) { }

  onClick(): void {
    const apiUrl = 'http://localhost:8080/Tasks/ADDTask';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.http.post(apiUrl, this.tache, { headers }).subscribe(
      (data: any) => {
        this.validation = "true";
        this.router.navigate(['/home']);
        alert("tache enregistré avec succès !");
        console.log('POST Response:', data);
      },
      (error) => {
        console.error('POST Error:', error);
      }
    );
  }
 
  
}