import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']  // Utilisez 'styleUrls' au lieu de 'styleUrl'
})
export class ProjetComponent {
 
  project: { nom: string, description: string, date_debut: string, date_fin: string, statute: string }
    = { nom: '', description: '', date_debut: '', date_fin: '', statute: '' };

  validation: string = "false";

  constructor(private http: HttpClient, private router: Router) { }

  onClick(): void {
    const apiUrl = 'http://localhost:8080/Project/Add';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    this.http.post(apiUrl, this.project, { headers }).subscribe(
      (data: any) => {
        this.validation = "true";
        this.router.navigate(['/home']);
        alert("projet enregistré avec succès !");
        console.log('POST Response:', data);
      },
      (error) => {
        console.error('POST Error:', error);
      }
    );
  }
}
