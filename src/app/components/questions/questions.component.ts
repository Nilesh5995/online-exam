import { QuestionsService } from './../../services/questions.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultService } from './../../services/result.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  @ViewChild('questionForm') questionForm: any;
  public questions: any = [];
  public rightAnswer;
  public totalAnswered;
  public redirectUrl = '/result';
  constructor(public questionsService: QuestionsService, public resultService: ResultService, public router: Router) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  getQuestions() {
    this.questionsService.getQuestions().subscribe(
      (response: any) => {
        if (response.success) {
          this.questions = response.data;
        } else {
          // this.handleError(response);
        }
      },
      (error) => {
        // this.handleError(error);
      }
    );
  }

  submitTest() {
    this.rightAnswer = 0;
    this.totalAnswered = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if ('selected' in this.questions[i] && (this.questions[i]['selected'] != null)) {
        this.totalAnswered++;
        if (this.questions[i]['selected'] == this.questions[i]['answer']) {
          this.questions[i]['status'] = 'right';
          this.rightAnswer++;
        } else {
          this.questions[i]['status'] = 'wrong';
        }
      } else {
        this.questions[i]['status'] = 'NotAttempted';
      }
    }
    const NotAttempted = this.questions.length - this.totalAnswered;
    const WrongAnswer = this.totalAnswered - this.rightAnswer;
    const result = {
      rightAnswer: this.rightAnswer,
      totalAnswered: this.totalAnswered,
      notAttempted: NotAttempted,
      wrongAnswer: WrongAnswer,
      questions: this.questions
    };
    this.setResult(result);
    this.router.navigateByUrl("/result");
  }

  setResult(result) {
    this.resultService.setResult(result).subscribe((response: any) => {
      if (response.success) {
        console.log(response.success, 'response.success')
       // this.questions = response.data;
      } else {
        // this.handleError(response);
      }
    },
    (error) => {
      // this.handleError(error);
    }
  );
  }
}
