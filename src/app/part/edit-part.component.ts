import {Component, Input, OnInit} from '@angular/core';
import {Part} from '../models/part.model';
import {Router} from '@angular/router';
import {PartService} from './part.service';

@Component({
  templateUrl: './edit-part.component.html',
})
export class EditPartComponent implements OnInit{
  @Input() part: Part;
  constructor(private router: Router, private partService: PartService) {}
  ngOnInit(): void {}

  editNote(): void {
    console.log(this.part);
    this.partService.editPart(this.part).subscribe(data => {
      alert('Part edited successfully.');
    });
}
}
