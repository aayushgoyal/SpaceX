import { Component } from '@angular/core';
import { LaunchProgramService } from './services/launch-program.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  launchPrograms:any = [];
  selectedFilters = {}; 

  constructor(private launchProgramService: LaunchProgramService, private activatedRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedFilters = params;
      this.getLaunchPrograms();
    })
  }

  getLaunchPrograms(): void  {
    this.launchProgramService.getLaunchPrograms(this.selectedFilters).subscribe((data: any) => {
      this.launchPrograms = data;
    })
  }
}
