import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@ionic-native/calendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private calendarOptions: CalendarOptions) { }

  ngOnInit() {
  }

}
