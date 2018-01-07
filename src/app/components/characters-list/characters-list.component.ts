// import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { CharactersService } from "../../services/characters.service";
import {Component, AfterViewInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {DataSource} from '@angular/cdk/table';
import { HomePlanetService } from "../../services/home-planet.service";
import { CommonService } from "../../services/common.service";
import { CharacterInfoDialogComponent } from "../character-info-dialog/character-info-dialog.component";
import { CharactersService } from "../../services/characters.service";
@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
  entryComponents: [
CharacterInfoDialogComponent
]
})
export class CharactersListComponent implements AfterViewInit  {
  showList=false;
  displayedColumns = ['name', 'homePlanet'];
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  pageSize = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,private charactersService:CharactersService,private homePlanetService:HomePlanetService,private commonService:CommonService,private dialog: MatDialog) {  }
  charactersResult:any=[];
  
  ngAfterViewInit() {
          setTimeout(()=> {
    this.showList=true;
    this.initCharactersList()
  }, 10000);

  }
  initCharactersList(){
        merge(this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.charactersService.getCharactersList(this.paginator.pageIndex);
        }),
        map((data:any) => {
          this.charactersResult=data;
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = this.charactersResult.count;
          this.pageSize=this.charactersResult.results.length;
          this.charactersResult.results.map((character:any)=>{
            let id=this.commonService.getIdFromUrl(character.homeworld);
              this.homePlanetService.getPlanetByUrl(character.homeworld).subscribe((data:any)=>{
              character.homePlanet=data.name;
              })          
          })
          return this.charactersResult.results;
        })
      ).subscribe((data:any) => this.dataSource.data = data);
  }

  showCharacterInfo(character){
     let dialogRef = this.dialog.open(CharacterInfoDialogComponent, {
      width: '700px',
      data: { character: character}
    });
  }
}

  


