import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Note} from '../models/note.model';
import {NoteService} from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Note[];
  constructor(private router: Router, private noteService: NoteService ) {  }

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe( data => {
        this.notes = data;
      });
  }
  deleteNote(note: Note): void {
    this.noteService.deleteNote(note)
      .subscribe( data => {
        this.notes = this.notes.filter(n => n !== note);
      });
  }
}
