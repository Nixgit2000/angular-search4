
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  public allMovies = false
  public fantasy = false
  public sciFi = false
  public action = false
  public comicBook = false
  public horror = false
  public misc = false

  allMoviesFN() {
    this.allMovies = true
    this.fantasy = false
    this.sciFi = false
    this.action = false
    this.comicBook = false
    this.horror = false
    this.misc = false
    return this.allMoviesFN
  }

  
  fantasyFN() {
    this.allMovies = false
    this.fantasy = true
    this.sciFi = false
    this.action = false
    this.comicBook = false
    this.horror = false
    this.misc = false
    return this.fantasyFN
  }
  
  sciFiFN() {
    this.allMovies = false
    this.fantasy = false
    this.sciFi = true
    this.action = false
    this.comicBook = false
    this.horror = false
    this.misc = false
    return this.sciFiFN
  }
  
  actionFN() {
    this.allMovies = false
    this.fantasy = false
    this.sciFi = false
    this.action = true
    this.comicBook = false
    this.horror = false
    this.misc = false
    return this.actionFN
  }
  
  comicBookFN() {
    this.allMovies = false
    this.fantasy = false
    this.sciFi = false
    this.action = false
    this.comicBook = true
    this.horror = false
    this.misc = false
    return this.comicBookFN
  }
  
  horrorFN() {
    this.allMovies = false
    this.fantasy = false
    this.sciFi = false
    this.action = false
    this.comicBook = false
    this.horror = true
    this.misc = false
    return this.horrorFN
  }
  
  miscFN() {
    this.allMovies = false
    this.fantasy = false
    this.sciFi = false
    this.action = false
    this.comicBook = false
    this.horror = false
    this.misc = true
    return this.miscFN
  }
}
