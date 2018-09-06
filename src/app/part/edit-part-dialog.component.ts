import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {Part} from '../models/part.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'edit-note-dialog',
  templateUrl: './edit-part-dialog.component.html'
})
export class EditPartDialogComponent implements OnInit {
  part: Part;
  form: FormGroup;
  title: string;
  required: boolean;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditPartDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.part = data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.part.title, []],
      required: [this.part.iRequired, []]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
  changeRequired(part: Part) {
    part.iRequired = !part.iRequired;
  }
}
