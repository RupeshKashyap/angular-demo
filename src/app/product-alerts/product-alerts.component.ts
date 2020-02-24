import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// Notice the @Component() decorator. This indicates that the following class is a component. It provides metadata about the component, including its selector, templates, and styles.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
// The component definition also exports the class, ProductAlertsComponent, which handles functionality for the component.
export class ProductAlertsComponent  {

// @Input decorator getting the data from the parent class
@Input () product ;
// In the component class, define a property named notify with an @Output() decorator and an instance of EventEmitter(). This allows the product alert component to emit an event when the value of the notify property changes.
 @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}