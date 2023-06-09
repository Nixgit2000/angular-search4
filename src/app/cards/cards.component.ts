
import { Component } from '@angular/core';
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

constructor(public display: DisplayService) {
}



  lotr = [
    {title: "The Lord of the Rings", title2: "The Fellowship of the Ring", year: "2001", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5m0zjctrxy9HeSAtnGWNLlsnr8z.jpg", url: "https://www.youtube.com/watch?v=V75dMMIW2B4" , IMDB: "8.9", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Sean Bean, Dominic Monaghan, Billy Boyd",},
    {title: "The Lord of the Rings", title2: "The Fellowship of the Ring",  year: "2002", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/mw2Zhm2PguTRDc4jMwV6VpLhCOr.jpg", url: "https://www.youtube.com/watch?v=hYcw5ksV8YQ" ,IMDB: "8.7", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Dominic Monaghan, Billy Boyd",},
    {title: "The Lord of the Rings", title2: "The Fellowship of the Ring",  year: "2003", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/A0uT7ELKhgCB10qubggn1q86DUV.jpg", url: "https://www.youtube.com/watch?v=y2rYRu8UW8M" ,IMDB: "9.0", actor: "Elijah Wood, Viggo Mortensen, Sean Astin, Orlando Bloom, Ian McKellen, Dominic Monaghan, Billy Boyd",},
  ]  
HP = [
 {title: "Harry Potter", title2: "and the Philosopher's Stone",year: "2001",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", url:"https://www.youtube.com/watch?v=VyHV0BRtdxo",IMDB: "7.6",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Chamber of Secrets",year: "2002",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",url:"https://www.youtube.com/watch?v=1bq0qff4iF8",IMDB: "7.4",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Prisoner of Azkaban",year: "2004",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",url:"https://www.youtube.com/watch?v=lAxgztbYDbs", IMDB: "7.8", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Goblet of Fire",year: "2005",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",url:"https://www.youtube.com/watch?v=3EGojp4Hh6I", IMDB: "7.4",  actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Order of the Phoenix",year: "2007",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",url:"https://www.youtube.com/watch?v=y6ZW7KXaXYk",IMDB: "7.5", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Half Blood Prince",year: "2009",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",url:"https://www.youtube.com/watch?v=tAiy66Xrsz4",IMDB: "7.6", actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Deathly Hallows: Part I",year: "2010",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",url:"https://www.youtube.com/watch?v=MxqsmsA8y5k", IMDB: "7.7",actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
  {title: "Harry Potter", title2: "and the Deathly Hallows: Part II",year: "2011",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",url:"https://www.youtube.com/watch?v=5NYt1qirBWg", IMDB: "8.1",actor: "Daniel Radcliffe, Emma Watson, Rupert Grint, Alan Rickman, Tom Felton, Maggie Smith, Robbie Coltrane, Harry Melling"},
]
 
 FB = [
  {title: "Fantastic Beasts", title2: "and Where to Find Them",year: "2016",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",url: "https://www.youtube.com/watch?v=ViuDsy7yb8M", IMDB: "7.3",   actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Colin Farrell, Johnny Depp"},
  {title: "Fantastic Beasts", title2: "the Crimes of Grindewald",year: "2018",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/u5QrKhSCGoFsB8aAvZZJ1b53k16.jpg",url:  "https://www.youtube.com/watch?v=8bYBOVWLNIs", IMDB: "6.6",   actor: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Jude Law, Johnny Depp"},
  {title: "Fantastic Beasts", title2: "the Secrets of Dumbledore",year: "2022",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",url:  "https://www.youtube.com/watch?v=Y9dr2zw-TXQ",  IMDB: "6.2",  actor: "Mads Mikkelsen, Eddie Redmayne, Jude Law, Ezra Miller, Katherine Wilson"},
  

]
hobbit = [
  {title: "The Hobbit", title2: "an Unexpected Journey", year: "2012", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4ycKLoRXteeHSllfAQl8jTNv6qS.jpg", url: "https://www.youtube.com/watch?v=SDnYMbYB-nU" , IMDB: "7.8", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",},
  {title: "The Hobbit", title2: "the Desolation of Smaug", year: "2013", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/qOKPhHqh7Eymsovk2bKyca59iC6.jpg", url: "https://www.youtube.com/watch?v=fnaojlfdUbs" , IMDB: "7.8", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",},
  {title: "The Hobbit", title2: "the Battle of the Five Armies", year: "2014", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/x4ck5q78vzURwnV65O0VjrlomtR.jpg", url: "https://www.youtube.com/watch?v=iVAgTiBrrDA" ,IMDB: "7.4", actor: "Martin Freeman, Richard Armitage, Ian McKellen, Cate Blanchett, Benedict Cumberbatch",},
 

 ]
  
 jurassicPark= [ 
  {title: "Jurassic Park", title2: "I",year: "1993", url:  "https://www.youtube.com/watch?v=_jKEqDKpJLw",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aTlnLDD14CElItz0x6N3RZ2U2kn.jpg",  IMDB: "8.2",    actor: "Sam Neill, Laura Dern, Jeff Goldblum, Richard Attenborough, Martin Ferrero", backgroundPos: "center center",  pic: "../assets/ASSETS/JP1.png"},
  {title: "Jurassic Park", title2: "II",year: "1997", url:  "https://www.youtube.com/watch?v=vtfwgaHD5_w", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/7r8adhMO3SyODPHE2lv8kDTX6NK.jpg",  IMDB: "6.5",   actor: "Jeff Goldblum, Julianne Moore, Pete Postlethwaite, Vince Vaughn, Vanessa Lee Chester", backgroundPos: "center center",  pic: "../assets/ASSETS/JP2.png"},
  {title: "Jurassic Park", title2: "III",year: "2001", url:  "https://www.youtube.com/watch?v=gjIaV6CU0wA",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4vA26N1SjGBkmdvLDEXDfXarN5P.jpg",  IMDB: "5.9",    actor: "Sam Neill, William H. Macy, Téa Leoni, Alessandro Nivola, Trevor Morgan", backgroundPos: "center center",  pic: "../assets/ASSETS/JP3.png"},
  {title: "Jurassic World", title2: "I",year: "2015", url:  "https://www.youtube.com/watch?v=RFinNxS5KN4", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/ztGyzqXeprquXX6koXRfY7rOBpU.jpg",  IMDB: "6.9",   actor: "Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson", backgroundPos: "center center",  pic: "../assets/ASSETS/JP4.png"},
  {title: "Jurassic World", title2: "II",year: "2018", url:  "https://www.youtube.com/watch?v=vn9mMeWcgoM", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/vAIm8L8n4MxB5yVQybi2YhsuPl.jpg",  IMDB: "6.1",   actor: "Chris Pratt, Bryce Dallas Howard, Rafe Spall, Justice Smith, Daniella Pineda", backgroundPos: "center center",  pic: "../assets/ASSETS/JP5.png"},
 ]
  starWars= [ 
  {title: "Star Wars", title2: "I: The Phantom Menace", year: "1999", url:  "https://www.youtube.com/watch?v=bD7bpG-zDJQ",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/njvYovI7hE19OjHsaWBjWNW2wpj.jpg",  IMDB: "6.5",  actor: "Liam Neeson, Ewan McGregor, Natalie Portman, Jake Lloyd, Ian McDiarmid, Ahmed Best, Ray Park, Anthony Daniels, Kenny Baker, Terence Stamp", backgroundPos: "center center",  pic: "../assets/ASSETS/SW1.png"},
  {title: "Star Wars", title2: "II: Attack of the Clones",year: "2002", url:  "https://www.youtube.com/watch?v=gYbW1F_c9eM",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/xmE8UTJXumiy3wKn4KLbHqsbYdj.jpg",  IMDB: "6.6", actor: "Ewan McGregor, Natalie Portman, Hayden Christensen, Christopher Lee, Samuel L. Jackson, Ian McDiarmid, Anthony Daniels, Kenny Baker, Frank Oz, Temuera Morrison", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW2.png"},
  {title: "Star Wars", title2: "III: Revenge of the Sith",year: "2005", url:  "https://www.youtube.com/watch?v=5UnjrG_N8hU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/9IhnxfbRH2kybbWrb4Ac8yvN2jP.jpg",  IMDB: "7.6", actor: "Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Anthony Daniels, Kenny Baker, Frank Oz, Jimmy Smits, Christopher Lee", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW3.png"},
  {title: "Star Wars", title2: "IV: A New Hope", font: "FB",year: "1977", url:  "https://www.youtube.com/watch?v=55jkOtsEZZg",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4eBxpbab6wjtcHiR4ATf3cQ8tu4.jpg",  IMDB: "8.6", actor: "Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing, Alec Guinness, Anthony Daniels, Kenny Baker, Peter Mayhew, David Prowse, Phil Brown", backgroundPos: "center center",  pic: "../assets/ASSETS/SW4.png"},
  {title: "Star Wars", title2: "V: The Empire Strikes Back",year: "1980", url:  "https://www.youtube.com/watch?v=urhsYepFqs0&vl=en",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/uTUi68RjzMpzATjI5l1kszVQkYx.jpg",  IMDB: "8.7", actor: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, Peter Mayhew, Frank Oz, Jeremy Bulloch, Julian Glover, John Ratzenberger", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW5.png"},
  {title: "Star Wars", title2: "VI: Return of the Jedi",year: "1983", url:  "https://www.youtube.com/watch?v=Z68iAdS68CI",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/nsV6e2Y8rYRNxozFDWM5bADnKSn.jpg",  IMDB: "8.3",  actor: "Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Ian McDiarmid, Anthony Daniels, Kenny Baker, Peter Mayhew, Warwick Davis, Frank Oz", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW6.png"},
  {title: "Star Wars", title2: "VII: The Force Awakens",year: "2015", url:  "https://www.youtube.com/watch?v=sGbxmsDFVnE",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/gzFoqLYdFClzfXBsxUTjfFwMvXe.jpg",  IMDB: "7.8", actor: "Daisy Ridley, John Boyega, Adam Driver, Oscar Isaac, Harrison Ford, Carrie Fisher, Peter Mayhew, Anthony Daniels, Domhnall Gleeson, Gwendoline Christie", backgroundPos: "center center",  pic: "../assets/ASSETS/SW7.png"},
  {title: "Star Wars", title2: "VIII: The Last Jedi",year: "2017", url:  "https://www.youtube.com/watch?v=Q0CbN8sfihY",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aOfzX4s5r7wnItzKU62biCuJ5a5.jpg",  IMDB: "6.9",  actor: "Daisy Ridley, Adam Driver, John Boyega, Mark Hamill, Carrie Fisher, Oscar Isaac, Laura Dern, Kelly Marie Tran, Domhnall Gleeson, Benicio Del Toro", backgroundPos: "0% 60%",  pic: "../assets/ASSETS/SW8.png"},
  {title: "Star Wars", title2: "IX: The Rise of Skywalker",year: "2019", url:  "https://www.youtube.com/watch?v=8Qn_spdM5Zg",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rdpmS6gFS8rfho7XxmZB6PAcaQM.jpg",  IMDB: "6.5", actor: "Daisy Ridley, Adam Driver, John Boyega, Oscar Isaac, Ian McDiarmid, Carrie Fisher, Anthony Daniels, Domhnall Gleeson, Keri Russell, Joonas Suotamo", backgroundPos: "40% 60%",  pic: "../assets/ASSETS/SW9.png"},
 
 ]

theMummy = [
  {title: "The Mummy", title2: "",year: "1999", url:  "https://www.youtube.com/watch?v=f7oKxlaUBac",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5nDDiZmd5I4OkhnsQXq1LeusrIL.jpg",  IMDB: "7.1",    actor: "Brendan Fraser, Rachel Weisz, John Hannah, Arnold Vosloo, Oded Fehr", backgroundPos: "center center",  pic: "../assets/ASSETS/TM1.png"},
  {title: "The Mummy", title2: "Returns",year: "2001", url:  "https://www.youtube.com/watch?v=ptmLrNpmcBo",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/kdJsW7hcy1lrj7tdMPycTAQPAiR.jpg",  IMDB: "6.4",    actor: "Brendan Fraser, Rachel Weisz, John Hannah, Arnold Vosloo, Oded Fehr", backgroundPos: "center center",  pic: "../assets/ASSETS/TM2.png"},
  {title: "The Mummy", title2: "Tomb of the Dragon Emperor",year: "2008", url:  "https://www.youtube.com/watch?v=5-4qSE2Ch0Y",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/wI4h6IyU5Ab9fG8PQ7HdyD10k9V.jpg",  IMDB: "5.2",    actor: "Brendan Fraser, Jet Li, Maria Bello, John Hannah, Russell Wong", backgroundPos: "center center",  pic: "../assets/ASSETS/TM4.png"},
  ]

  matrix= [ 

  {title: "The Matrix", title2: "",year: "1999", url:  "https://www.youtube.com/watch?v=vKQi3bBA1y8",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/idiwM53BJIWT7LqBOoZ7FXyPBSu.jpg",  IMDB: "8.7", actor: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, Joe Pantoliano", backgroundPos: "center center",  pic: "../assets/ASSETS/M1.png"},
  {title: "The Matrix", title2: "II",year: "2003", url:  "https://www.youtube.com/watch?v=kYzz0FSgpSU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/uBEVZ9H5kCKkKJMS6AYsB0kBDKT.jpg",  IMDB: "7.2",  actor: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, Monica Bellucci", backgroundPos: "center center",  pic: "../assets/ASSETS/M2.png"},
  {title: "The Matrix", title2: "III",year: "2003", url:  "https://www.youtube.com/watch?v=hMbexEPAOQI",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/ym2d7vnusSr6GiVBIi3jc6vwbGI.jpg",  IMDB: "6.7",  actor: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, Mary Alice", backgroundPos: "center center",  pic: "../assets/ASSETS/M3.png"},
  {title: "The Matrix", title2: "IV",year: "2021", url:  "https://www.youtube.com/watch?v=9ix7TUGVYIo",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/dnF1P5FmjUHJUHUduxAoXgpd3nM.jpg",  IMDB: "5.7", actor: "Keanu Reeves, Jessica Henwick, Carrie-Anne Moss, Priyanka Chopra", backgroundPos: "center center",  pic: "../assets/ASSETS/M4.png"},
  ]
  menInBlack = [
  
  {title: "Men In Black", title2: "",year: "1997", url:  "https://www.youtube.com/watch?v=UxUTTrU6PA4",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/vcMuJKZmKeuWXN9uFeCwV9OR5KW.jpg",  IMDB: "7.3",    actor: "Will Smith, Tommy Lee Jones, Linda Fiorentino, Vincent D'Onofrio, Rip Torn", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB1.png"},
  {title: "Men In Black", title2: "II",year: "2002", url:  "https://www.youtube.com/watch?v=p4NJHqoojOU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/lrJ98e3XysBVuMhmQrCMSBuEUqw.jpg",  IMDB: "6.2",    actor: "Will Smith, Tommy Lee Jones, Lara Flynn Boyle, Johnny Knoxville, Rosario Dawson", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB2.png"},
  {title: "Men In Black", title2: "III",year: "2012", url:  "https://www.youtube.com/watch?v=IyaFEBI_L24",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/wU0crTqSou6Y4GLyXnFSAnKFeH2.jpg",  IMDB: "6.8",    actor: "Will Smith, Tommy Lee Jones, Josh Brolin, Emma Thompson, Michael Stuhlbarg", backgroundPos: "center center",  pic: "../assets/ASSETS/MIB3.png"},
 ] 
  alien = [
  {title: "Alien", title2: "",year: "1979", url:  "https://www.youtube.com/watch?v=jQ5lPt9edzQ",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/ctaETvc0KmHTiwGo2GFUlPpm6Oo.jpg",  IMDB: "8.5",    actor: "Sigourney Weaver, Tom Skerritt, Veronica Cartwright, Harry Dean Stanton, John Hurt", backgroundPos: "center center",  pic: "../assets/ASSETS/AL1.png"},
  {title: "Aliens", title2: "",year: "1986", url:  "https://www.youtube.com/watch?v=oSeQQlaCZgU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/zO7ru220vww1EyfwavvSWS34PxP.jpg",  IMDB: "8.4",    actor: "Sigourney Weaver, Michael Biehn, Paul Reiser, Lance Henriksen, Bill Paxton", backgroundPos: "center center",  pic: "../assets/ASSETS/AL2.png"},
  {title: "Alien³", title2: "",year: "1992", url:  "https://www.youtube.com/watch?v=Bk_x9W1xKng",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/lFGQ4iOgWu50us1xpAEPP2jmU7w.jpg",  IMDB: "6.4",    actor: "Sigourney Weaver, Charles S. Dutton, Charles Dance, Brian Glover, Ralph Brown", backgroundPos: "center center",  pic: "../assets/ASSETS/AL3.png"},
  {title: "Alien", title2: "Resurrection",year: "1997", url:  "https://www.youtube.com/watch?v=-qJjiq72WOo",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/13162IOGtPQaZgnnY3raCJbUsW5.jpg",  IMDB: "6.2",    actor: "Sigourney Weaver, Winona Ryder, Dominique Pinon, Ron Perlman, Gary Dourdan", backgroundPos: "center center",  pic: "../assets/ASSETS/AL4.png"},
  {title: "Alien", title2: "Prometheus",year: "2012", url:  "https://www.youtube.com/watch?v=HHcHYisZFLU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/omy5CiDMQnGqQUEJ9gNLOGPZQFW.jpg",  IMDB: "7.0",    actor: "Noomi Rapace, Michael Fassbender, Charlize Theron, Idris Elba, Guy Pearce", backgroundPos: "center center",  pic: "../assets/ASSETS/AL5.png"},
  {title: "Alien", title2: "Covenant", year: "2017", url:  "https://www.youtube.com/watch?v=svnAD0TApb8",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/s2hkxEtEwEe1ZUE0EwtztsSWS7P.jpg",  IMDB: "6.4",    actor: "Michael Fassbender, Katherine Waterston, Billy Crudup, Danny McBride, Demián Bichir", backgroundPos: "center center",  pic: "../assets/ASSETS/AL6.png"},
  ]
  planetOfTheApes = [
  {title: "Rise of the",title2: "Planet of the Apes",year: "2011", url:  "https://www.youtube.com/watch?v=Rwp58drJh2A",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/fwNDBcenJHrBJonOWZUSBV3vs4N.jpg",  IMDB: "7.6",     actor: "Andy Serkis, James Franco, Freida Pinto, John Lithgow, Brian Cox", backgroundPos: "center center",  pic: "../assets/ASSETS/POA1.png"},
  {title: "Dawn of the",title2: "Planet of the Apes", year: "2014", url:  "https://www.youtube.com/watch?v=rf5e7Xc1Hwk",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/qjtZdK4H1BC2og7JxIcy7hljlOs.jpg",  IMDB: "7.6",    actor: "Andy Serkis, Jason Clarke, Gary Oldman, Keri Russell, Toby Kebbell", backgroundPos: "center center",  pic: "../assets/ASSETS/POA2.png"},
  {title: "War for the",title2: "Planet of the Apes",year: "2017", url:  "https://www.youtube.com/watch?v=qxjPjPzQ1iU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/u7fhZU4AxYRpjvy05BxoR1d5kDi.jpg",  IMDB: "7.4",     actor: "Andy Serkis, Woody Harrelson, Steve Zahn, Karin Konoval, Amiah Miller", backgroundPos: "center center",  pic: "../assets/ASSETS/POA3.png"},
 ]
  transformers = [
  {title: "Transformers", title2: "",year: "2007", url:  "https://www.youtube.com/watch?v=v8ItGrI-Ou0",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/36jTRqpWX7EQyjlXVLpSkMbKQR5.jpg",  IMDB: "7.0",    actor: "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson, Jon Voight", backgroundPos: "center center",  pic: "../assets/ASSETS/TF1.png"},
  {title: "Transformers", title2: "Revenge of the Fallen",year: "2009", url:  "https://www.youtube.com/watch?v=cSxd33D8jc0",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/toRN6NlSIC0brlhXHEa6fqOwXuC.jpg",  IMDB: "5.9",    actor: "Shia LaBeouf, Megan Fox, Josh Duhamel, Tyrese Gibson, John Turturro", backgroundPos: "center center",  pic: "../assets/ASSETS/TF2.png"},
  {title: "Transformers", title2: "Dark of the Moon",year: "2011", url:  "https://www.youtube.com/watch?v=Nj0HkNrPK5k", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/eMYEzkCVxrLHmfbRUqrDmxbTNfa.jpg",  IMDB: "6.2",   actor: "Shia LaBeouf, Rosie Huntington-Whiteley, Josh Duhamel, Tyrese Gibson, John Malkovich", backgroundPos: "center center",  pic: "../assets/ASSETS/TF3.png"},
  {title: "Transformers", title2: "Age of Extinction",year: "2014", url:  "https://www.youtube.com/watch?v=T9bQCAWahLk",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/vhclhRH1RCBBIokZaAvmFGVPSMS.jpg",  IMDB: "5.6",    actor: "Mark Wahlberg, Stanley Tucci, Kelsey Grammer, Nicola Peltz, Jack Reynor", backgroundPos: "center center",  pic: "../assets/ASSETS/TF4.png"},


]
 starTrek = [
  {title: "Star Trek", title2: "",year: "2009", url:  "https://www.youtube.com/watch?v=pKFUZ10Wmbw",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/yyC5DQoLP7jy1KanFo4C2Htyyg4.jpg",  IMDB: "7.9",    actor: "Chris Pine, Zachary Quinto, Zoe Saldana, Karl Urban, Simon Pegg", backgroundPos: "center center",  pic: "../assets/ASSETS/ST1.png"},
  {title: "Star Trek", title2: "Into Darkness",year: "2013", url:  "https://www.youtube.com/watch?v=RJ1qOs7jkIQ",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/u6tM5uEatthSrqp8dea0ggR0LbM.jpg",  IMDB: "7.7",    actor: "Chris Pine, Zachary Quinto, Zoe Saldana, Benedict Cumberbatch, Karl Urban", backgroundPos: "center center",  pic: "../assets/ASSETS/ST2.png"},
  

]
action1= [  
  {title: "Mission Impossible", title2: "",year: "1996", url:  "https://www.youtube.com/watch?v=Ohws8y572KE", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/O6tFDhra5dY2DNKklDk81k9FdJ.jpg",  IMDB: "7.1",  actor: "Tom Cruise, Jon Voight, Emmanuelle Béart, Jean Reno, Ving Rhames", backgroundPos: "center center",  pic: "../assets/ASSETS/MI1.png"},
  {title: "Mission Impossible", title2: "II",year: "2000", url:  "https://www.youtube.com/watch?v=vIpqpRuGrq4",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/dYDMZOu0U2ezUNnnilQMv2WifJo.jpg",  IMDB: "6.1",  actor: "Tom Cruise, Dougray Scott, Thandie Newton, Ving Rhames, Richard Roxburgh", backgroundPos: "center center",  pic: "../assets/ASSETS/MI2.png"},
  {title: "Mission Impossible", title2: "III",year: "2006", url:  "https://www.youtube.com/watch?v=KH_lyU4vJn8",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5Hegqm3JnqbGxb7kZy4t8vfQmwD.jpg",  IMDB: "6.9",  actor: "Tom Cruise, Philip Seymour Hoffman, Ving Rhames, Billy Crudup, Michelle Monaghan", backgroundPos: "center center",  pic: "../assets/ASSETS/MI3.png"},
  {title: "Mission Impossible", title2: "Ghost Protocol",year: "2011", url:  "https://www.youtube.com/watch?v=EDGYVFZxsXQ",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/pxjO6xsnKzXyT8iweOcJuuRpbbb.jpg",  IMDB: "7.4",  actor: "Tom Cruise, Jeremy Renner, Simon Pegg, Paula Patton, Michael Nyqvist", backgroundPos: "center center",  pic: "../assets/ASSETS/MI4.png"},
  {title: "Mission Impossible", title2: "Rogue Nation",year: "2015", url:  "https://www.youtube.com/watch?v=EIsauUFIguE",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/fsuliS9FpkyvThQU1bJM1tqo9ZE.jpg",  IMDB: "7.4",  actor: "Tom Cruise, Rebecca Ferguson, Jeremy Renner, Simon Pegg, Ving Rhames", backgroundPos: "center center",  pic: "../assets/ASSETS/MI5.png"},
  {title: "Mission Impossible", title2: "Fallout",year: "2018", url:  "https://www.youtube.com/watch?v=wb49-oV0F78", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/bOxxpggWq2bpmvLv7PY3f70s5K.jpg",  IMDB: "7.7", actor: "Tom Cruise, Henry Cavill, Ving Rhames, Simon Pegg, Rebecca Ferguson", backgroundPos: "center center",  pic: "../assets/ASSETS/MI6.png"},
]
 johnWick = [
  {title: "John Wick", title2: "I",year: "2014", url:  "https://www.youtube.com/watch?v=C0BMx-qxsP4", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/zbSDyXmrtKvRWBtoUR4KpBvUGcQ.jpg",  IMDB: "7.4", actor: "Keanu Reeves, Michael Nyqvist, Alfie Allen, Willem Dafoe, Adrianne Palicki", backgroundPos: "center center",  pic: "../assets/ASSETS/JW1.png"},
  {title: "John Wick", title2: "II",year: "2017", url:  "https://www.youtube.com/watch?v=XGk2EfbD_Ps", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/yscP1PyFDzOMPdVP4V4BxWgF2xg.jpg",  IMDB: "7.4", actor: "Keanu Reeves, Common, Laurence Fishburne, Riccardo Scamarcio, Ruby Rose", backgroundPos: "center center",  pic: "../assets/ASSETS/JW2.png"},
  {title: "John Wick", title2: "III",year: "2019", url:  "https://www.youtube.com/watch?v=M7XM597XO94",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/lUKXNV8ISvWQRpd0yILJw8uDNdI.jpg",  IMDB: "7.4",  actor: "Keanu Reeves, Halle Berry, Ian McShane, Laurence Fishburne, Mark Dacascos", backgroundPos: "center center",  pic: "../assets/ASSETS/JW3.png"},
 ]
 action2 = [
  {title: "The Bourne Identity", title2: "",year: "2002", url:  "https://www.youtube.com/watch?v=FpKaB5dvQ4g",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aP8swke3gmowbkfZ6lmNidu0y9p.jpg",  IMDB: "7.9",  actor: "Matt Damon, Franka Potente, Chris Cooper, Clive Owen, Brian Cox", backgroundPos: "center center",  pic: "../assets/ASSETS/JB1.png"},
  {title: "The Bourne Supremacy", title2: "",year: "2004", url:  "https://www.youtube.com/watch?v=Y-HqyyfBbSo",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/jupG9sFT64YwM8PSkwkUD2wHcYD.jpg",  IMDB: "7.7",  actor: "Matt Damon, Franka Potente, Brian Cox, Julia Stiles, Karl Urban", backgroundPos: "center center",  pic: "../assets/ASSETS/JB2.png"},
  {title: "The Bourne Ultimatum", title2: "",year: "2007", url:  "https://www.youtube.com/watch?v=ZT2ZxjUjSo0",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/d4DuphCHCjVUyffExnK5nLbn39K.jpg",  IMDB: "8.0",  actor: "Matt Damon, Julia Stiles, David Strathairn, Scott Glenn, Paddy Considine", backgroundPos: "center center",  pic: "../assets/ASSETS/JB3.png"},
  {title: "The Bourne Legacy", title2: "",year: "2012", url:  "https://www.youtube.com/watch?v=jSzy9qQ3mDE",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/grHGqOeMEd0ZMjSWhJgCE81gylt.jpg",  IMDB: "6.6",  actor: "Matt Damon, Tommy Lee Jones, Alicia Vikander, Vincent Cassel, Julia Stiles", backgroundPos: "center center",  pic: "../assets/ASSETS/JB4.png"},
  {title: "Jason Bourne", title2: "",year: "2016", url:  "https://www.youtube.com/watch?v=v71ce1Dqqns",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/ziU0b3hRM6raH1u4wym02EYMLZ6.jpg",  IMDB: "6.6",  actor: "Matt Damon, Tommy Lee Jones, Julia Stiles", backgroundPos: "center center",  pic: "../assets/ASSETS/JB5.png"},
 ]
  dieHard = [
  {title: "Die Hard", title2: "",year: "1988", url:  "https://www.youtube.com/watch?v=jaJuwKCmJbY",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/6JevfGbPNcWiSLLzKVwogKewzEj.jpg",  IMDB: "8.2",  actor: "Bruce Willis, Alan Rickman, Bonnie Bedelia, Reginald VelJohnson, Paul Gleason", backgroundPos: "center center",  pic: "../assets/ASSETS/DH1.png"},
  {title: "Die Hard", title2: "2",year: "1990", url:  "https://www.youtube.com/watch?v=CvHp7xJZ4_U",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/aLPtvDbigpHIZVVLnBjjbl5J0sh.jpg",  IMDB: "7.1",  actor: "Bruce Willis, Bonnie Bedelia, William Atherton, Reginald VelJohnson, Franco Nero", backgroundPos: "center center",  pic: "../assets/ASSETS/DH2.png"},
  {title: "Die Hard", title2: "With a Vengeance",year: "1995", url:  "https://www.youtube.com/watch?v=_-EX4X13hYc",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/mrFUcoP6zJkz1NeR0TEiqoCQqqk.jpg",  IMDB: "7.6",  actor: "Bruce Willis, Samuel L. Jackson, Jeremy Irons, Graham Greene, Colleen Camp", backgroundPos: "center center",  pic: "../assets/ASSETS/DH3.png"},
  {title: "Live Free or", title2: "Die Hard",year: "2007", url:  "https://www.youtube.com/watch?v=pVgGRLH5n6U",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rFkTGRDElN5fG2i68j3DxSgl60U.jpg",  IMDB: "7.1",  actor: "Bruce Willis, Justin Long, Timothy Olyphant, Maggie Q, Mary Elizabeth Winstead", backgroundPos: "center center",  pic: "../assets/ASSETS/DH4.png"},
  {title: "Die Hard", title2: "V",year: "2013", url:  "https://www.youtube.com/watch?v=FRLwoMXaZHQ",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/As1nrM2Vv1bWI3LHgGIwDZSDxHe.jpg",  IMDB: "5.2",  actor: "Bruce Willis, Jai Courtney, Sebastian Koch, Yulia Snigir, Cole Hauser", backgroundPos: "center center",  pic: "../assets/ASSETS/DH5.png"},



]
batman = [
{title: "Batman Begins", title2: "",year: "2005", url:  "https://www.youtube.com/watch?v=neY2xVmOfUM",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1P3ZyEq02wcTMd3iE4ebtLvncvH.jpg",  IMDB: "8.2",  actor: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes, Gary Oldman", backgroundPos: "center center",  pic: "../assets/ASSETS/B1.png"},
{title: "The Dark Knight", title2: "",year: "2008", url:  "https://www.youtube.com/watch?v=EXeTwQWrcwY",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/kMq65QVRSL6YWpN5WQwLbaQjV3P.jpg",  IMDB: "9.0",  actor: "Christian Bale, Heath Ledger, Aaron Eckhart, Gary Oldman, Maggie Gyllenhaal", backgroundPos: "center center",  pic: "../assets/ASSETS/B2.png"},
{title: "The Dark Knight Rises", title2: "",year: "2012", url:  "https://www.youtube.com/watch?v=GokKUqLcvD8", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/irP27RDYv9JjF7fVPKYKUODhr0S.jpg",  IMDB: "8.4", actor: "Christian Bale, Tom Hardy, Anne Hathaway, Gary Oldman, Joseph Gordon-Levitt", backgroundPos: "center center",  pic: "../assets/ASSETS/B3.png"},


]
avengers = [

{title: "The Avengers", title2: "",year: "2012", url:  "https://www.youtube.com/watch?v=eOrNdBpGMv8",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/qMxAmzGQO722q0UlssCOPhrXmvX.jpg",  IMDB: "8.0",  actor: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Tom Hiddleston, Clark Gregg, Cobie Smulders, Stellan Skarsgard", backgroundPos: "center center",  pic: "../assets/ASSETS/TA1.png"},
{title: "The Avengers", title2: "Age of Ultron",year: "2015", url:  "https://www.youtube.com/watch?v=rD8lWtcgeyg",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/5JzVWJvjOe9Y9YOrg8iOsLJDNne.jpg",  IMDB: "7.3",  actor: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Jeremy Renner, James Spader, Aaron Taylor-Johnson, Elizabeth Olsen, Paul Bettany", backgroundPos: "center center",  pic: "../assets/ASSETS/TA2.png"},
{title: "The Avengers", title2: "Infinity War",year: "2018", url:  "https://www.youtube.com/watch?v=6ZfuNTqbHE8",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",  IMDB: "8.4",  actor: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Tom Holland, Chadwick Boseman, Don Cheadle, Paul Bettany", backgroundPos: "center center",  pic: "../assets/ASSETS/TA3.png"},
{title: "The Avengers", title2: "Endgame",year: "2019", url:  "https://www.youtube.com/watch?v=TcMBFSGVi1c",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/or06FN3Dka5tukK1e9sl16pB3iy.jpg",  IMDB: "8.4",  actor: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan", backgroundPos: "center center",  pic: "../assets/ASSETS/TA4.png"},
]

comicBook1 = [
{title: "Spider-Man", title2: "I",year: "2002", url:  "https://www.youtube.com/watch?v=_yhFofFZGcc",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rweIrveL43TaxUN0akQEaAXL6x0.jpg",  IMDB: "7.4", actor: "Tobey Maguire, Kirsten Dunst, Willem Dafoe, James Franco, J.K. Simmons", backgroundPos: "center center",  pic: "../assets/ASSETS/SM1.png"},
{title: "Spider-Man", title2: "II",year: "2004", url:  "https://www.youtube.com/watch?v=1s9Yln0YwCw", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/kUSGnFTtl0uMu5PJSKDX7bIB4sl.jpg",  IMDB: "7.4", actor: "Tobey Maguire, Kirsten Dunst, Alfred Molina, James Franco, J.K. Simmons", backgroundPos: "center center",  pic: "../assets/ASSETS/SM2.png"},
{title: "Spider-Man", title2: "III",year: "2007", url:  "https://www.youtube.com/watch?v=e5wUilOeOmg", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/dvPB5LvRZh5gcPpGBOVgT0R3yUB.jpg",  IMDB: "6.3", actor: "Tobey Maguire, Kirsten Dunst, James Franco, Thomas Haden Church, Topher Grace", backgroundPos: "center center",  pic: "../assets/ASSETS/SM3.png"},
]
spiderMan = [
{title: "The Amazing Spider-Man", title2: "",year: "2012", url:  "https://www.youtube.com/watch?v=upwf8RsyNqQ", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1LGrTajwKHfIaUJ0CTnITPZqElr.jpg",  IMDB: "6.9", actor: "Andrew Garfield, Emma Stone, Rhys Ifans, Denis Leary, Martin Sheen", backgroundPos: "center center",  pic: "../assets/ASSETS/TAS1.png"},
{title: "The Amazing Spider-Man", title2: "2",year: "2014", url:  "https://www.youtube.com/watch?v=DlM2CWNTQ84", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rJZclvaXUWI1yPCtSvmhzOqwFRY.jpg",  IMDB: "6.6", actor: "Andrew Garfield, Emma Stone, Jamie Foxx, Dane DeHaan, Sally Field", backgroundPos: "center center",  pic: "../assets/ASSETS/TAS2.png"},
]
comicBook2 = [

{title: "Kick-Ass", title2: "I",year: "2010", url:  "https://www.youtube.com/watch?v=2rpXHqnGDXo", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/kzsuzcbiyoSFErQxEvGkvZpXcte.jpg",  IMDB: "7.6", actor: "Chloe Grace Moretz, Aaron Taylor-Johnson, Nicolas Cage, Christopher Mintz-Plasse", backgroundPos: "center center",  pic: "../assets/ASSETS/KA1.png"},
{title: "Kick-Ass", title2: "II",year: "2013", url:  "https://www.youtube.com/watch?v=Td921lYSBIA", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1go2A3gdQjaMuHWquybgoJlQRcX.jpg",  IMDB: "6.5", actor: "Chloe Grace Moretz, Aaron Taylor-Johnson, Christopher Mintz-Plasse, Jim Carrey", backgroundPos: "center center",  pic: "../assets/ASSETS/KA2.png"},
]
xMen = [
{title: "X-Men", title2: "I",year: "2000", url:  "https://www.youtube.com/watch?v=VNxwlx6etXI", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/dhEMlpcGD0b0AxxDvuSMf5sQObR.jpg",  IMDB: "7.3", actor: "Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen, James Marsden", backgroundPos: "center center",  pic: "../assets/ASSETS/XM1.png"},
{title: "X-Men", title2: "II",year: "2003", url:  "https://www.youtube.com/watch?v=KjzPi5hfv9c", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/nspLNX9ADUu4t0viZs0gNHK048g.jpg",  IMDB: "7.4", actor: "Hugh Jackman, Patrick Stewart, Ian McKellen, Famke Janssen, Halle Berry", backgroundPos: "center center",  pic: "../assets/ASSETS/XM2.png"},
{title: "X-Men", title2: "III",year: "2006", url:  "https://www.youtube.com/watch?v=ZQ0v5dXbw7M", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/rlPn8yQ4aju1GVrSzUgYjZrA5AI.jpg",  IMDB: "6.6", actor: "Hugh Jackman, Patrick Stewart, Ian McKellen, Halle Berry, Famke Janssen", backgroundPos: "center center",  pic: "../assets/ASSETS/XM3.png"},
]


Conjuring = [
  {title: "The Conjuring", title2: "",year: "2013", url:  "https://www.youtube.com/watch?v=k10ETZ41q5o", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/AhZUF20uDowZhzkL6mGIbYBZolK.jpg",  IMDB: "7.5", actor: "Vera Farmiga, Patrick Wilson", backgroundPos: "center center",  pic: "../assets/ASSETS/C1.png"},
  {title: "The Conjuring", title2: "2",year: "2016", url:  "https://www.youtube.com/watch?v=VFsmuRPClr4", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1r8Op3YxGI0CSUg4ZH1Nc1PUj0T.jpg",  IMDB: "7.3", actor: "Vera Farmiga, Patrick Wilson", backgroundPos: "center center",  pic: "../assets/ASSETS/C2.png"},  
  {title: "The Conjuring", title2: "3",year: "2021", url:  "https://www.youtube.com/watch?v=h9Q4zZS2v1k",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/lkjOx3VOSi9PBll6UY6OUyQFZYe.jpg",  IMDB: "6.3",  actor: "Vera Farmiga, Patrick Wilson", backgroundPos: "center center",  pic: "../assets/ASSETS/C3.png"},
]
  horror1 = [
  {title: "Annabelle", title2: "I",year: "2014", url:  "https://www.youtube.com/watch?v=paFgQNPGlsg",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/gugQj8ceU2KsH8kfMjDU4qIU2i0.jpg",  IMDB: "5.4",  actor: "Annabelle Wallis, Ward Horton, Alfre Woodard", backgroundPos: "center center",  pic: "../assets/ASSETS/AB1.png"},
  {title: "Annabelle", title2: "II",year: "2017", url:  "https://www.youtube.com/watch?v=11taaQy2KBg", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/snYI6TDLkB8wL7SHFyBV6qkJuPx.jpg",  IMDB: "6.5", actor: "Talitha Bateman, Lulu Wilson, Anthony LaPaglia", backgroundPos: "center center",  pic: "../assets/ASSETS/AB2.png"},
  {title: "Annabelle", title2: "III",year: "2019", url:  "https://www.youtube.com/watch?v=bCxm7cTpBAs", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/3Ndk7Wjw8H4pOL2TxxdnRmY3At9.jpg",  IMDB: "5.9", actor: "McKenna Grace, Patrick Wilson, Madison Iseman, Vera Farmiga", backgroundPos: "center center",  pic: "../assets/ASSETS/AB3.png"},
  ]
 
 
  theShining = [
  {title: "The Shining", title2: "",year: "1980",  url:  "https://www.youtube.com/watch?v=5Cb3ik6zP2I", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hljO0M5K6pmKZo9FPSi7g5Cck6B.jpg",  IMDB: "8.4",actor: "Jack Nicholson, Shelley Duvall, Danny Lloyd, Lia Bedlam", backgroundPos: "center center",  pic: "../assets/ASSETS/TS1.png"},
  {title: "Doctor Sleep", title2: "",year: "2019", url:  "https://www.youtube.com/watch?v=CDf_EnIhojk",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/p69QzIBbN06aTYqRRiCOY1emNBh.jpg",  IMDB: "7.3",  actor: "Ewan McGregor, Rebecca Ferguson, Kyleigh Curran", backgroundPos: "center center",  pic: "../assets/ASSETS/TS2.png"},
  ]
  horror2 = [
  {title: "Paranormal Activity", title2: "I",year: "2007", url:  "https://www.youtube.com/watch?v=7TC9bKyDB5Y",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/ud8LNxvPoMldcH0WU7uREUXAN31.jpg",  IMDB: "6.3",  actor: "Katie Featherston, Micah Sloat, Mark Fredrichs", backgroundPos: "center center",  pic: "../assets/ASSETS/PA1.png"},
  {title: "Paranormal Activity", title2: "II",year: "2010", url:  "https://www.youtube.com/watch?v=2leETkgvzCA", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/esBnPPbJlWwjjJ7NTofcTaMGzE3.jpg",  IMDB: "5.7", actor: "Katie Featherston, Micah Sloat, Molly Ephraim", backgroundPos: "center center",  pic: "../assets/ASSETS/PA2.png"},
  {title: "Paranormal Activity", title2: "III",year: "2011", url:  "https://www.youtube.com/watch?v=e70TX_photI", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/9nYranPiWdNmbD5PRPPSL7VUFTS.jpg",  IMDB: "5.8", actor: "Katie Featherston, Chloe Csengery, Lauren Bittner ", backgroundPos: "center center",  pic: "../assets/ASSETS/PA3.png"},
  {title: "Paranormal Activity", title2: "IV",year: "2012", url:  "https://www.youtube.com/watch?v=g7Xn2JqH5ng", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/na5tAslm1kGNcft083AIXMTOsYR.jpg",  IMDB: "4.6", actor: "Katie Featherston, Kathryn Newton, Brady Allen, ", backgroundPos: "center center",  pic: "../assets/ASSETS/PA4.png"},
  ]
  horror3 = [
  {title: "The Exorcist", title2: "I",year: "1973", url:  "https://www.youtube.com/watch?v=YDGw1MTEe9k", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/2WgrbcxLgrI6EgkoMwY6gaLfihd.jpg",  IMDB: "8.1", actor: "Linda Blair. Ellen Burstyn", backgroundPos: "center center",  pic: "../assets/ASSETS/TE1.png"},
  {title: "The Exorcist", title2: "II",year: "1977", url:  "https://www.youtube.com/watch?v=LDraTxCzewY", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/FO4EWTC4BHEm98LTZB6wpi015w.jpg",  IMDB: "3.8",actor: "Linda Blair, Richard Burton", backgroundPos: "center center",  pic: "../assets/ASSETS/TE2.png"},
  {title: "The Exorcist", title2: "III",year: "1990", url:  "https://www.youtube.com/watch?v=BXsj26KH4jk",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/275gw2JA5YCk10o6n84rZdZBycM.jpg",  IMDB: "6.5",  actor: "George C Scott, Jason Miller", backgroundPos: "center center",  pic: "../assets/ASSETS/TE3.png"},
  {title: "The Exorcist", title2: "IV",year: "2004", url:  "https://www.youtube.com/watch?v=eHJEMIYNFFY", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/dYs8FMI1yxCHR3FUunQcGcBkuBL.jpg",  IMDB: "5.1", actor: "Stellen Skarsgard, Izabella Scorupco", backgroundPos: "center center",  pic: "../assets/ASSETS/TE4.png"},
  {title: "The Exorcist", title2: "V",year: "2005", url:  "https://www.youtube.com/watch?v=5HAZtloPE3I", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/3jIQOCB8ghrxvfWzSjzNv41LR9P.jpg",  IMDB: "5.2", actor: "Stellen Skarsgard, Clara Bellar", backgroundPos: "center center",  pic: "../assets/ASSETS/TE5.png"},
  
]



captainF = [
  {title: "Captain Fantastic", title2: "",year: "2016", url:  "https://www.youtube.com/watch?v=D1kH4OMIOMc", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/2sFME73GaD8UsUxPUKe60cPdLif.jpg",  IMDB: "7.8",   actor: "Viggo Mortensen, Samantha Isler, George MacKay, Annalise Basso", backgroundPos: "center center",  pic: "../assets/ASSETS/CF1.png"},
  {title: "Into the Wild", title2: "",year: "2007", url:  "https://www.youtube.com/watch?v=lwtZgBFKlzs",  image: "https://www.themoviedb.org/t/p/w220_and_h330_face/2MSGZEE6XZd2r4ODNziwAw7Hpw0.jpg",  IMDB: "8.1",  actor: "Emile Hirsch, Kristen Stewart, Vince Vaughn", backgroundPos: "center center",  pic: "../assets/ASSETS/CF2.png"},
 
]
criticallyAcclaimed = [
 {title: "The Royal Tenenbaums", title2: "",year: "2001", url:  "https://www.youtube.com/watch?v=caMgokYWboU",image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1M8RDkgnqnxICysLxe7JNJLvFtJ.jpg",  IMDB: "7.6",  actor: "Owen Wilson, Gene Hackman, Ben Stiller, Luke Wilson, Gwyneth Paltrow, Bill Murray, Anjelica Huston, Danny Glover, Alec Baldwin", backgroundPos: "center center",  pic: "../assets/ASSETS/RT1.png"},
  {title: "The Grand Buhapest Hotel", title2: "",year: "2014", url:  "https://www.youtube.com/watch?v=1Fg5iWmQjwk", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",  IMDB: "8.1",   actor: "Ralph Fiennes, Bill Murray, Tilda Swinton, Tony Revolori, Edward Norton, Adrien Brody, Owen Wilson, Willem Dafoe", backgroundPos: "center center",  pic: "../assets/ASSETS/RT2.png"},
]
rudolph = [
 {title: "Rudolph", title2: "the Red Nosed Reindeer",year: "1964", url:  "https://www.youtube.com/watch?v=amuEMNzIt6g", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/uIrgA3eCQ1dVSRAggTMjm0yO3ZD.jpg",  IMDB: "8.0",   actor: "Burl Ives, Billie Mae Richards", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR1.png"},
  {title: "Scrooge", title2: "A Christmas Carol",year: "2022", url:  "https://www.youtube.com/watch?v=k3SjIk3uphI", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/8tkZ1LMklRAuiJZ0IQLPsHPMid7.jpg",  IMDB: "6.2",   actor: "Alastais Sim, Kathleen Harrison", backgroundPos: "center center",  pic: "../assets/ASSETS/RRNR2.png"},
]
  officeSpace = [
  {title: "Office Space", title2: "",year: "1999", url:  "https://www.youtube.com/watch?v=dMIrlP61Z9s",  image: "https://www.themoviedb.org/t/p/w220_and_h330_face/fiB7DY9mATGFOCTd4cgK6k2Wzr9.jpg",  IMDB: "7.6",  actor: "Mike Judge, Ron Livingston, Jennifer Aniston", backgroundPos: "center center",  pic: "../assets/ASSETS/OS1.png"},
  {title: "Idiocracy", title2: "",year: "2006", url:  "https://www.youtube.com/watch?v=6lai9QhBibk", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/q7sn0A3BkBxvzdwVFOGmJGE2vF8.jpg",  IMDB: "6.5",   actor: "Luke Wilson, Maya Rudolph, Dax Shepard, Terry Crews", backgroundPos: "center center",  pic: "../assets/ASSETS/OS2.png"},



]
simonP = [
    {title: "Hot Fuzz", title2: "",year: "2007", url:  "https://www.youtube.com/watch?v=ayTnvVpj9t4",  image: "https://www.themoviedb.org/t/p/w220_and_h330_face/zPib4ukTSdXvHP9pxGkFCe34f3y.jpg",  IMDB: "7.8",  actor: "Simon Pegg, Nick Frost", backgroundPos: "center center",  pic: "../assets/ASSETS/SP1.png"},
  {title: "The World's End", title2: "",year: "2013", url:  "https://www.youtube.com/watch?v=n__1Y-N5tQk",  image: "https://www.themoviedb.org/t/p/w220_and_h330_face/4gpo49xMquddB8CJjZjksLtcbqN.jpg",  IMDB: "6.9",  actor: "Simon Pegg, Nick Frost", backgroundPos: "center center",  pic: "../assets/ASSETS/SP3.png"},
  {title: "Shaun of the Dead", title2: "",year: "2004", url:  "https://www.youtube.com/watch?v=cqDy3dXLBO8",  image: "https://www.themoviedb.org/t/p/w220_and_h330_face/pdNPgvCbZaAuxSNvcF98vBn5ySE.jpg",  IMDB: "7.9",  actor: "Simon Pegg, Nick Frost", backgroundPos: "center center",  pic: "../assets/ASSETS/SP4.png"},
  
]



}
