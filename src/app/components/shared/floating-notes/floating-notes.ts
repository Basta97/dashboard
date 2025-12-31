import { Component, inject, signal } from '@angular/core';
import { NoteProvider } from '../../../service/noteProvider/note-provider';
import { DatePipe, NgClass } from '@angular/common';

@Component({
    selector: 'app-floating-notes',
    standalone: true,
    imports: [DatePipe, NgClass],
    templateUrl: './floating-notes.html',
    styleUrl: './floating-notes.scss',
})
export class FloatingNotes {
    noteProvider = inject(NoteProvider);
    isOpen = signal<boolean>(false);

    toggle() {
        this.isOpen.update((open) => !open);
    }
}
