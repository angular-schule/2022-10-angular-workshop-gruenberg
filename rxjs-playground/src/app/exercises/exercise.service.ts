import { Injectable } from '@angular/core';
import { Observable, timer, take, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExerciseService {

  echo(input: string, count = 5): Observable<string> {
    return timer(500, 700).pipe(
      take(count),
      map(i => `ECHO ${i + 1}: ${input}`)
    );
  }

  randomError(): Observable<string> {
    const errMsg = 'Something bad happened ...';
    const successMsg = 'Everything\'s fine';

    return new Observable(observer => {
      if (Math.random() > 0.3) {
        console.error(errMsg);
        observer.error(errMsg);
      } else {
        console.log(successMsg);
        observer.next(successMsg);
      }
    });
  }

  generateRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  generateRandomString(): string {
    return Math.random().toString(36).substr(2, 5).toUpperCase();
  }
}
