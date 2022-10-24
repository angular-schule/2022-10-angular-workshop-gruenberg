import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent  {

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

    // 1. Erzeuge eine Event mit dem Namen 'create'
    // 2. Versende als Payload das Buch per Event
    // 3. Subscribe im Dashboard auf das Event
    // 4. Füge das neue Buch zum Buch-Array hinzu

    this.bookForm.reset();

  }
}
