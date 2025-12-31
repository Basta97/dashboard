import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoteProvider } from '../../../service/noteProvider/note-provider';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './notes.html',
  styleUrl: './notes.scss',
})
export class Notes {
  noteProvider = inject(NoteProvider);

  noteForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
    color: new FormControl('#ffeb3b'),
  });

  colors = ['#ffeb3b', '#a7ffeb', '#f8bbd0', '#e1bee7', '#bbdefb', '#c8e6c9'];

  addNote() {
    if (this.noteForm.valid) {
      this.noteProvider.addNote(
        this.noteForm.value.content!,
        this.noteForm.value.color!
      );
      this.noteForm.get("content")?.reset();
    }
  }

  deleteNote(id: number) {
    this.noteProvider.deleteNote(id);
  }
}
