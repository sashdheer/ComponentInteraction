import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public myName = 'Ranjith';
  title = 'component-interaction';
  public childData = 'child Data';
  ngOnInit() {

  }
parentReceivedData(childData: string): void {
  console.log('parentReceivedData fired');
  this.childData = childData;
  alert('hi');
}
}

