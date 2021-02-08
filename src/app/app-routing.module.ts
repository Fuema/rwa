import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent, TagComponent, QuestionComponent } from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/category',
    pathMatch: 'full'
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'tag',
    component: TagComponent
  },
  {
    path: 'question',
    component: QuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
