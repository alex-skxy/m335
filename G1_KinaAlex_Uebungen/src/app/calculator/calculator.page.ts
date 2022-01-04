import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  readonly actions = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  firstNumber: number;
  secondNumber: number;
  action;
  input: number;
  label: string;
  result: number;

  constructor() {
  }

  ngOnInit() {
  }

  onAction(action) {
    this.firstNumber = this.input;
    this.action = action;
    this.secondNumber = undefined;
    this.input = undefined;
    this.result = undefined;
  }

  onClear() {
    this.firstNumber = undefined;
    this.secondNumber = undefined;
    this.input = undefined;
    this.action = undefined;
    this.result = undefined;
  }

  onEnter() {
    this.secondNumber = this.input;
    this.result = this.actions[this.action](this.firstNumber, this.secondNumber);
    this.input = this.result;
  }

  // copy pasted from https://stackoverflow.com/a/64809213 :)
  numericOnly($event: KeyboardEvent) {
    const pattern = /^([0-9])$/;
    return pattern.test($event.key);
  }
}
