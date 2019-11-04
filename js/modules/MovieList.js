(function() {
    function MovieList(moviesArr) {
        this.URL = 'http://localhost:3000/films';
    }

    MovieList.prototype = {
        searchMovieByTitle: function (title) {return window.movieListData.find(item => item.Title === title);
        },
        getAll: function (onSuccess) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send();

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        },
        getById: function (id) {
            return window.movieListData.find(item => item.ID === id);
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


        deleteMovie: function (id) {
            var message = confirm('Remove movie ' + id + ' from the list?');
            if (message) {
                var data = {
                    id: id
                };
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', this.URL);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        },
        addMovie: function (data) {
            var xhr = new XMLHttpRequest();
            var data = {
                movie: data
            };
            xhr.open('POST', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        },
        editMovie: function (id, newData) {
            var data = {
                id: id,
                options: newData
            };

            var xhr = new XMLHttpRequest();
            xhr.open('PUT', this.URL);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));

            xhr.addEventListener('load', function() {
                onSuccess(JSON.parse(xhr.response).list);
            });
        }
    };
    window.movieList = new MovieList();
}());
