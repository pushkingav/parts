import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Note} from '../models/note.model';
import {NoteService} from './note.service';

@Component({
  templateUrl: './add-note.component.html'
})
export class AddNoteComponent {

  note: Note = new Note();

  constructor(private router: Router, private noteService: NoteService) {

  }

  createNote(): void {
    this.noteService.createNote(this.note)
      .subscribe( data => {
        alert('Note created successfully.');
      });

  }
}
