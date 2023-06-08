import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipComponent } from './starship/starship.component';

const routes: Routes = [ 
{ path: '', component: HomeComponent },
{ path: 'character', component: CharactersComponent },
{ path: 'planet', component: PlanetComponent },
{ path: 'starship', component: StarshipComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
exports: [
  RouterModule
]
})
export class AppRoutingModule { }
