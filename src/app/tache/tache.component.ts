import { HttpClient, HttpHeaders   } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NOMEM } from 'dns';
import path from 'path';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrl: './tache.component.css'
})
export class TacheComponent implements OnInit {
  tache: { titre: string, description: string, statute: string, signed: string , date:string}
    = { titre: '', description: '', statute: '', signed: '' , date:''};
  apidata:any[]=[];
  path:string = 'http://localhost:8080/User/GetUsers';


  validation: string = "false";

  constructor(private http: HttpClient, private router: Router) { }
  
  ngOnInit(){
    this.http.get<any[]>('http://localhost:8080/User/GetUsers').subscribe(
        (data) => {
          this.apidata = data;
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la récupération des utilisateurs:', error);
        }
      );
  }
  onClick(): void {
    const apiUrl = 'http://localhost:8080/Tasks/ADDTask';
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    
    this.http.post(apiUrl, this.tache, {headers}).subscribe(
      (data: any) => {
        this.validation = "true";
        alert("votre tache a ete cree!!!!");
      },
      (error) => {
        console.error('POST Error:', error);
      }
    );
    }
    
  }    

    
 
  
