import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TimerComponent } from './components/timer/timer.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    ResultComponent,
    NavbarComponent,
    NotFoundComponent,
    TimerComponent,
    AddQuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
