(function() {
    function MovieList(moviesArr) {
        this.list = moviesArr.map(function (el) {
            return new Movie(el);
        });
    }

    MovieList.prototype = {
        searchMovieById: function (id) {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].id === id) {
                    console.log(('You were looking for: ' + this.list[i].title));
                }
            }
        },
        searchMovieByTitle: function (title) {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].title === title) {
                    console.log(('You were looking for: ' + this.list[i].title) + ' ' + this.list[i].trailerUrl + ' ' + this.list[i].duration);
                }
            }
        },
        sortByTitle: function () {
            return this.list.sort((a, b) => a.title > b.title ? 1 : -1);
        },
        sortByReleaseYear: function () {
            return this.list.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1);
        },
        sortByRating: function () {
            return this.list.sort((a, b) => a.rating < b.rating ? 1 : -1);
        },
        getById: function (id) {
            return this.list.find(function (item){
                return item.id === id;
            });
        },

        seeList: function () {
            for (var i = 0; i < this.list.length; i++) {
                console.log(this.list[i]);
            }
        },
        deleteMovie: function (id) {
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].id === id) {
                    this.list.splice(i, 1)
                }
            }
            // return this.list.splice(id,1);
        },

        addMovie: function (movie) {
            return this.list.push(movie);
        },
        render: function () {
            this.list.map(function (el) {
                return this.list[el].title + ', ';
            });
        }
    };
    window.MovieList = MovieList;
}());
