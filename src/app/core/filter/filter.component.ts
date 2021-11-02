import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'src/app/_modules/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
@Input() filters!:filter
  constructor() { }

  ngOnInit(): void {
  }

}
