import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']  // Utilisez 'styleUrls' au lieu de 'styleUrl'
})
export class CreerComponent implements OnInit {
  project: { nom: string, description: string, date_debut: string, date_fin: string, statute: string }
    = { nom: '', description: '', date_debut: '', date_fin: '', statute: '' };

  apidata: any[] = [];
  path: string = 'http://localhost:8080/Project/Getprojects';

  validation: string = "false";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/Project/Getprojects').subscribe(
      (data) => {
        this.apidata = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des projets:', error);
      }
    );
  }

  onClick(): void {
    const apiUrl = 'http://localhost:8080/Project/Add';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, this.project, { headers }).subscribe(
      (data: any) => {
        this.validation = "true";
        alert("Votre projet a été créé avec succès !");
      },
      (error) => {
        console.error('POST Error:', error);
      }
    );
  }
}
