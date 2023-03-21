
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  allMovies = false
  allMoviesFN() {
    return this.allMovies = !this.allMovies
  }

  fantasy = false
  fantasyFN() {
    return this.fantasy = !this.fantasy
  }
  sciFi = false
  sciFiFN() {
    return this.sciFi = !this.sciFi
  }
  action = false
  actionFN() {
    return this.action = !this.action
  }
  comicBook = false
  comicBookFN() {
    return this.comicBook = !this.comicBook
  }
  horror = false
  horrorFN() {
    return this.horror = !this.horror
  }
  misc = false
  miscFN() {
    return this.misc = !this.misc
  }
}
