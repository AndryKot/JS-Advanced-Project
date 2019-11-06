
(function () {

    function MovieView(film){
        this.movie_section = document.createElement('div');
        this.movie_section.className = ('movie-section');

        var title = ` <div class="tile" data-modal-toggle="${film.ID}">
                <div class="movie-section__poster" >
					<a href="show.html" title=${film.Title}>
						<img src="${film.imgUrl}" alt="movie-poster">
					</a>
				</div>
				<div class="movie-section__info">
					<div class="wrapper">
						<div class="flex">
							<a class="title result" href="show.html">${film.Title}</a>
							<span>${film.OpeningDate}</span>
						</div>
					</div>
					<p class="overview">${film.synopsis.slice(0, ((film.synopsis.slice(0, 200)).lastIndexOf(' '))) + " ..."}</p>
					<p class="view_more"><a href="show.html" title=${film.Title}>More Info</a></p>
				</div>
         </div>`;

        this.movie_section.insertAdjacentElement("beforeend",title);
    }
    MovieView.prorotype.getElement = function() {
            return this.movie_section;
        };
    window.MovieView = MovieView;
}());

