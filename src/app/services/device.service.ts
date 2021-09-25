import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Device } from "../models/device";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  // Service addres with cotroller prefix
  private serviceAddress = environment.testerServiceAddres + "device";

  constructor(private http: HttpClient) {}

  // Rest communication
  getDevices(): Observable<Device[]> {
    const uploadAdress = this.serviceAddress;
    return this.http.get<Device[]>(uploadAdress);
  }
}
