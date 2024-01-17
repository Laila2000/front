import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lailaliste',
  templateUrl: './lailaliste.component.html',
  styleUrl: './lailaliste.component.css'
})
export class LailalisteComponent {
  apidata:any[]=[];
  constructor(private http:HttpClient){}
  valider:string="false";
  ngOnInit(){
    this.http.get<any[]>('http://localhost:8080/Project/Getprojects').subscribe(
        (data) => {
          this.apidata = data;
          this.valider="true";
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des projets:', error);
        }
      );
  }
}
