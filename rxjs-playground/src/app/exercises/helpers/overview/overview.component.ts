import { Component } from '@angular/core';

import { Exercises } from '../../types';
import { exercisesList } from '../../exercises';

@Component({
  selector: 'rxw-overview',
  templateUrl: './overview.component.html',
})
export class OverviewComponent {

  exercises: Exercises = exercisesList;
  generationDate = 1666619839103;

}
