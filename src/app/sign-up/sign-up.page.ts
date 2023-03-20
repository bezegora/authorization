import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Observable, of } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss']
})
export class SignUpPage {

  public signUpFormGroup: FormGroup;
  public btnShowUp$: Observable<boolean> = of(true);

  constructor(
    private _router: Router,
    private _authService: AuthService,
  ) {
    this.signUpFormGroup = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ])
    });
  }

  public toLogin() {
    this._router.navigate(['/login']);
  }

  public onSubmit() {
    this.btnShowUp$ = of(false);
    this.btnShowUp$ = this._authService.signUp(this.signUpFormGroup.value).pipe(
      finalize(() => {
        this.signUpFormGroup.markAsTouched();
        this.signUpFormGroup.controls['password'].reset();
      })
    );
  }

  get email() {
    return this.signUpFormGroup.get('email');
  }

  get password() {
    return this.signUpFormGroup.get('password');
  }
}
