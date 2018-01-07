import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { merge } from 'rxjs/observable/merge';
import { of as observableOf } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { startWith } from 'rxjs/operators/startWith';
import { switchMap } from 'rxjs/operators/switchMap';
import { DataSource } from '@angular/cdk/table';
import { HomePlanetService } from "../../services/home-planet.service";
import { CommonService } from "../../services/common.service";
import { CharacterInfoDialogComponent } from "../character-info-dialog/character-info-dialog.component";
import { CharactersService } from "../../services/characters.service";

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  displayedColumns = ['name', 'terrain', 'population'];
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  pageSize = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient, private homePlanetService: HomePlanetService, private commonService: CommonService, private dialog: MatDialog) { }
  planetsResult: any = [];

  ngAfterViewInit() {
    merge(this.paginator.page)
      .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.homePlanetService.getPlanetsList(this.paginator.pageIndex);
      }),
      map((data: any) => {
        this.planetsResult = data;
        this.isLoadingResults = false;
        this.isRateLimitReached = false;
        this.resultsLength = this.planetsResult.count;
        this.pageSize = this.planetsResult.results.length;
        return this.planetsResult.results;
      })
      ).subscribe((data: any) => this.dataSource.data = data);
  }



  ngOnInit() {
  }

}
