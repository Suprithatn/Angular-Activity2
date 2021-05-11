import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 2';
  numberVal:number = 0;
  disableButton:boolean = false;

 
  onIncrement(){
    this.numberVal++;
    this.disableButton = (this.numberVal > 0) ? true : false;
  }

  onDecrement(){
    this.numberVal--;
    this.disableButton = (this.numberVal <= 0) ? false : true;
  }

}
