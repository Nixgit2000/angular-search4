import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
constructor(public display: DisplayService) {}
  allMovies = false

  allMovies1() {
    return this.allMovies = !this.display.allMoviesFN()
  }

  fantasy = false
  
  fantasy1() {
    return this.fantasy = !this.display.fantasyFN()
  }

  sciFi = false
  
  sciFi1() {
    return this.sciFi = !this.display.sciFiFN()
  }

  action = false
  
  action1() {
    return this.sciFi = !this.display.actionFN()
  }

  comicBook = false
  
  comicBook1() {
    return this.comicBook = !this.display.comicBookFN()
  }

  horror = false
  
  horror1() {
    return this.horror = !this.display.horrorFN()
  }

  misc = false
  
  misc1() {
    return this.misc = !this.display.miscFN()
  }
}
