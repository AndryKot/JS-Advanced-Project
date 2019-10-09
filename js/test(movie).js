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

    this.getMainInformation = function () {
        console.log(this.title +' '+ this.year +' '+ this.description)
    };
    this.checkDateFilm = function () {
        if(this.year <=2010){
            console.log("Film old");
        }else{
            console.log("Film new");
        }
    }
}

var film = new TestMovie(options);
film.getMainInformation();
film.checkDateFilm();