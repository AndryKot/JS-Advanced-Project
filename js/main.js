var options= {
    ID: '',
    shortCode: '',
    title: 'Joker',
    rating: 8.1,
    releaseYear: 2019,
    country: ['USA'],
    translation: 'origin',
    duration: 122,
    synopsis: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
    producerName: 'Todd Phillips',
    actorsList: [],
    trailerUrl: 'https://www.youtube.com/embed/t433PEQGErc'
};

function Movie(options) {
    this.title = options.title;
    this.rating = options.rating;
    this.releaseYear = options.releaseYear;
    this.country = options.country;
    this.translation = options.translation;
    this.duration = options.duration;
    this.synopsis = options.synopsis;
    this.producerName = options.producerName;
    this.actorsList = options.actorsList;
    this.trailerUrl = options.trailerUrl;


    this.getTitle = function() {
        return this.title;
    }


    this.getRating = function() {
        return this.rating;
    }

    this.getReleaseYear = function() {
        return this.releaseYear;
    }

    this.getCountry = function() {
        return this.country;
    }

    this.getTranslation = function() {
        return this.translation;
    }

    this.getDuration = function() {
        return this.duration;
    }

    this.getSynopsis = function() {
        return this.synopsis;
    }

    this.getProducerName = function() {
        return this.producerName;
    }

    this.getActorsList = function() {
        return this.actorsList;
    }
    this.getTrailerUrl = function () {
        return this.trailerUrl;
    }
}



// console.log(movieTest.getTitle());
//
// console.log(movieTest.getRating());
//
// console.log(movieTest.getReleaseYear());
//
// console.log(movieTest.getCountry());
//
// console.log(movieTest.getTranslation());
//
// console.log(movieTest.getDuration());
//
// console.log(movieTest.getSynopsis());
//
// console.log(movieTest.getProducerName());
//
// console.log(movieTest.getActorsList());
//
// console.log(movieTest.getTrailerUrl());
//



function MovieList(data) {
    this.data = data;

    this.searchMovieByTitle = function() {

    }

    this.sortByTitle = function() {

    }

    this.sortByReleaseYear = function() {

    }

    this.sortByRating = function() {

    }


    this.getByPopular = function() {

    }

    this.getPopularMovies = function() {

    }

    this.getUncomingMovies = function() {

    }

    this.getTopRatedMovies = function() {

    }
}



var movieList = new MovieList();

var film = new Movie(options);

console.log(film);

movieList.searchMovieByTitle();

movieList.sortByTitle();

movieList.sortByReleaseYear();

movieList.sortByRating();

movieList.getByPopular();

movieList.getPopularMovies();

movieList.getUncomingMovies();

movieList.getTopRatedMovies();