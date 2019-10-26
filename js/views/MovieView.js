
(function () {

    function MovieView(film){
        this.film = film;
        this.movie_section = document.createElement('div');
        this.movie_section.setAttribute = ('class', 'movie-section');
        this.movie_section.innerHTML = `<div class="movie-section__poster">
					<a href="show.html" title=${this.film.Title}>
						<img src="${this.film.imgUrl}" alt="movie-poster">
					</a>
				</div>
				<div class="movie-section__info">
					<div class="wrapper">
						<div class="flex">
							<a class="title result" href="show.html">${this.film.Title}</a>
							<span>${this.film.OpeningDate}</span>
						</div>
					</div>
					<p class="overview">${this.film.synopsis}</p>
					<p class="view_more"><a href="show.html" title=${this.film.Title}>More Info</a></p>
				</div>`;

        document.querySelector("body > div > main > div.main-content").insertAdjacentElement("afterbegin",this.movie_section);
    }
    MovieView.prorotype ={
        render : function()
        {
            return  document.querySelector("body > div > main > div.main-content").insertAdjacentElement("afterbegin",this.movie_section);
        }
    };

    window.MovieView = MovieView;
}());
