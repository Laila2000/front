import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  apidata:any[]=[];
  constructor(private http:HttpClient){}
  valider:string="false";
  ngOnInit(){
    this.http.get<any[]>('http://localhost:8080/Tasks/GetTasks').subscribe(
        (data) => {
          this.apidata = data;
          this.valider="true";
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des utilisateurs:', error);
        }
      );
  }
}
