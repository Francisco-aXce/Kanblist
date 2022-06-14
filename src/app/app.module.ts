import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NormalBoardComponent } from './components/normal-board/normal-board.component';
import { BoardsComponent } from './components/boards/boards.component';
import { TaskComponent } from './components/task/task.component';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component';
import { BoardsModeComponent } from './pages/boards-mode/boards-mode.component';
import { ListModeComponent } from './pages/list-mode/list-mode.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NormalBoardComponent,
    BoardsComponent,
    TaskComponent,
    AddBoardComponent,
    AddTaskModalComponent,
    BoardsModeComponent,
    ListModeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
