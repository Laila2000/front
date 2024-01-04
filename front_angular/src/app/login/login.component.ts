import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Use 'styleUrls' instead of 'styleUrl'
})
export class LoginComponent {
 user: { email: string, mdp: string } = { email: '', mdp: '' }; // Use ':' instead of '=' for property assignment
  validation:string="false";
  constructor(private http: HttpClient,private router:Router) {}
  
  login():void{
   // Example API URL, replace it with your actual API endpoint
   const apiUrl = 'http://localhost:8080/User/login';

   // Example request headers, replace them with your actual headers
   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
   const params = new HttpParams({ fromObject: this.user });

   // Make a GET request with the user data as query parameters
   this.http.get(apiUrl, { headers, params: params}).subscribe(
     (data: any) => {
       // Handle successful response
       this.validation = 'true';
       if(data){
          this.router.navigate(['home']);
        }else{
          alert("user or password incorrect!!!!")
        }
       console.log('GET Response:', data);
     },
     (error) => {
       // Handle error
       console.error('GET Error:', error);
     }
   );

  }
}