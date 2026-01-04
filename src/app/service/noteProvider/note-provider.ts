import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Note } from '../../model/note';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class NoteProvider {
  platformId = inject(PLATFORM_ID);
  notes = signal<Note[]>([]);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('notes')) {
        this.notes.set(JSON.parse(localStorage.getItem('notes')!));
      }
      else {
        this.notes.set([
          { id: 1, content: 'Finish the dashboard project', color: '#ffeb3b', date: new Date() },
          { id: 2, content: 'Meeting with the team at 2 PM', color: '#a7ffeb', date: new Date() },
          { id: 3, content: 'Buy groceries', color: '#f8bbd0', date: new Date() },
        ]);
      }
    }
  }

  addNote(content: string, color: string) {
    const newNote: Note = {
      id: Date.now(),
      content,
      color,
      date: new Date(),
    };
    this.notes.update((notes) => [newNote, ...notes]);
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('notes', JSON.stringify(this.notes()));
    }
  }

  deleteNote(id: number) {
    this.notes.update((notes) => notes.filter((n) => n.id !== id));
    if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('notes', JSON.stringify(this.notes()));
    }
  }
}
