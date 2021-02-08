import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  template: `
    <p>
      question works!
    </p>
  `,
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
