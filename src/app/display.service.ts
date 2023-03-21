
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  fantasyClicked = false;

  fantasyClicked1() {
    this.fantasyClicked = !this.fantasyClicked;
  }
}
