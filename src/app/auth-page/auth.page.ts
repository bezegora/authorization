import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Observable, of, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public btnShowUp$: Observable<boolean> = of(true);
  public formGroup!: FormGroup;
  public isIncorrect: boolean = false;

  constructor(
    private _authServie: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }


  public onSubmit() {
    this.btnShowUp$ = of(false);
    this.btnShowUp$ = this._authServie.login(this.formGroup.value).pipe(
      finalize(() => {
        this.isIncorrect = true;
        this.formGroup.markAsTouched();
        this.formGroup.controls['password'].reset();
      })
    );
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }

  public toSignUp() {
    this._router.navigate(['/sign-up']);
  }
}
