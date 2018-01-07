import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { AppRoutingModule } from "./app-routing.module";
import { CharactersService } from "./services/characters.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CdkTableModule } from "@angular/cdk/table";
import {DataSource} from '@angular/cdk/table';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { HomePlanetService } from "./services/home-planet.service";
import { CommonService } from "./services/common.service";
import { CharacterInfoDialogComponent } from './components/character-info-dialog/character-info-dialog.component';
import { MatDialogModule, MatButtonModule } from "@angular/material";
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { StarWarsTitleComponent } from './components/star-wars-title/star-wars-title.component';




@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterInfoDialogComponent,
    PlanetsListComponent,
    StarWarsTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CdkTableModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule
  ],
    entryComponents: [
    CharacterInfoDialogComponent
  ],
  providers: [CharactersService,HomePlanetService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
