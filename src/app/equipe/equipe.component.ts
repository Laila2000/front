import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {
  equipe: { nom: string, membre: string, chefprojet: string, role: string}
  = { nom: '', membre: '', chefprojet: '', role: '' };

validation: string = "false";

constructor(private http: HttpClient, private router: Router) { }

onClick(): void {
  const apiUrl = 'http://localhost:8080/Equip/ADDEquip';
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  this.http.post(apiUrl, this.equipe, { headers }).subscribe(
    (data: any) => {
      this.validation = "true";
      this.router.navigate(['/home']);
      alert("équipe enregistré avec succès !");
      console.log('POST Response:', data);
    },
    (error) => {
      console.error('POST Error:', error);
    }
  );
}
}
