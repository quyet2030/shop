import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tuongantech-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data = { today : Date.now(), number: 58.27};
  constructor() { }

  ngOnInit(): void {}

}
