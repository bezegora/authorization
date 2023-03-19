import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public btnShowUp$: Observable<boolean> = of(true);
  public formGroup!: FormGroup;

  constructor(
    private _authServie: AuthService
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
    // this.formGroup.
    this.btnShowUp$ = of(false);
    this.btnShowUp$ = this._authServie.login(this.formGroup.value);
  }

  get email() {
    return this.formGroup.get('email');
  }

  get password() {
    return this.formGroup.get('password');
  }
}
