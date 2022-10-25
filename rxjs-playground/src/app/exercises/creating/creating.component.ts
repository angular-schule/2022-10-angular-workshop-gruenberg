import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter } from 'rxjs';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    // Observer
    const observer = {
      next: (e: string) => this.log(e),
      error: (err: any) => this.log('❌ ERROR ' + err),
      complete: () => this.log('✅ COMPLETE')
    }

    // Observable
    // const observable = of('🙂', '😎', '😁');
    const observable = new Observable<string>(subscriber => {
      subscriber.next('😀');
      const a = setTimeout(() => { subscriber.next('😎'); console.log('Zombie Code 🧟‍♂️') }, 1000);
      const b = setTimeout(() => { subscriber.next('😵‍💫');  console.log('Zombie Code 🧟‍♂️') }, 2000);
      const c = setTimeout(() => subscriber.error('BOOH! FEHLER!'), 3000);

      return () => {
        console.log('Es wurde unscubscribed! Wir sollten die Zombies killen!');
        clearTimeout(a);
        clearTimeout(b);
        clearTimeout(c);
      }
    });

    // Subscription
    const subscription = observable.subscribe(observer);
    setTimeout(() => subscription.unsubscribe(), 900);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
