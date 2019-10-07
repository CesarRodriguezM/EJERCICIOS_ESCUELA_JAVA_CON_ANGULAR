import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HerosListComponent } from '../app/heros-list/heros-list.component';
import { NewHeroComponent } from './new-hero/new-hero.component';

const routes: Routes = [
  { path: 'heroes', component: HerosListComponent },
  { path: 'aniadir', component: NewHeroComponent }
];

@NgModule({
  declarations: [],
  imports: [
    //  CommonModule

    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
