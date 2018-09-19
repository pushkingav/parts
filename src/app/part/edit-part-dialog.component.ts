import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {Part} from '../models/part.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'edit-part-dialog',
  templateUrl: './edit-part-dialog.component.html'
})
export class EditPartDialogComponent implements OnInit {
  part: Part;
  form: FormGroup;
  title: string;
  quantity: number;
  iRequired: boolean;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<EditPartDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.part = data;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [this.part.title, [Validators.required]],
      quantity: [this.part.quantity, [Validators.compose([Validators.pattern("^\\d+$"), Validators.required])]],
      iRequired: [this.part.iRequired, []]
    });
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
  changeRequired(part: Part) {
    //part.iRequired = !part.iRequired;
    this.part.iRequired = !this.part.iRequired;
  }
}
