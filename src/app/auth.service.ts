import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users!: { email: string, password: string }[];
  public isLoggedIn: boolean = false;

  constructor(private _router: Router) {
    this.users = [
      {
        email: "123@123.com",
        password: "12351351"
      },
    ];
  }

  public login(user: { email: string, password: string }): Observable<boolean> {
    return of(this.isLoggedIn).pipe(
      delay(1500),
      map((v: boolean) => {
        this.users.forEach(u => {
          if (u.email == user.email && u.password == user.password) {
            this.isLoggedIn = true;
            this._router.navigate(['/']);
          }
        });
        v = this.isLoggedIn;
        return true;
      })
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }

  public signUp(user: { email: string, password: string }): Observable<boolean> {
    this.users = this.users.concat([user]);
    this.isLoggedIn = true;
    return this.login(user);
  }
}
