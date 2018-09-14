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
  inStockCount: any;

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
     this.partService.editPart(part).subscribe(() => {
       this.partService.getInStockCount().subscribe(data => this.inStockCount = data);
     });
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
    this.partService.editPart(part).subscribe(() => {
      this.partService.getInStockCount().subscribe(data => this.inStockCount = data);
    });

  }
  deletePart(part: Part): void {
    this.partService.deletePart(part)
      .subscribe( data => {
        this.dataSource.data = this.dataSource.data.filter(u => u !== part);
      });
  }
  applyTextFilter(filterValue: string) {
    if (filterValue === 'true' || filterValue === 'false') {
      return;
    }
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  applySelectFilter(filterValue: any) {
    this.paginator.pageIndex = 0
    if (filterValue.value == 1) {
      this.dataSource.filter = "";
    }
    if (filterValue.value == 2) {
      this.dataSource.filter = "true";
    }
    if (filterValue.value == 3) {
      this.dataSource.filter = "false";
    }
  }
  ngAfterViewInit() {
    this.partsDatabase = new PartsHttpDao(this.partService);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.dataSource.filterPredicate = (data: Part, filter) => {
      //predicate concatenates the title and iRequired fields
      let temp: string;
      temp = data.title.toLowerCase();
      if (filter === 'true' || filter === 'false') {
        temp = temp + data.iRequired;
      }
      return temp.indexOf(filter) !== -1;
    };


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

    this.partService.getInStockCount()
      .subscribe( data => {
        console.log(data);
        this.inStockCount = data;
      });
  }
}

export class PartsHttpDao {
  constructor(private partService: PartService) {}
  getRepoParts(): Observable<Part[]> {
    return this.partService.getParts();
  }
}
