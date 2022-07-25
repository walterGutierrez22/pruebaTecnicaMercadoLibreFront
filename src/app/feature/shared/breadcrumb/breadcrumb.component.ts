import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbs: [] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  validatePositionBreadcrumbs(index:number){
    return this.breadcrumbs && this.breadcrumbs.length === index + 1 ? false : true;
  }

}
