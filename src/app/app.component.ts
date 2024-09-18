import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validator, Validators, ValidatorFn, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import emojiRegex from 'emoji-regex';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'my-app-ng18';

  accountCheck: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (!this.form) {
      return null;
    }
    const regex = emojiRegex();
    console.log(control.value?.match(regex))

    return control.value?.match(regex) ? { message: 'fuck' } : null;

  };

  form = new FormGroup({
    account: new FormControl('', [Validators.required, this.accountCheck])
  })

  ngOnInit(): void {

  }


}
