
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  public allMovies = true
  public fantasy = true
  public sciFi = true
  public action = true
  public comicBook = true
  public horror = true
  public misc = true

  allMoviesFN() {
    this.allMovies = true
    this.fantasy = true
    this.sciFi = true
    this.action = true
    this.comicBook = true
    this.horror = true
    this.misc = true
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
