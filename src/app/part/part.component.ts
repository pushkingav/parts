import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Part} from '../models/part.model';
import {PartService} from './part.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {EditPartDialogComponent} from './edit-part-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.css']
})
export class PartComponent implements AfterViewInit {
  parts: Part[];
  displayedColumns = ['i_required', 'title', 'quantity', 'actions'];
  footerColumns = ['name', 'quant'];
  partsDatabase: PartsHttpDao | null;
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private partService: PartService, private dialog: MatDialog) {
  }
  openDialog(part: Part) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = part;

    const dialogRef = this.dialog.open(EditPartDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(changedPart => {
     part.title = changedPart.title;
     part.quantity = changedPart.quantity;
     part.iRequired = changedPart.iRequired;
     this.partService.editPart(part).subscribe();
     });
  }

  /*ngOnInit() {
    this.partService.getParts()
      .subscribe( data => {
        this.parts = data;
      });
  }*/
  setRequired(part: Part) {
    part.iRequired = !part.iRequired;
    this.partService.editPart(part).subscribe();
  }
  deletePart(part: Part): void {
    this.partService.deletePart(part)
      .subscribe( data => {
        this.dataSource.data = this.dataSource.data.filter(u => u !== part);
      });
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  ngAfterViewInit() {
    this.partsDatabase = new PartsHttpDao(this.partService);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    /*this.dataSource.sortingDataAccessor = (part: Note, property) => {
      switch (property) {
        case 'date_created': return new Date(part.dateCreated);
        default: return part[property];
      }
    };*/

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.partsDatabase.getRepoParts();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.length;
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }
}

export class PartsHttpDao {
  constructor(private partService: PartService) {}
  getRepoParts(): Observable<Part[]> {
    console.log(this.partService.getParts());
    return this.partService.getParts();
  }
}
