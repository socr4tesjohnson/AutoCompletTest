import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { AutoCompleteItemComponent } from './components/auto-complete-item/auto-complete-item.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteComponent,
    AutoCompleteItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
