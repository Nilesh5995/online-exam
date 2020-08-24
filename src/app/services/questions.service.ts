import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions = [
    {
      id: 1,
      question: 'The "Dalong Village" covering an area of 11.35 sq. km. has recently (May 2017) been declared as Biodiversity Heritage Site under Section 37(1) of Biological Diversity Act, 2002. The village is situated in the Indian State of -',
        a: 'Manipur',
        b: 'Madhya Pradesh',
        c: 'Mizoram',
        d: 'Maharashtra',
      answer: 'b'
    },
    {
    id: 2,
    question: '........... is the first woman to head a public sector bank.',
      a: ' Arundhati Bhattacharya',
      b: 'Shikha Sharma',
      c: 'Chanda Kochar',
      d: 'Usha Ananthasubramanyan',
    answer: 'a'
    },
    {
      id: 3,
      question: 'World Tourism Day is celebrated on-',
        a: 'September 12',
        b: 'September 25',
        c: 'September 27',
        d: 'September 29',
      answer: 'c'
      },
  ];
  constructor() { }

  getQuestions() {
    return new Observable((observer) => {
      const response = { success: false, error: '', data: [] };
      response.success = true;
      response.data = this.questions;
      observer.next(response);
    });

  }
  addQuestion(question) {
    const questionAdd =  this.questions.push(question);
    return new Observable((observer) => {
      const response = { success: false, error: '', data: [] };
      if (questionAdd) {
        response.success = true;
        response.data = this.questions;
      }
      observer.next(response);
    });
  }
}
