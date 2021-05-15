import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Company } from 'src/app/interface/company';
import { AutoCompleteService } from 'src/app/services/auto-complete.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  @Input()
  companies!: Company[];
  query: string = '';
  queryUpdate = new Subject<string>();

  constructor(private autoCompleteService:AutoCompleteService) { }

  ngOnInit(): void {
    this.queryUpdate.pipe(debounceTime(400), distinctUntilChanged())
      .subscribe(query => { 
        if(query === ''){
          this.companies = [];
        }
        else{
          this.getAutoComplete(query)
        }
      })
  }

  getAutoComplete(query:string):void {
    this.autoCompleteService.getAutoComplete(query).subscribe(companies => {
      this.companies = companies;
    })
  }
}
