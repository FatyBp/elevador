import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFloor = 1;
  maxWeight = 1000;
  maxPeople = 10;
  weight=0;
  people=0;
  Asc(){
    this.weight += parseInt((<HTMLInputElement>document.getElementById('weight')).value);
    this.people += parseInt((<HTMLInputElement>document.getElementById('people')).value);
    console.log(this.weight)
    console.log(this.people)

  }
  Desc(){
    this.weight -= parseInt((<HTMLInputElement>document.getElementById('weight')).value);
    this.people -= parseInt((<HTMLInputElement>document.getElementById('people')).value);
    console.log(this.people)
    console.log(this.weight)
  }

  goToFloor() {
    const floor = parseInt((<HTMLInputElement>document.getElementById('floor')).value);
    if (floor >= 1 && floor <= 5 && this.weight >= 0 && this.weight <= this.maxWeight && this.people >= 0 && this.people <= this.maxPeople) {
      alert(`estas en el piso ${this.currentFloor}`);
      alert(`Ir al piso ${floor}`);
      this.currentFloor=floor;
    } else {
      alert('Ha alcanzado el maximo del limite en personas o en peso');
    }
  }
}
