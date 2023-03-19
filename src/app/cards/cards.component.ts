import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  lotr = [
    {title: "The Lord of the Rings", title2: "The Fellowship of the Ring", year: "2001", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5m0zjctrxy9HeSAtnGWNLlsnr8z.jpg", url: "https://www.youtube.com/watch?v=V75dMMIW2B4" , IMDB: "8.9", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd",},
    {title: "The Lord of the Rings", title2: "The Fellowship of the Ring",  year: "2002", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/mw2Zhm2PguTRDc4jMwV6VpLhCOr.jpg", url: "https://www.youtube.com/watch?v=hYcw5ksV8YQ" , IMDB: "8.7", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Dominic Monaghan, Billy Boyd",},
    {title: "The Lord of the Rings", title2: "The Fellowship of the Ring",  year: "2003", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/A0uT7ELKhgCB10qubggn1q86DUV.jpg", url: "https://www.youtube.com/watch?v=y2rYRu8UW8M" , IMDB: "9.0", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Dominic Monaghan, Billy Boyd",},
  ]  
data = [
  {title: "The Hobbit", title2: "an Unexpected Journey", year: "2012", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4ycKLoRXteeHSllfAQl8jTNv6qS.jpg", url: "https://www.youtube.com/watch?v=SDnYMbYB-nU" , IMDB: "7.8", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",},
  {title: "The Hobbit", title2: "the Desolation of Smaug", year: "2013", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/qOKPhHqh7Eymsovk2bKyca59iC6.jpg", url: "https://www.youtube.com/watch?v=fnaojlfdUbs" , IMDB: "7.8", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",},
  {title: "The Hobbit", title2: "the Battle of the Five Armies", year: "2014", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/x4ck5q78vzURwnV65O0VjrlomtR.jpg", url: "https://www.youtube.com/watch?v=iVAgTiBrrDA" ,IMDB: "7.4", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",},
  {title: "Harry Potter", title2: "and the Philosopher's Stone",year: "2001",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", url:"https://www.youtube.com/watch?v=VyHV0BRtdxo",IMDB: "7.6",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Chamber of Secrets",year: "2002",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",url:"https://www.youtube.com/watch?v=1bq0qff4iF8",IMDB: "7.4",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Prisoner of Azkaban",year: "2004",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",url:"https://www.youtube.com/watch?v=lAxgztbYDbs", IMDB: "7.8", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Goblet of Fire",year: "2005",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",url:"https://www.youtube.com/watch?v=3EGojp4Hh6I", IMDB: "7.4",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Order of the Phoenix",year: "2007",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",url:"https://www.youtube.com/watch?v=y6ZW7KXaXYk",IMDB: "7.5", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Half Blood Prince",year: "2009",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",url:"https://www.youtube.com/watch?v=tAiy66Xrsz4",IMDB: "7.6", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Deathly Hallows: Part I",year: "2010",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",url:"https://www.youtube.com/watch?v=MxqsmsA8y5k", IMDB: "7.7",actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Deathly Hallows: Part II",year: "2011",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",url:"https://www.youtube.com/watch?v=5NYt1qirBWg", IMDB: "8.1",actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Fantastic Beasts", title2: "and Where to Find Them",year: "2016",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",url: "https://www.youtube.com/watch?v=ViuDsy7yb8M", IMDB: "7.3",   actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Colin Farrell, Johnny Depp"},
  {title: "Fantastic Beasts", title2: "the Crimes of Grindewald",year: "2018",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/u5QrKhSCGoFsB8aAvZZJ1b53k16.jpg",url:  "https://www.youtube.com/watch?v=8bYBOVWLNIs", IMDB: "6.6",   actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Jude Law, Johnny Depp"},
  {title: "Fantastic Beasts", title2: "the Secrets of Dumbledore",year: "2022",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",url:  "https://www.youtube.com/watch?v=Y9dr2zw-TXQ",  IMDB: "6.2",  actor: "Mads Mikkelsen, Eddie Redmayne, Jude Law, Ezra Miller, Katherine Wilson"},
  

]
  number = Math.round(Math.floor(Math.random() * 10))

}
