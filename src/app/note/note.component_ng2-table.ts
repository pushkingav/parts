import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Note} from '../models/note.model';
import {NoteService} from './note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component2.html',
  styleUrls: ['./note.component2.css']
})
export class NoteComponent implements OnInit {
  notes: Note[];
  public rows: Array<Note> = [];
  public columns: Array<any> = [
    {title: 'Id', name: 'id'},
    {
      title: 'Title',
      name: 'title',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by title'}
    },
    {title: 'Text', className: ['office-header', 'text-success'], name: 'text', sort: 'asc'},
    {title: 'Created date', className: 'text-warning', name: 'dateCreated'},
    {title: 'Done', name: 'done'}
  ];
  public page = 1;
  public itemsPerPage = 10;
  public maxSize = 5;
  public numPages = 1;
  public length = 10;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  private data: Note[];
  constructor(private router: Router, private noteService: NoteService ) {
    this.length = 10; // this.notes.length;
  }
  ngOnInit() {
    this.noteService.getNotes()
      .subscribe( data => {
        this.notes = data;
        this.data = data;
        this.onChangeTable(this.config);
      });
  }
  deleteNote(note: Note): void {
    this.noteService.deleteNote(note)
      .subscribe( data => {
        this.notes = this.notes.filter(n => n !== note);
      });
  }
  public changePage(page: any, data: Array<any> = this.data): Array<any> {
    const start = (page.page - 1) * page.itemsPerPage;
    const end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    const columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    let filteredData: Array<any> = data;
    this.columns.forEach((column: any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item: any) => {
          console.log(item[column.name]);
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item: any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    const tempArray: Array<any> = [];
    filteredData.forEach((item: any) => {
      let flag = false;
      this.columns.forEach((column: any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    const filteredData = this.changeFilter(this.data, this.config);
    const sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }
}
