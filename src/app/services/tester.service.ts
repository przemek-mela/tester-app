import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class TesterService {
  // Service addres with cotroller prefix
  private serviceAddress = environment.testerServiceAddres + "/tester";

  constructor(private http: HttpClient) {}

  // Rest communication
  getCountries(): Observable<string[]> {
    const uploadAdress = this.serviceAddress + "/countries";
    return this.http.get<string[]>(uploadAdress);
  }
}
