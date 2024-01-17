import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EquipeComponent } from './equipe/equipe.component';
import { TacheComponent } from './tache/tache.component';
import { CreerComponent } from './creer/creer.component';
import { ProjetComponent } from './projet/projet.component';
import { HomeComponent } from './home/home.component';
import { ListeComponent } from './liste/liste.component';
import { ListeprojetComponent } from './listeprojet/listeprojet.component';
import { ListepComponent } from './listep/listep.component';
import { LailalisteComponent } from './lailaliste/lailaliste.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'tache', component: TacheComponent },
  { path: 'creer', component: CreerComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'home', component: HomeComponent },
  { path: 'liste', component: ListeComponent },
  { path: 'listeprojet', component: ListeprojetComponent },
  { path: 'listep', component: ListepComponent },
  { path: 'lailaliste', component: LailalisteComponent },


  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
