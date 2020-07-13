import { Component, OnInit, ViewChild} from '@angular/core';
import { ELEMENT_DATA } from '../../assets/dataSource';
import { MatPaginator } from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ThemePalette} from '@angular/material/core';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { DataSource } from '@angular/cdk/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss']
})

export class TableComponentComponent implements OnInit {
  public displayedColumns: string[] = ["name", "season", "network", "premiere"]
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() {}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export class ChipsStackedExample {
  availableColors: ChipColor[] = [
    {name: 'drama', color: undefined},
    {name: 'crime', color: 'primary'},
    {name: 'horror', color: 'accent'},
    {name: 'tragedy', color: 'warn'},
    {name: 'dark comedy', color: 'warn'},
  ];
}
