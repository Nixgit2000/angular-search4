import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
constructor(public display: DisplayService) {}
public allMovies = false

  allMovies1() {
    return this.allMovies = !this.display.allMoviesFN()
  }

  public fantasy = false
  
  fantasy1() {
    return this.fantasy = !this.display.fantasyFN()
  }

  public sciFi = false
  
  sciFi1() {
    return this.sciFi = !this.display.sciFiFN()
  }

  public action = false
  
  action1() {
    return this.sciFi = !this.display.actionFN()
  }

  public comicBook = false
  
  comicBook1() {
    return this.comicBook = !this.display.comicBookFN()
  }

  public horror = false
  
  horror1() {
    return this.horror = !this.display.horrorFN()
  }

  public misc = false
  
  misc1() {
    return this.misc = !this.display.miscFN()
  }
}
