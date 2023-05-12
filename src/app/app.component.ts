import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFloor = 1;
  maxWeight = 700;
  minWeinght = 0;
  acumulador = 0;

  goToFloor() {
    const floor = parseInt(( < HTMLInputElement > document.getElementById('floor')).value);
    const weight = parseInt(( < HTMLInputElement > document.getElementById('weight')).value);

    // if (weight==0) {
    //   for (let index = 0; index < floor; index++) {
    //     alert('piso ' +  (index)) 
    //   }
    // }if (floor >= 1 && floor <= 5 && weight >= 0 && (weight*70) <= this.maxWeight) {
    //   for (let index = 0; index < floor; index++) {
    //     alert('piso ' +  (index+1)) 
    //   }
    // } else if (weight==700) {
    //   for (let index = 0; index < floor; index++) {
    //     alert('piso ' +  (index-1)) 

    // }
    // }
  }
}
