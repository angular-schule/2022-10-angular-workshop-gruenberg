import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './helpers/overview/overview.component';
import { HistoryComponent } from './helpers/history/history.component';

import { FromeventComponent } from './fromevent/fromevent.component';
import { MulticastComponent } from './multicast/multicast.component';
import { HigherorderComponent } from './higherorder/higherorder.component';
import { GameScoreComponent } from './game-score/game-score.component';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';
import { ChatComponent } from './chat/chat.component';
import { ChatWindowComponent } from './chat/chat-window/chat-window.component';
import { UnsubscribeComponent } from './unsubscribe/unsubscribe.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { CreatingComponent } from './creating/creating.component';

const routes: Routes = [
  { path: 'exercises', component: OverviewComponent },
  { path: 'exercises/creating', component: CreatingComponent },
  { path: 'exercises/fromevent', component: FromeventComponent },
  { path: 'exercises/game-score', component: GameScoreComponent },
  { path: 'exercises/multicast', component: MulticastComponent },
  { path: 'exercises/error-handling', component: ErrorHandlingComponent },
  { path: 'exercises/unsubscribe', component: UnsubscribeComponent },
  { path: 'exercises/chat', component: ChatComponent },
  { path: 'exercises/higherorder', component: HigherorderComponent },
  { path: 'exercises/dragdrop', component: DragdropComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    OverviewComponent,
    FromeventComponent,
    MulticastComponent,
    HistoryComponent,
    HigherorderComponent,
    GameScoreComponent,
    ErrorHandlingComponent,
    ChatComponent,
    ChatWindowComponent,
    UnsubscribeComponent,
    DragdropComponent,
    CreatingComponent,
  ]
})
export class ExercisesModule { }
