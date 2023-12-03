import { Component, Output, EventEmitter } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<string>();
  filterText: string = '';

  private filterTextChanged = new Subject<string>();

  constructor() {
    this.filterTextChanged.pipe(debounceTime(1000)).subscribe(filter => {
      this.filterChanged.emit(filter);
    });
  }

  applyFilter(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filterTextChanged.next(this.filterText);
  }
}
