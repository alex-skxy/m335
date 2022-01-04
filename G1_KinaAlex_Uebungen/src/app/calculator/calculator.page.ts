import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInput} from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  @ViewChild(IonInput) input: IonInput;

  readonly actions = {
    '+': (a, b) => (a - 0) + (b - 0),
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  };

  firstNumber: number;
  secondNumber: number;
  action;
  label: string;
  result: number;

  constructor() {
  }

  ngOnInit() {
  }

  async onAction(nr: number, action) {
    this.firstNumber = nr;
    this.action = action;
    this.secondNumber = undefined;
    this.input.value = undefined;
    this.result = undefined;

    await this.input.setFocus();
  }

  async onClear() {
    this.firstNumber = undefined;
    this.secondNumber = undefined;
    this.input.value = undefined;
    this.action = undefined;
    this.result = undefined;
    await this.input.setFocus();
  }

  async onEnter(nr: number) {
    this.secondNumber = nr;
    this.result = this.actions[this.action](this.firstNumber, this.secondNumber);
    this.input.value = this.result;
    await this.input.setFocus();
  }

  // copy pasted from https://stackoverflow.com/a/64809213 :)
  numericOnly($event: KeyboardEvent) {
    const pattern = /^([0-9])$/;
    return pattern.test($event.key);
  }
}
