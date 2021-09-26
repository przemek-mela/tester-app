import { Component, OnInit } from "@angular/core";
import { Device } from "src/app/models/device";
import { SearchCriteria } from "src/app/objects/search-criteria";
import { SearchResult } from "src/app/objects/search-result";
import { BugService } from "src/app/services/bug.service";
import { DeviceService } from "src/app/services/device.service";
import { TesterService } from "src/app/services/tester.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"],
})
export class SearchCriteriaComponent implements OnInit {
  public devices: Device[] = [];
  public countries: string[] = [];
  public searchCriteria: SearchCriteria = new SearchCriteria();

  public searchResult: SearchResult[] = [];

  public cols: any[] = [];

  public showResult: boolean = false;

  public selDevices: Device[] = [];

  constructor(
    private deviceService: DeviceService,
    private testerService: TesterService,
    private bugService: BugService
  ) {}

  ngOnInit() {
    // Getting possible search criteria
    this.getDevices();
    this.getCountries();
    // Define search result columns
    this.cols = [
      { field: "testerName", header: "Name" },
      { field: "bugsCount", header: "Experience" },
    ];
  }

  /**
   * Gets all devices from service
   */
  getDevices() {
    this.deviceService.getDevices().subscribe((devices) => {
      this.devices = devices;
    });
  }
  /**
   * Gets all countries from service
   */
  getCountries() {
    this.testerService.getCountries().subscribe((countries) => {
      this.countries = countries;
    });
  }

  /**
   * Sends search request that contains search criteria to service.
   * Recived results are passed to searchResult object.
   */
  searchForBugReports() {
    this.showResult = false;
    this.bugService.searchBugs(this.searchCriteria).subscribe((result) => {
      this.searchResult = result;
      this.showResult = true;
    });
  }

  /**
   * Cleares search criteria and search results.
   */
  clear() {
    this.searchCriteria = new SearchCriteria();
    this.showResult = false;
    this.searchResult = [];
    this.selDevices = [];
  }

  /**
   * Filters list of selected devices and stores it in selDevices array.
   */
  onDevicesSelectionUpdate() {
    this.selDevices = this.devices.filter((device) =>
      this.searchCriteria.devices.includes(device.deviceId)
    );
  }
}
