import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user:{nom:string,email:string,mdp:string,Company:string}={nom:'',email:'',mdp:'',Company:''};
  validation:string="false";
  constructor(private http:HttpClient,private router:Router){}
  onClick(): void {
    // Example API URL, replace it with your actual API endpoint
    const apiUrl = 'http://localhost:8080/User/AddUser';

    // Example request headers, replace them with your actual headers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Make a POST request with the user data
    this.http.post(apiUrl, this.user, { headers }).subscribe(
      (data: any) => {
        // Handle successful response
        this.validation="true";
        this.router.navigate(['/login']);
        alert("Utilisateur enregistré avec succés !")
        console.log('POST Response:', data);
      },
      (error) => {
        // Handle error
        console.error('POST Error:', error);
      }
    );}

}
