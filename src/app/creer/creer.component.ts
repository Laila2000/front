import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrl: './creer.component.css'
})
export class CreerComponent implements OnInit{
  apiEndpoint = 'http://localhost:8080/Project/Getprojects'; 
  projets: any[] = [];// Replace with your API endpoint
  constructor(private http: HttpClient) {}

ngOnInit(): void {
    this.http.get<any[]>(this.apiEndpoint).subscribe(
      (data) => {
        this.projets = data;  // Supposons que votre API renvoie un tableau d'objets utilisateurs
      },
      (error) => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
}
}
