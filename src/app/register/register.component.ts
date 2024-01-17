import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: { nom: string, email: string, mdp: string, Company: string } = { nom: '', email: '', mdp: '', Company: '' };
  validation: string = 'false';

  constructor(private http: HttpClient, private router: Router) { }

  onClick(): void {
    const apiUrl = 'http://localhost:8080/User/AddUser';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(apiUrl, this.user, { headers }).subscribe(
      (data: any) => {
        this.validation = 'true';
        this.router.navigate(['/login']);
        alert('Utilisateur enregistré avec succès!');
        console.log('POST Response:', data);
      },
      (error) => {
        console.error('POST Error:', error);
      }
    );
  }
}
