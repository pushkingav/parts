import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {Note} from '../models/note.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'edit-note-dialog',
  templateUrl: './edit-note-dialog.component.html'
})
export class EditNoteDialogComponent implements OnInit {
  note: Note;
  form: FormGroup;
  title: string;
  text: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditNoteDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.note = data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.note.title, []],
      text: [this.note.text, []]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
