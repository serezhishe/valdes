import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ELEMENT_DATA } from '../../assets/dataSource';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public name = new FormControl('');
  public genre = new FormControl('');
  public year = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
}
