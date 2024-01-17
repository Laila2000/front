import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { TacheComponent } from './tache/tache.component';
import { RegisterComponent } from './register/register.component';
import { ProjetComponent } from './projet/projet.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CreerComponent } from './creer/creer.component';
import { HomeComponent } from './home/home.component';
import { ListeprojetComponent } from './listeprojet/listeprojet.component';
import { ListeComponent } from './liste/liste.component';
import { ListepComponent } from './listep/listep.component';
import { LailalisteComponent } from './lailaliste/lailaliste.component';

// Assurez-vous d'importer cela


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TacheComponent,
    RegisterComponent,
    ProjetComponent,
    EquipeComponent,
    CreerComponent,
    HomeComponent,
    ListeprojetComponent,
    ListeComponent,
    ListepComponent,
    LailalisteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
   // Importez FormsModule ici une seule fois
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    
   
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
