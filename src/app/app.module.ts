import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { PlanetComponent } from './planet/planet.component';
import { StarshipComponent } from './starship/starship.component';
import { TableComponent } from './table/table.component';
import { TablePlanetComponent } from './table-planet/table-planet.component';
import { TableStarshipComponent } from './table-starship/table-starship.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CharactersComponent,
    HomeComponent,
    PlanetComponent,
    StarshipComponent,
    TablePlanetComponent,
    TableStarshipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ModalComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    TableComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
