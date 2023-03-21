import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {


  constructor(private display: DisplayService) {}

  fantasyClicked1() {
    this.display.fantasyClicked1();
  }
}
