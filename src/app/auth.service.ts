import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router: Router) { }

  public isLoggedIn: boolean = false;

  public login(): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(() => {
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
        this._router.navigate(['/']);
      })
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }
}
