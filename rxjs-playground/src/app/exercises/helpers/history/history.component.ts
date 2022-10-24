import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Observable, EMPTY, Subject, debounceTime, takeUntil } from 'rxjs';

@Component({
  selector: 'rxw-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  @ViewChild('scrollContainer', { static: true }) scrollContainer?: ElementRef;

  @Input() logStream: Observable<unknown> = EMPTY;

  messages: unknown[] = [];
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.logStream.pipe(takeUntil(this.destroy$)).subscribe(m => {
      this.messages.push(m);
    });

    this.logStream.pipe(
      debounceTime(20),
      takeUntil(this.destroy$)
    ).subscribe(() => this.updateScroll());
  }

  updateScroll() {
    const el = this.scrollContainer?.nativeElement;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }

  clearHistory() {
    this.messages = [];
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
