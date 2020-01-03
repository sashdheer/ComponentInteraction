import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() public parentData;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  public childData;
 // You could still receive the data from the child component and get it as a different variable.
 // @Input('parentData') public childData; - not working?
  constructor() { }

  // Send the data from child to parent using events.

  ngOnInit() {
  }

  onClick(): void {
   this.notify.emit(this.childData);
   console.log('sendDataEvent fired');
  }
}
