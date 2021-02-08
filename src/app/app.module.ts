import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { QuestionComponent } from './components/question/question.component';
import { TagComponent } from './components/tag/tag.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryService, TagService, QuestionService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    TagComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CategoryService, TagService, QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
