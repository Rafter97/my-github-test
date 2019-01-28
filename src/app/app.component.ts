import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello-World';
  
  thingsToDo = [
    `Learn JavaScript`,
    `Learn Angular`,
    `Learn Redux`
  ];

  thingsCompleted = [];
  
  summary():string{
    return `${this.thingsToDo.length} done / ${this.thingsCompleted.length} to do`
  }

  constructor(){
    setInterval(() =>{
      this.thingsToDo.push(`Make Coffee`);
    },1000);
  }
}
