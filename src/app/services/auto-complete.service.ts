import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interface/company';

@Injectable({
  providedIn: 'root'
})
export class AutoCompleteService {
  

  constructor(private http:HttpClient) { }

  getAutoComplete(query: string):Observable<Company[]> {
    let autoCompleteUrl: string = `https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`;
    
    return this.http.get<Company[]>(autoCompleteUrl);
  }
}
