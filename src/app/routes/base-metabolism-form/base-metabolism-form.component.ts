import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-metabolism-form',
  templateUrl: './base-metabolism-form.component.html',
  styleUrls: ['./base-metabolism-form.component.less']
})
export class BaseMetabolismFormComponent implements OnInit {
  validateForm: FormGroup;
  result: number = 0;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      height: [178, [Validators.required]],
      weight: [97, [Validators.required]],
      age: [30, [Validators.required]],
    });
  }

  ngOnInit(): void {
    
  }

  submitForm():void {
    let {height, weight, age} = this.validateForm.getRawValue();
    this.result = (90 + 4.8 * height + 13.4 * weight - 5.7 * age) * 1.2;
  }
}
