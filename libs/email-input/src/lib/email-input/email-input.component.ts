import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'tuongantech-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss']
})
export class EmailInputComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit(): void {
    this.emailControl.valueChanges.pipe(
      debounceTime(800),
      filter( val => this.emailControl.valid))
    // .subscribe( formValue => console.log(formValue));
    .subscribe(console.log);
  }
}
