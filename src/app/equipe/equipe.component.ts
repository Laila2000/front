import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent implements OnInit{
  equipe: { nom: string, membre: string, chefprojet: string, role: string}
  = { nom: '', membre: '', chefprojet: '', role: '' };

validation: string = "false";

apidata:any[]=[];
path:string = 'http://localhost:8080/Equip/GetEquipes';

constructor(private http: HttpClient, private router: Router) { }

ngOnInit(){
  this.http.get<any[]>('http://localhost:8080/Equip/GetEquipes').subscribe(
      (data) => {
        this.apidata = data;
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la récupération des utilisateurs:', error);
      }
    );
}
onClick(): void {
  const apiUrl = 'http://localhost:8080/Equip/ADDEquip';
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  
  this.http.post(apiUrl, this.equipe, {headers}).subscribe(
    (data: any) => {
      this.validation = "true";
      this.apidata.push(data);
      alert("votre équipe a été  crée avec succes!!!!");
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
    const apiUrl = `http://localhost:8080/Equip/${Id}`;
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
onUpdate(Id: number): void {
  const apiUrl = `http://localhost:8080/Equip/${Id}`;
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  this.http.put(apiUrl, this.equipe, { headers }).subscribe(
    (data: any) => {
      this.validation = "true";
      // Rafraîchissez la listAe ou effectuez d'autres actions nécessaires après la mise à jour
      this.ngOnInit();
      alert("L'équipe a été mise à jour avec succès!");
    },
    (error) => {
      console.error('PUT Error:', error);
    }
  );
}
}



