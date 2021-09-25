import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SearchCriteria } from "../objects/search-criteria";
import { SearchResult } from "../objects/search-result";

@Injectable({
  providedIn: "root",
})
export class BugService {
  // Service addres with cotroller prefix
  private serviceAddress = environment.testerServiceAddres + "bug";

  constructor(private http: HttpClient) {}

  // Rest communication
  searchBugs(search: SearchCriteria): Observable<SearchResult[]> {
    const uploadAdress = this.serviceAddress + "/search";
    return this.http.post<SearchResult[]>(uploadAdress, search);
  }
}
