import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  boolean = false
  constructor(public display: DisplayService) {}
  boolean1() {
    return this.boolean = !this.display.booleanFN()
  }

}
