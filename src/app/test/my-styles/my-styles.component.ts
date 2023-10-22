import { Component } from '@angular/core';

@Component({
  selector: 'app-my-styles',
  templateUrl: './my-styles.component.html',
  styleUrls: ['./my-styles.component.scss'],
})
export class MyStylesComponent {
  stateFlag = 1;

  toggleClass(id: number) {
    this.stateFlag = id + 1;
  }

  calculateClass(id: number) {
    return {
      btn: true,
      'btn-primary': this.stateFlag === id,
      'btn-extra-class': this.stateFlag === id,
    };
  }
}
