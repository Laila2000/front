import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']  // Utilisez 'styleUrls' au lieu de 'styleUrl'
})
export class ProjetComponent implements OnInit{
 
  project: { nom: string, description: string, date_debut: string, date_fin: string, statute: string }
    = { nom: '', description: '', date_debut: '', date_fin: '', statute: '' };

apidata:any[]=[];
path:string = 'http://localhost:8080/Project/Getprojects';


validation: string = "false";

constructor(private http: HttpClient, private router: Router) { }

ngOnInit(){
  this.http.get<any[]>('http://localhost:8080/Project/Getprojects').subscribe(
      (data) => {
        this.apidata = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs:', error);
      }
    );
}
onClick(): void {
  const apiUrl = 'http://localhost:8080/Project/Add';
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  
  this.http.post(apiUrl, this.project, {headers}).subscribe(
    (data: any) => {
      this.validation = "true";
      this.apidata.push(data);
      alert("votre projet a ete crée avec succes!!!!");
    },
    (error) => {
      console.error('POST Error:', error);
    }
  );
 
}
  
onDelete(Id: number): void {
  // Utilisez window.confirm pour demander la confirmation de suppression
  const userConfirmed = window.confirm("Êtes-vous sûr de vouloir supprimer cette équipe ?");

  // Si l'utilisateur a confirmé la suppression, procédez
  if (userConfirmed) {
    const apiUrl = `http://localhost:8080/Project/${Id}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.delete(apiUrl, { headers }).subscribe(
      (data: any) => {
        this.validation = "true";
      
        // Rafraîchissez la liste après la suppression
        this.ngOnInit();
        alert("L'équipe a été supprimée avec succès!");
      },
      (error) => {
        console.error('DELETE Error:', error);
      }
    );
  } else {
    // L'utilisateur a annulé la suppression
    alert("Suppression annulée.");
  }
}
}