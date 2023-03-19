import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router: Router) {
    this.users = [
      {
        email: "123@123.com",
        password: "12351351"
      },
    ];
  }
  private users: [{ email: string, password: string }];

  public isLoggedIn: boolean = false;

  public login(user: { email: string, password: string }): Observable<boolean> {
    console.log(user);

    return of(this.isLoggedIn).pipe(
      delay(1500),
      map((v: boolean) => {
        console.log(this.users.indexOf(user));
        console.log(this.users);
        if (this.users.indexOf(user) != -1) {
          this.isLoggedIn = true;
          v = true;
          console.log(v);
          this._router.navigate(['/']);
          return v
        }
        return v;
      })
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    console.log(this.users);

    this._router.navigate(['/login']);
  }

  public signUp(user: { email: string, password: string }) {
    this.users.concat([user]);
    this.isLoggedIn = true;
    this._router.navigate(['']);
  }
}
