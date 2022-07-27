import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SportComponent } from './pages/sport/sport.component';
import { HistoryComponent } from './pages/history/history.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sport', component: SportComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
