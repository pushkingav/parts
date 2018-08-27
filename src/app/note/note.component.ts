import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Note} from '../models/note.model';
import {NoteService} from './note.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements AfterViewInit {
  notes: Note[];
  displayedColumns = ['done', 'id', 'title', 'text', 'date_created'];
  exampleDatabase: ExampleHttpDao | null;
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private noteService: NoteService) {
  }

  /*ngOnInit() {
    this.noteService.getNotes()
      .subscribe( data => {
        this.notes = data;
      });
  }*/
  setDone(note: Note) {
    this.noteService.createNote(note);
  }
  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDao(this.noteService);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource.paginator = this.paginator;

    merge(this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase.getRepoIssues();
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.resultsLength = data.length;
          console.log(data);
          return data;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return observableOf([]);
        })
      ).subscribe(data => this.dataSource.data = data);
  }
}

export class ExampleHttpDao {
  constructor(private noteService: NoteService) {}
  getRepoIssues(): Observable<Note[]> {
    return this.noteService.getNotes();
  }
}
