import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EquipeComponent } from './equipe/equipe.component';
import { TacheComponent } from './tache/tache.component';
import { CreerComponent } from './creer/creer.component';
import { ProjetComponent } from './projet/projet.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'tache', component: TacheComponent },
  { path: 'creer', component: CreerComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'home', component: HomeComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
