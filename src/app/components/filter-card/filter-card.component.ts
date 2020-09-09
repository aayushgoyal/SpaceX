import { Component } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-filter-card',
  templateUrl: './filter-card.component.html',
  styleUrls: ['./filter-card.component.scss']
})
export class FilterCardComponent  {

  filtersData:any = [
      {
          filterName: 'Launch Year',
          filterId:'launchYear',
          queryParam: 'launch_year',
          selectedFilter: '',
          filters: [
            { name: 2006, UrlName: 2006},
            { name: 2007, UrlName: 2007},
            { name: 2008, UrlName: 2008},
            { name: 2009, UrlName: 2009},
            { name: 2010, UrlName: 2010},
            { name: 2011, UrlName: 2011},
            { name: 2012, UrlName: 2012},
            { name: 2013, UrlName: 2013},
            { name: 2014, UrlName: 2014},
            { name: 2015, UrlName: 2015},
            { name: 2016, UrlName: 2016},
            { name: 2017, UrlName: 2017},
            { name: 2018, UrlName: 2018},
            { name: 2019, UrlName: 2019},
            { name: 2020, UrlName: 2020},
          ]

      },
      {
          filterName: 'Successful Launch',
          filterId: 'launchSuccess',
          queryParam: 'launch_success',
          selectedFilter: '',
          filters: [
            { name: "True", UrlName: true },
            { name: "False", UrlName: false },
          ]
      },
      {
        filterName: 'Successful Landing',
        filterId:'launchLand',
        queryParam: 'land_success',
        selectedFilter: '',
        filters: [
          { name: "True", UrlName: true },
          { name: "False", UrlName: false },
        ]
    }
  ]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getSelectedFilters() {
      let filters = {};

      this.filtersData.forEach(filter => {
            if(filter.selectedFilter !== '') {
                filters[filter.queryParam] = filter.selectedFilter
            }
      });

      return filters;
  }

  filterSelect(filterId: String, filterUrlName: any) {
        const filterGroupIndex = this.filtersData.findIndex(filter => filter.filterId === filterId);

        if(this.filtersData[filterGroupIndex].selectedFilter === filterUrlName) {
            this.filtersData[filterGroupIndex].selectedFilter = '';  

        } else {
            this.filtersData[filterGroupIndex].selectedFilter = filterUrlName;  
        }
        
        this.router.navigate([''], {
              queryParams: this.getSelectedFilters(),
              relativeTo: this.activatedRoute
        });
  }

}
