import { Component, ViewChild, OnInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(NavbarComponent, { static: true }) public navbar: NavbarComponent;
  title = 'DATAMOLA-TEST';
  public nameFilter: Observable<string>;
  public genreFilter: Observable<string>;
  public yearFilter: Observable<string>;

  ngOnInit(): void {
    this.nameFilter = this.navbar.name.valueChanges;
    this.genreFilter = this.navbar.genre.valueChanges;
    this.yearFilter = this.navbar.year.valueChanges;
  }
}
