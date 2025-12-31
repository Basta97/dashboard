import { Injectable, signal } from '@angular/core';
import { Note } from '../../model/note';


@Injectable({
  providedIn: 'root',
})
export class NoteProvider {
  notes = signal<Note[]>([]);
  constructor() {
     this.notes.set([
      { id: 1, content: 'Finish the dashboard project', color: '#ffeb3b', date: new Date() },
      { id: 2, content: 'Meeting with the team at 2 PM', color: '#a7ffeb', date: new Date() },
      { id: 3, content: 'Buy groceries', color: '#f8bbd0', date: new Date() },
    ]);
  }

  addNote(content: string, color: string) {
    const newNote: Note = {
      id: Date.now(),
      content,
      color,
      date: new Date(),
    };
    this.notes.update((notes) => [newNote, ...notes]);
  }

  deleteNote(id: number) {
    this.notes.update((notes) => notes.filter((n) => n.id !== id));
  }
}
