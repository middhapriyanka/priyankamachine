import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit, ReflectiveInjector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { DataState } from './enum/data-state-enum';
import { AppState } from './interface/app-state';
import { CustomResponse } from './interface/custom-response';
import { ServerService } from './service/server.service';
import * as $ from 'jquery';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'serverapp';
  appState$: Observable<AppState<CustomResponse>> | undefined;
  items :any;
  constructor(
    private serverService: ServerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const that= this;
    $.ajax({
      url: 'https://data.cityofnewyork.us/resource/h9gi-nx95.json',
      type: 'GET',
      data: {
        $limit: 5,
      },
    }).done(function (data) {
      console.log(data);
      that.items=data;
       //$.each(data, function (i, item) {
       //  $('#vehicle-type-code-1').text(item.vehicle_type_code1);
      //   $('#vehicle-type-code-2').text(item.vehicle_type_code2);
      //   $('#crash-date').text(item.crash_date);
      //   $('#crash-time').text(item.crash_time);
      // });
    });
  }

  navigate(i: number) {
    this.router.navigateByUrl('/car-crash');
  }
}
