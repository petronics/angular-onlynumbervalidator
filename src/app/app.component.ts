import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  rosesCount: number;
  rcForm: FormGroup;

  ngOnInit(): void {
    this.rcForm = new FormGroup({
      rosescount: new FormControl(null)
    });
  }
}
