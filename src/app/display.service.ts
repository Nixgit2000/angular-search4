
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  boolean = false
  booleanFN() {
    return this.boolean = !this.boolean
  }
}
