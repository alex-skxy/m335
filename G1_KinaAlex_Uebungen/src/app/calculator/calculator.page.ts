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

  equation: any = {
    firstNr: undefined,
    secondNr: undefined,
    action: undefined,
    result: undefined
  };

  label: string;

  constructor() {
  }

  ngOnInit() {
  }

  async onAction(nr: number, action) {
    this.equation = {
      ...this.equation,
      firstNr: nr, action,
      secondNr: undefined, result: undefined
    };
    this.input.value = undefined;

    await this.input.setFocus();
    console.log(this.equation);
  }

  async onClear() {
    this.equation = {};
    this.input.value = undefined;
    await this.input.setFocus();
  }

  async onEnter(nr: number) {
    this.equation = {
      ...this.equation,
      secondNr: nr,
    };
    this.equation.result = this.actions[this.equation.action](this.equation.firstNr, this.equation.secondNr);
    console.log(this.equation);
    this.input.value = this.equation.result;
    await this.input.setFocus();
  }

  // copy pasted from https://stackoverflow.com/a/64809213 :)
  numericOnly($event: KeyboardEvent) {
    const pattern = /^([0-9])$/;
    return pattern.test($event.key);
  }
}
