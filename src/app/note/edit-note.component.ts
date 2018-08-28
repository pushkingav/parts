import {Component} from '@angular/core';
import {Note} from '../models/note.model';
import {Router} from '@angular/router';
import {NoteService} from './note.service';

@Component({
  templateUrl: './edit-note.component.html',
})
export class EditNoteComponent {
  note: Note;
  constructor(private router: Router, private noteService: NoteService) {

  }
  editNote(note: Note): void {
    console.log(note);
    this.note = note;
    this.noteService.editNote(note).subscribe( data => {
      alert('Note edited successfully.');
    });
}
}
