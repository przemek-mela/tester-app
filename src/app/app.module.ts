import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SearchCriteriaComponent } from "./components/search-criteria/search-criteria.component";

import { MultiSelectModule } from "primeng/multiselect";
import { ButtonModule } from "primeng/button";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";

@NgModule({
  declarations: [AppComponent, SearchCriteriaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MultiSelectModule,
    ButtonModule,
    TableModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
