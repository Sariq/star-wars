import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersListComponent } from "./components/characters-list/characters-list.component";

const routes: Routes = [
     {
    path: '',
    component: CharactersListComponent
  },
  {
    path:'planetsList',
    component:PlanetsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




//import { Routes, RouterModule } from '@angular/router';

// import { CharactersListComponent } from "./components/characters-list/characters-list.component";
// export const routes: Routes = [
//   {
//     path: '',
//     component: CharactersListComponent
//   }
//   {
//     path: 'about',
//     component: AboutComponent
//   }
//];


