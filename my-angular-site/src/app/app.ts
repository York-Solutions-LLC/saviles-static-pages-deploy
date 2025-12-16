import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
  num1 = 0;
  num2 = 0;
  result: number | string = '';

  calculate(operator: string): void {
    if (isNaN(this.num1) || isNaN(this.num2)) {
      this.result = 'Enter valid numbers';
      return;
    }

    switch (operator) {
      case '+':
        this.result = this.num1 + this.num2;
        break;
      case '-':
        this.result = this.num1 - this.num2;
        break;
      case '*':
        this.result = this.num1 * this.num2;
        break;
      case '/':
        this.result =
          this.num2 === 0 ? 'Cannot divide by zero' : this.num1 / this.num2;
        break;
    }
  }
}
