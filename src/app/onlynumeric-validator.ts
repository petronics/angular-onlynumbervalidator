import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, NG_VALIDATORS, Validator } from '@angular/forms'

export class CustomValidators {

  public static onlyNumeric(control: AbstractControl): ValidationErrors | null {
    let valid = !isNaN(+control.value);
    return valid === true ? null : { onlyNumeric: false };
  }
}