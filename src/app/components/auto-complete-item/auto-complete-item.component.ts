import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/interface/company';

@Component({
  selector: 'app-auto-complete-item',
  templateUrl: './auto-complete-item.component.html',
  styleUrls: ['./auto-complete-item.component.css']
})
export class AutoCompleteItemComponent implements OnInit {
  @Input()
  company!: Company;
  
  constructor() { }

  ngOnInit(): void {
  }

  navigateTo(domain:string) {
    window.location.href = `https://${domain}`;
    return false;
  }
}
