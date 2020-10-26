import { fn } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'tuongantech-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR,
      useExisting : EmailInputComponent,
      multi: true }],
  animations: [
    trigger('focusedAnimation',[
      state('default', style({ transform: 'scale(1)', boxShadow: 'none' }) ),
      state('focused', style({ transform: 'scale(1.05)',
        boxShadow: '0 0 1.5rem rgba({{shadowRbg}},0.5)' }),
        { params: { shadowRbg: '0,0,0'}} ),
      transition('default <=> focused', animate(150))
    ])
  ]
})
export class EmailInputComponent implements OnInit,
  OnDestroy, ControlValueAccessor {
  @Input() debounceTime = 500;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  private onChange: any;
  private subs: Subscription;
  private focusedSub = new BehaviorSubject<number>(0);
  focusedState$ = this.focusedSub.pipe(
    map(val => val === 0 ? 'default' : 'focused')
  )
  constructor() { }

  ngOnInit(): void {
    this.subs = this.emailControl.valueChanges.pipe(
      debounceTime(this.debounceTime),
      distinctUntilChanged(),
      filter( val => this.emailControl.valid),
      tap( val => this.onChange(val)) )
    // .subscribe( formValue => console.log(formValue));
    .subscribe();  }
  updateFocuedSub(value: number) {
    const currentValue = this.focusedSub.value;
    this.focusedSub.next(currentValue + value);
    console.log(this.focusedSub.value);
  }
  ngOnDestroy(): void { this.subs.unsubscribe();  }
    
  writeValue(obj: any): void {
    this.emailControl.setValue(obj, { emitEvent : false})  }
  // tslint:disable: no-shadowed-variable
  registerOnChange(fn: any): void {this.onChange = fn;  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    if( isDisabled ) this.emailControl.disable();
    else this.emailControl.enable();  }
}
