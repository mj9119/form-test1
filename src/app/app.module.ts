import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizFormComponent } from './quiz/quiz-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [QuizFormComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
