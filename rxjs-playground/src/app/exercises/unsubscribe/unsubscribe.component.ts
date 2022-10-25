import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription, takeWhile, takeUntil, tap, of, Observable } from 'rxjs';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribeComponent {

  interval$?: Observable<number> = of(0);

  reset() {
    this.interval$ = timer(0, 1000).pipe(
      tap(console.log)
    );
  }

  stop() {
    this.interval$ = of(0);
  }
}
