import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NormalBoardComponent } from './components/normal-board/normal-board.component';
import { BoardsComponent } from './components/boards/boards.component';
import { TaskComponent } from './components/task/task.component';
import { AddBoardComponent } from './components/add-board/add-board.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NormalBoardComponent,
    BoardsComponent,
    TaskComponent,
    AddBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
