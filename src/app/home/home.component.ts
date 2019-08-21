import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  name = 'Tauseef Application';

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    alert("You are leaving home page.!");
  }

}
