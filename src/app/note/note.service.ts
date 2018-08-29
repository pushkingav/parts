import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Note} from '../models/note.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class NoteService {
 @Output() changeNoteEmitter: EventEmitter<Note> = new EventEmitter();

  constructor(private http: HttpClient) {}
  // private userUrl = 'http://localhost:8080/user-portal/user';
  private noteUrl = '/api';

  public changeNote(note: Note) {
    console.log(note);
    this.changeNoteEmitter.emit(note);
  }

  public getNotes() {
    return this.http.get<Note[]>(this.noteUrl);
  }

  public deleteNote(note) {
    return this.http.delete(this.noteUrl + '/' + note.id);
  }

  public createNote(note) {
    return this.http.post<Note>(this.noteUrl, note);
  }

  public editNote(note) {
    return this.http.post<Note>(this.noteUrl, note);
  }

}
