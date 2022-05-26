import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardsModeComponent } from './pages/boards-mode/boards-mode.component';
import { ListModeComponent } from './pages/list-mode/list-mode.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/boards',
    pathMatch: 'full'
  },
  {
    path: 'boards',
    component: BoardsModeComponent
  },
  {
    path: 'list',
    component: ListModeComponent
  },
  {
    path: '**',
    redirectTo: '/boards'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
