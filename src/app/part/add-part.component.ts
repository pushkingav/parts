import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Part} from '../models/part.model';
import {PartService} from './part.service';

@Component({
  templateUrl: './add-part.component.html'
})
export class AddPartComponent {

  part: Part = new Part();

  constructor(private router: Router, private partService: PartService) {

  }

  createPart(): void {
    this.partService.createPart(this.part)
      .subscribe( data => {
        alert('Part created successfully.');
      });
  }
}
