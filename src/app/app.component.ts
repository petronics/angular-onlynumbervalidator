import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from './onlynumeric-validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  rosesCount: number;
  rcForm: FormGroup;

  ngOnInit(): void {
    // init reactive form
    this.rcForm = new FormGroup({
      rosescount: new FormControl(null, [CustomValidators.onlyNumeric])
    });
    // init template driven control
    this.rosesCount = null;
  }

}
