import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'tuongantech-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  emailControl = new FormControl('');
  data = { today : Date.now(), number: 58.27};
   
  constructor() { }

  ngOnInit(): void {
    this.emailControl.valueChanges
      .subscribe(val => console.log(`Landing component's message: ${val}`));
  }
}
