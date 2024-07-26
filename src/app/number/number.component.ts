import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  number: number = 0;
  isBtnNextDisable: boolean = false;
  isBtnPrevDisable: boolean = true;

  onClickNextBtn() {
    if(this.number >= 10) {
      this.isBtnNextDisable = true;
      this.isBtnPrevDisable = false;
      return;
    };
    this.number++;
  }

  onClickPrevBtn() {
    if(this.number <= 0)  {
      this.isBtnPrevDisable = true;
      this.isBtnNextDisable = false;
      return;
    };
    this.number--;
  }


}
