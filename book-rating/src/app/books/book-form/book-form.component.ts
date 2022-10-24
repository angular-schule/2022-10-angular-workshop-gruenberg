import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent  {

  @Output()
  create = new EventEmitter<Book>()

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
      ]
    }),
    description: new FormControl('', { nonNullable: true })
  });

  c = this.bookForm.controls;

  hasError(control: FormControl): boolean {
    return control.touched && control.invalid;
  }

  hasError2(control: FormControl, errorCode: string) {
    return control.touched && control.hasError(errorCode);
  }

  submitForm() {
    const newBook: Book = {
      ...this.bookForm.getRawValue(),
      rating: 1
    };

    this.create.next(newBook);

    this.bookForm.reset();

  }
}
