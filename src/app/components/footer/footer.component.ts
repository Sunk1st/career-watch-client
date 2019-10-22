import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cw-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear: number;

  constructor() { }

  ngOnInit() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
  }

}
