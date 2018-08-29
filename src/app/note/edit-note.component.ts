import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../models/note.model';
import {Router} from '@angular/router';
import {NoteService} from './note.service';

@Component({
  templateUrl: './edit-note.component.html',
})
export class EditNoteComponent implements OnInit{
  @Input() note: Note;
  constructor(private router: Router, private noteService: NoteService) {}
  ngOnInit(): void {
    this.noteService.changeNoteEmitter.subscribe(nt => this.note = nt);
    console.log(this.note);
  }

  editNote(): void {
    console.log(this.note);
    this.noteService.editNote(this.note).subscribe( data => {
      alert('Note edited successfully.');
    });
}
}
