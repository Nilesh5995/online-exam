import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { ResultComponent} from './components/result/result.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';


const routes: Routes = [
  {
    path: 'questions', component: QuestionsComponent, pathMatch: 'full',
  },
  {
    path: 'result', component: ResultComponent, pathMatch: 'full',
  },
  {
     path: 'add-questions', component: AddQuestionsComponent, pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
