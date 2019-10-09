var options= {
    url: 'youtube.com',
    title: 'film',
    image: 'image.com',
    description: 'films of the film',
    actors: 'Big Small, Thin Tall, Blam Blam',
    contry: 'Ukraine',
    year: 2020
};

function TestMovie(options) {
    this.url = options.url;
    this.title = options.title;
    this.image = options.image;
    this.description = options.description;
    this.actors = options.actors;
    this.contry = options.contry;
    this.year = options.year;
};
  TestMovie.prototype = {
      getAllInfo : function () {
          return 'Result:    ' + this.title + '  ' + this.year + '  ' + this.contry + '  '  + this.description;
      },
      getUrl: function () {
          return this.url;
      }
  };
var options1= {
    url: 'ex-fs.com',
    title: 'kino',
    image: 'image.com',
    description: 'films of the film-films of the film-films of the film-films of the film',
    actors: 'Bogdan Small, Timur Tall, Vlad Blam',
    contry: 'Belgium',
    year: 2010
};
  function SecMovie() {

      TestMovie.apply(this, arguments);
      this.language= 'Ukrainian';
      // this.title = options1.title;
      // this.image = options1.image;
      // this.description = options1.description;
      // this.actors = options1.actors;
      // this.contry = options1.contry;
      // this.year = options1.year;

  }
  SecMovie.prototype = Object.create(TestMovie.prototype);
  SecMovie.prototype.constructor = SecMovie;
var options2= {
    url: 'online-life.com',
    title: 'serial',
    image: 'image.com',
    description: 'dfjkhkjflajfhklahf asjflashflaksf laflaksjfhlahflashf laf',
    actors: 'Small, Timur, Vlad, Blam, Jack, Jones',
    contry: 'France',
    year: 2012
};
function ThirdMovie() {
    TestMovie.apply(this, arguments);
    this.level = 'Hight LEVEL';
    this.language= 'Ukrainian';
    // this.url = options2.url;
    // this.title = options2.title;
    // this.image = options2.image;
    // this.description = options2.description;
    // this.actors = options2.actors;
    // this.contry = options2.contry;
    // this.year = options2.year;
}
ThirdMovie.prototype = Object.create(TestMovie.prototype);
ThirdMovie.prototype.constructor = ThirdMovie;


var options3= {
    url: 'hd-video.box',
    title: 'HD',
    image: 'image.com',
    description: 'qwerty qweryt qweryt qweuye qweutuyet ',
    actors: 'roma , vasya, petya luda',
    contry: 'Ukraine',
    year: 1990
};
function FourMovie() {
    TestMovie.apply(this, arguments);
    this.level = 'Hight LEVEL';
    this.language= 'Ukrainian';
    this.star = 55;
    // this.url = options3.url;
    // this.title = options3.title;
    // this.image = options3.image;
    // this.description = options3.description;
    // this.actors = options3.actors;
    // this.contry = options3.contry;
    // this.year = options3.year;
}
FourMovie.prototype = Object.create(TestMovie.prototype);
FourMovie.prototype.constructor = FourMovie;

var film1 = new SecMovie(options1);
var film2 = new ThirdMovie(options2);
var film3 = new FourMovie(options3);


console.log(film1.getAllInfo());
console.log(film1.getUrl());
console.log(film2.getAllInfo());
console.log(film2.getUrl());
console.log(film3.getAllInfo());
console.log(film3.getUrl());
console.log(film1);
console.log(" ");
console.log(film2);
console.log(" ");
console.log(film3);