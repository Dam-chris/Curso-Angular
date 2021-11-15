import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: []
})
export class CountryInputComponent implements OnInit
{
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 

  @Input() placeholder: string = '';
  term:string = '';

  debouncer: Subject<string> = new Subject();

  search()
  {
    console.log(this.term);
    this.onEnter.emit( this.term );
  }

  keyPressed()
  {
    this.debouncer.next( this.term );
  }

  constructor() { }

  ngOnInit() 
  {
    this.debouncer
            .pipe( debounceTime(400) ) /*esto nos da un delay a la hora de que aparezca el valor del term*/
            .subscribe( value => this.onDebounce.emit( value ) );
  }
}
