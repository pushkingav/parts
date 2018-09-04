import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Note} from '../models/note.model';
import {NoteService} from './note.service';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {EditNoteDialogComponent} from './edit-note-dialog.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements AfterViewInit {
  notes: Note[];
  displayedColumns = ['done', 'title', 'text', 'date_created', 'actions'];
  notesDatabase: NotesHttpDao | null;
  dataSource = new MatTableDataSource();
  resultsLength = 0;
  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private noteService: NoteService, private dialog: MatDialog) {
  }
  openDialog(note: Note) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = note;

    const dialogRef = this.dialog.open(EditNoteDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(changedNote => {
     note.title = changedNote.title;
     note.text = changedNote.text;
     this.noteService.editNote(note).subscribe();
     });
  }

  /*ngOnInit() {
    this.noteService.getNotes()
      .subscribe( data => {
        this.notes = data;
      });
  }*/
  setDone(note: Note) {
    note.done = !note.done;
    this.noteService.editNote(note).subscribe();
  }
  deleteNote(note: Note): void {
    this.noteService.deleteNote(note)
      .subscribe( data => {
        this.dataSource.data = this.dataSource.data.filter(u => u !== note);
      });
  }
  ngAfterViewInit() {
    this.notesDatabase = new NotesHttpDao(this.noteService);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (note: Note, property) => {
      switch (property) {
        case 'date_created': return new Date(note.dateCreated);
        default: return note[property];
      }
    };

    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.notesDatabase.getRepoNotes();
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

export class NotesHttpDao {
  constructor(private noteService: NoteService) {}
  getRepoNotes(): Observable<Note[]> {
    return this.noteService.getNotes();
  }
}
