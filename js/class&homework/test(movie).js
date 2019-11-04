'use strict';
// var options= {
//     url: 'youtube.com',
//     title: 'film',
//     image: 'image.com',
//     description: 'films of the film',
//     actors: 'Big Small, Thin Tall, Blam Blam',
//     contry: 'Ukraine',
//     year: 2020
// };
//
// function TestMovie(options) {
//     this.url = options.url;
//     this.title = options.title;
//     this.image = options.image;
//     this.description = options.description;
//     this.actors = options.actors;
//     this.contry = options.contry;
//     this.year = options.year;
// };
//   TestMovie.prototype = {
//       getAllInfo : function () {
//           return 'Result:    ' + this.title + '  ' + this.year + '  ' + this.contry + '  '  + this.description;
//       },
//       getUrl: function () {
//           return this.url;
//       }
//   };
// var options1= {
//     url: 'ex-fs.com',
//     title: 'kino',
//     image: 'image.com',
//     description: 'films of the film-films of the film-films of the film-films of the film',
//     actors: 'Bogdan Small, Timur Tall, Vlad Blam',
//     contry: 'Belgium',
//     year: 2010
// };
//   function SecMovie() {
//
//       TestMovie.apply(this, arguments);
//       this.language= 'Ukrainian';
//       // this.title = options1.title;
//       // this.image = options1.image;
//       // this.description = options1.description;
//       // this.actors = options1.actors;
//       // this.contry = options1.contry;
//       // this.year = options1.year;
//
//   }
//   SecMovie.prototype = Object.create(TestMovie.prototype);
//   SecMovie.prototype.constructor = SecMovie;
// var options2= {
//     url: 'online-life.com',
//     title: 'serial',
//     image: 'image.com',
//     description: 'dfjkhkjflajfhklahf asjflashflaksf laflaksjfhlahflashf laf',
//     actors: 'Small, Timur, Vlad, Blam, Jack, Jones',
//     contry: 'France',
//     year: 2012
// };
// function ThirdMovie() {
//     TestMovie.apply(this, arguments);
//     this.level = 'Hight LEVEL';
//     this.language= 'Ukrainian';
//     // this.url = options2.url;
//     // this.title = options2.title;
//     // this.image = options2.image;
//     // this.description = options2.description;
//     // this.actors = options2.actors;
//     // this.contry = options2.contry;
//     // this.year = options2.year;
// }
// ThirdMovie.prototype = Object.create(TestMovie.prototype);
// ThirdMovie.prototype.constructor = ThirdMovie;
//
//
// var options3= {
//     url: 'hd-video.box',
//     title: 'HD',
//     image: 'image.com',
//     description: 'qwerty qweryt qweryt qweuye qweutuyet ',
//     actors: 'roma , vasya, petya luda',
//     contry: 'Ukraine',
//     year: 1990
// };
// function FourMovie() {
//     TestMovie.apply(this, arguments);
//     this.level = 'Hight LEVEL';
//     this.language= 'Ukrainian';
//     this.star = 55;
//     // this.url = options3.url;
//     // this.title = options3.title;
//     // this.image = options3.image;
//     // this.description = options3.description;
//     // this.actors = options3.actors;
//     // this.contry = options3.contry;
//     // this.year = options3.year;
// }
// FourMovie.prototype = Object.create(TestMovie.prototype);
// FourMovie.prototype.constructor = FourMovie;
//
// var film1 = new SecMovie(options1);
// var film2 = new ThirdMovie(options2);
// var film3 = new FourMovie(options3);
//
//
// console.log(film1.getAllInfo());
// console.log(film1.getUrl());
// console.log(film2.getAllInfo());
// console.log(film2.getUrl());
// console.log(film3.getAllInfo());
// console.log(film3.getUrl());
// console.log(film1);
// console.log(" ");
// console.log(film2);
// console.log(" ");
// console.log(film3);
//
//
// function Movie(movie) {
//     this.title = movie.title;
//     this.originalTitle = movie.originalTitle;
//     this.rating = movie.rating;
//     this.releaseYear = movie.releaseYear;
//     this.country = movie.country;
//     this.genre = movie.genre;
//     this.quality = movie.quality;
//     this.translation = movie.translation;
//     this.duration = movie.duration;
//     this.synopsis = movie.synopsis;
//     this.producerName = movie.producerName;
//     this.actorsList = movie.actorsList;
// }
//
//
//
// Movie.prototype = {
//     getTitle: function() {
//         return this.title;
//     },
//
//     getOriginalTitle: function() {
//         return this.originalTitle;
//     },
//
//     getRating: function() {
//         return this.rating;
//     },
//
//     getReleaseYear: function() {
//         return this.releaseYear;
//     },
//
//     getCountry: function() {
//         return this.country;
//     },
//
//     getGenre: function() {
//         return this.genre;
//     },
//
//     getQuality: function() {
//         return this.quality;
//     },
//
//     getTranslation: function() {
//         return this.translation;
//     },
//
//     getDuration: function() {
//         return this.duration;
//     },
//
//     getSynopsis: function() {
//         return this.synopsis;
//     },
//
//     getProducerName: function() {
//         return this.producerName;
//     },
//
//     getActorsList: function() {
//         return this.actorsList;
//     }
// }
//
//
//
// var movie1 = new Movie ({
//     ID: '',
//     shortCode: '',
//     title: 'Побег из сумасшедшего дома: История Нелли Блай',
//     originalTitle: 'Escaping the Madhouse: The Nellie Bly Story',
//     rating: 8,
//     releaseYear: 2019,
//     country: ['США'],
//     genre: ['триллер'],
//     quality: 'HD',
//     translation: 'Любительский двухголосый',
//     duration: 88,
//     synopsis: 'Действия фильма происходят в конце девятнадцатого столетия. На небольшом острове Блэквелл расположена психиатрическая лечебница, выбраться из которой просто невозможно. Именно сюда и попала молодая девушка Нелли Блай. Ее нашли на улицах Нью-Йорка напуганную и растерянную. Все что она помнила — только свое имя. Девушку привезли в клинику, где врачи должны оказать ей квалифицированную помощь. По всем улицам развесили ее фотографию, надеясь на то, что ее узнает кто-нибудь из родственников. В клинику даже приезжали разные люди, но выходили оттуда без нее. Нелли пыталась доказать врачам, что она полностью здорова, но у них было другое мнение на этот счет. Ей было назначено лечение, которое больше похоже на пытки...',
//     producerName: 'Карен Монкрифф',
//     actorsList: ['Кристина Риччи', 'Джудит Лайт', 'Джош Боуман', 'Аня Савчич', 'Никки Дювал', 'Лорен Кокрейн', 'Кэтлин Галлахер', 'Джим Кирби'],
//     trailerUrl: ''
// });
//
//
//
// console.log(movie1.getTitle());
//
// console.log(movie1.getOriginalTitle());
//
// console.log(movie1.getRating());
//
// console.log(movie1.getReleaseYear());
//
// console.log(movie1.getCountry());
//
// console.log(movie1.getGenre());
//
// console.log(movie1.getQuality());
//
// console.log(movie1.getTranslation());
//
// console.log(movie1.getDuration());
//
// console.log(movie1.getSynopsis());
//
// console.log(movie1.getProducerName());
//
// console.log(movie1.getActorsList());
//
//
//
// var movie2 = new Movie ({
//     ID: '',
//     shortCode: '',
//     title: 'Джуди',
//     originalTitle: 'Judy',
//     rating: 6,
//     releaseYear: 2019,
//     country: ['Великобритания'],
//     genre: ['биографический', 'драма', 'мюзикл'],
//     quality: 'TS',
//     translation: 'Профессиональный одноголосый',
//     duration: 118,
//     synopsis: 'Фильм рассказывает о последних концертах голливудской звезды Джуди Гарлэнд в Лондоне в 1968 году. Звезда «Волшебника страны Оз» готовится к шоу, ссорится с руководством, очаровывает музыкантов. Это хрупкая женщина, которую истощили годы тяжелой работы и тоска по детям.',
//     producerName: 'Руперт Гулд',
//     actorsList: ['Рене Зеллвегер', 'Руфус Сьюэлл', 'Майкл Гэмбон', 'Финн Уиттрок', 'Джесси Бакли', 'Белла Рамзи', 'Энди Найман', 'Джон Даглиш', 'Джемма-Ли Деверё', 'Фенелла Вулгар', 'Фил Данстер', 'Диана Александра Покол'],
//     trailerUrl: ''
// });
//
//
//
// var movie3 = new Movie ({
//     ID: '',
//     shortCode: '',
//     title: 'Солнцестояние',
//     originalTitle: 'Midsommar',
//     rating: 5,
//     releaseYear: 2019,
//     country: ['США', 'Швеция'],
//     genre: ['драма', 'мистика', 'триллер', 'ужасы'],
//     quality: 'HD',
//     translation: 'Дублированный',
//     duration: 147,
//     synopsis: 'Сюжет посвящён истории влюблённой пары, которая отправляется погостить к своим друзьям в отдалённый небольшой городок в Швеции. Там местные жители проводят традиционный скандинавский сезонный обряд, отмечая праздник летнего солнцестояния, Мидсоммар. И хотя всё вокруг обещает героям идиллический отдых в живописных местах, очень скоро мирное празднование сменится настоящим кошмаром, поскольку милые и добрые обитатели шведской деревеньки окажутся служителями кровавого языческого культа.',
//     producerName: 'Ари Астер',
//     actorsList: ['Флоренс Пью', 'Джек Рейнор', 'Уилл Поултер', 'Уильям Джексон Харпер', 'Вильхельм Бломгрен', 'Эллора Торчия', 'Арчи Мадекве', 'Лив Мьёнес', 'Анна Острём', 'Изабель Грилл', 'Ребекка Джонстон', 'Хампус Халлберг', 'Хенрик Норлен'],
//     trailerUrl: ''
// });
//
//
//
// var movie4 = new Movie ({
//     ID: '',
//     shortCode: '',
//     title: 'Дэдвуд',
//     originalTitle: 'Deadwood',
//     rating: 6,
//     releaseYear: 2019,
//     country: ['США'],
//     genre: ['вестерн'],
//     quality: 'HD',
//     translation: 'Любительский многоголосый',
//     duration: 130,
//     synopsis: 'Некогда забытое и заброшенное поселение получает статус города, однако жизнь и привычный уклад здесь совершенно не изменились. Власти умышленно стимулируют безнравственность, картина «Дэдвуд» покажет, долго ли будет царить беззаконие в городке, неужели искоренить, зло не получится. Поведение жителей нельзя назвать нравственным, народ погряз в разврате, безудержном  пьянстве и желании мгновенно разбогатеть за чужой счет. В провинции имеет место незаконная деятельность, обыватели на грани разорения, почти полная вседозволенность губит души несчастных, нравственное разложение ведет к уничтожению целого поколения некому исправить или изменить бесконечное падение, неужели город вновь станет маленьким поселком, где будут проживать остатки, мелких падших глупцов?',
//     producerName: 'Дэниел Минахан',
//     actorsList: ['Тимоти Олифант', 'Иэн Макшейн', 'Молли Паркер', 'Пола Малкомсон', 'У. Эрл Браун', 'Дэйтон Калли', 'Ким Диккенс', 'Брэд Дуриф', 'Анна Ганн', 'Джон Хоукс', 'Леон Риппи', 'Уильям Сандерсон', 'Робин Вайгерт', 'Брент Секстон', 'Шон Бриджерс', 'Джеральд Макрейни', 'Кеон Янг'],
//     trailerUrl: ''
// });
//
//
//
// var movie5 = new Movie ({
//     ID: '',
//     shortCode: '',
//     title: 'Король Лев',
//     originalTitle: 'The Lion King',
//     rating: 8,
//     releaseYear: 2019,
//     country: ['США'],
//     genre: ['драма', 'мюзикл', 'приключения', 'семейный'],
//     quality: 'TS',
//     translation: 'Дублированный',
//     duration: 118,
//     synopsis: 'История об отважном львенке по имени Симба, покорившая сердца миллионов людей по всему миру, возвращается на большие экраны в новом зрелищном художественном фильме Disney «Король Лев»! Знакомые с детства герои взрослеют, влюбляются, познают себя и окружающий мир, совершают ошибки и делают правильный выбор. Благодаря уникальным цифровым технологиям теперь их приключения выглядят максимально реалистично. Джон Фавро дарит зрителям возможность разглядеть богатство красок бескрайней саванны, соприкоснуться с величием дикой природы и ощутить себя частью этого невероятного мира.',
//     producerName: 'Джон Фавро',
//     actorsList: ['Дональд Гловер', 'Сет Роген', 'Чиветел Эджиофор', 'Элфри Вудард', 'Билли Айкнер', 'Джон Кани', 'Джон Оливер', 'Бейонсе Ноулз-Картер', 'Джеймс Эрл Джонс'],
//     trailerUrl: ''
// });
//
//
//
//
//
// function MovieList(list) {
//     this.list = list;
// }
//
//
//
// MovieList.prototype = {
//     searchMovieByTitle: function() {
//
//     },
//
//     searchMovieByOriginalTitle: function() {
//
//     },
//
//     sortByAlphabet: function() {
//         return this.list.sort((a, b) => a.title > b.title ? 1 : -1);
//     },
//
//     sortByReleaseYear: function() {
//         return this.list.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1);
//     },
//
//     sortByRating: function() {
//         return this.list.sort((a, b) => a.rating < b.rating ? 1 : -1);
//     },
//
//     getSameGenreMovies: function() {
//
//     },
//
//     getNewMovies: function() {
//
//     },
//
//     getHighQualityMovies: function() {
//
//     },
//
//     getTopRatingMovies: function() {
//
//     },
//
//     deleteMovie: function(index, quantity) {
//         return this.list.splice(index, quantity);
//     },
//
//     addMovie: function(movie) {
//         return this.list.push(movie);
//     }
// }
//
//
//
// var movieList = new MovieList([movie1, movie2, movie3, movie4, movie5]);
//
//
// console.log("----");
// console.log(movieList.sortByAlphabet());
// console.log("----");
// // console.log(movieList.sortByReleaseYear());
//
// // console.log(movieList.sortByRating());
//
//
//
// // movieList.searchMovieByTitle();
//
// // movieList.searchMovieByOriginalTitle();
//
// // movieList.getSameGenreMovies();
//
// // movieList.getNewMovies();
//
// // movieList.getHighQualityMovies();
//
// // movieList.getTopRatingMovies();
//
// // movieList.deleteMovie();
//
// // movieList.addMovie();
//-Lesson 4----------------------------

function showThis() {
    console.log(this)
}
showThis();
//-----------------------------------------
// var user ={
//     name:'Max',
//     getName:function () {
//         return this.name;
//     }
// };
// console.log(user.getName());
//------------------------------------------
// var user= {
//     name: 'Max',
//     getName: function () {
//         return this.name;
//     }
// };
// var user2 ={
//     name:'Dima'
// };
// console.log(user.getName.call(user2));
//-------------------------------------------
// function getName() {
//     return this;
// }
// var user= {
//     name: 'Max'
// };
// var user2 ={
//     name:'Dima'
// };
// console.log(getName.call(user));
//--------------------------------------------
// function getName(message) {
//     return 'Hello' + message + this.name;
// }
// var user= {
//     name: 'Max'
// };
// var user2 ={
//     name:'Dima'
// };
// console.log(getName.call(user, ' my dier friend '));
//
// var numbers =[3,5,6,4,8,9,7];
// console.log(Math.max.apply(null, numbers));
//
// function Human(name, age, role) {
//     this.name = name;
//     this.age = age;
//
// }
// function User(role) {
//     Human.apply(this, arguments)
//     this.role =role;
// }
//-----------------------------------------------------
// function getName(message, second) {
//     return 'Hello' + message + this.name + second;
// }
// var user= {
//     name: 'Max'
// };
//
// var user2 = {
//     name:'Dima'
// };
//
// var contextWithUserFn=getName.bind(user, ' first arg ');
// // var contextWithUserFn2=getName.bind(user2);
//  var newFirstFn = getName.bind(user2, ' second arg ' )
// console.log(contextWithUserFn());
// console.log('');
// contextWithUserFn.call(user2);
// console.log(newFirstFn());
// //----------------------------------------------------
//
//
// // forEach, map, some, filter, reduced HOMEWORK
//
//
var moviesArr =[
    {
        ID: '1001',
        shortCode: '',
        Title: 'Joker',
        imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        Rating: 8.1,
        OpeningDate: 2019,
        country: ['USA'],
        translation: 'origin',
        RunTime: 122,
        synopsis: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
        producerName: 'Todd Phillips',
        actorsList: [],
        trailerUrl: 'https://www.youtube.com/embed/t433PEQGErc'
    },
    {
        ID: '1002',
        shortCode: '',
        Title: 'Spider-Man: Far from Home',
        imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/lcq8dVxeeOqHvvgcte707K0KVx5.jpg',
        Rating: 7.6,
        OpeningDate: 2019,
        country: ['USA'],
        translation: 'origin',
        RunTime: 129,
        synopsis: 'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
        producerName: 'Jon Watts',
        actorsList: ['Tom Holland', 'Jake Gyllenhaal', 'Zendaya'],
        trailerUrl: 'https://www.youtube.com/embed/DYYtuKyMtY8'
    },
    {
        ID: '1004',
        shortCode: '',
        Title: 'It Chapter Two',
        imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg',
        Rating: 7.0,
        OpeningDate: 2019,
        country: ['USA'],
        translation: 'origin',
        RunTime: 169,
        synopsis: '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call',
        producerName: 'Andy Muschietti',
        actorsList: ['James McAvoy', 'Jessica Chastain', 'Bill Hader'],
        trailerUrl: 'https://www.youtube.com/embed/zqUopiAYdRg'
    },
    {
        ID: '1003',
        shortCode: '',
        Title: 'The Old Man & the Gun ',
        imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zfE0R94v1E8cuKAerbskfD3VfUt.jpg',
        Rating: 7.6,
        OpeningDate: 2018,
        country: ['USA'],
        translation: 'origin',
        RunTime: 93,
        synopsis: 'The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.',
        producerName: 'David Lowery',
        actorsList: ['Robert Redford', 'Sissy Spacek', 'Casey Affleck'],
        trailerUrl: 'https://www.youtube.com/embed/d7rlUe-Thvk'
    },
    {
        ID: '1005',
        shortCode: '',
        Title: 'The Lion King',
        imgUrl: '',
        Rating: 7.1,
        OpeningDate: 2019,
        country: ['USA'],
        translation: 'origin',
        RunTime: 118,
        synopsis: 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.',
        producerName: 'Jon Favreau',
        actorsList: ['Donald Glover', 'Beyoncé Knowles', 'James Earl Jones'],
        trailerUrl: 'https://www.youtube.com/embed/4CbLXeGSDxg'
    }
];

function Movie(movie) {
    this.id = movie.ID ;
    this.title = movie.Title;
    this.rating = movie.Rating;
    this.releaseYear = movie.OpeningDate;
    this.genre = movie.GenreId;
    this.country = movie.country;
    this.duration = movie.RunTime;
    this.synopsis = movie.synopsis;
    this.producerName = movie.producerName;
    this.actorsList = movie.actorsList;
    this.trailerUrl = movie.trailerUrl;
    this.imgUrl = movie.imgUrl;
}
Movie.prototype ={
    add: function (key, value) {
        this[key] = value;
    },
    edit: function (key, value) {
        this[key] = value;
    },
    remove: function (key) {
        delete this[key];
    }
};





function MovieList(moviesArr) {
    this.list = moviesArr.map(function (el) {
        return new Movie(el);
    });
}
MovieList.prototype = {
    searchMovieById: function(id) {
        for (var i=0; i < this.list.length; i++){
            if (this.list[i].id === id){
                console.log(('You were looking for: ' + this.list[i].title));
            }
        }
    },
    searchMovieByTitle: function(title) {
        for (var i=0; i < this.list.length; i++){
            if (this.list[i].title === title){
                console.log(('You were looking for: ' + this.list[i].title)+ ' ' + this.list[i].trailerUrl + ' ' + this.list[i].duration);
            }
        }
    },
    sortByTitle: function() {
        return this.list.sort((a, b) => a.title > b.title ? 1 : -1);
    },
    sortByReleaseYear: function() {
        return this.list.sort((a, b) => a.releaseYear < b.releaseYear ? 1 : -1);
    },
    sortByRating: function() {
        return this.list.sort((a, b) => a.rating < b.rating ? 1 : -1);
    },

    seeList: function (){
        for (var i = 0; i < this.list.length; i++) {
            console.log (this.list[i]);
        }
    },
    deleteMovie: function(id) {
        for (var i = 0; i < this.list.length; i++){
            if (this.list[i].id === id){
                this.list.splice(i, 1)
            }
        }
        // return this.list.splice(id,1);
    },

    addMovie: function(movie) {
        return this.list.push(movie);
    }
};


var movieList = new MovieList(moviesArr);

// movieList.searchMovieByTitle("ПОЛІНА І ТАЄМНИЦЯ КІНОСТУДІЇ");
// movieList.searchMovieById("HO00000205");
//movieList.seeList();
// movieList.deleteMovie("HO00000283");
// movieList.addMovie(testmovie);
// movieList.seeList();
// var film = new Movie(options);

// console.log(film);
// console.log(film.getTrailerUrl());
// console.log("============");
// console.log(movieList.sortByTitle());
// console.log("============");

// console.log("############");
//console.log(movieList.sortByReleaseYear());
// console.log("############");

// console.log("------------");
// console.log(movieList.sortByRating());
// console.log("------------");

// movieList.getByPopular();
//
// movieList.getPopularMovies();
//
// movieList.getUncomingMovies();
//
// movieList.getTopRatedMovies();


function MovieView(movie) {
    this.movie = movie;
    this.movie_section = document.createElement('div');
    this.movie_section.className ='movie-section';
    this.movie_section.innerHTML =
        `<div class="movie-section__poster">
            <a href="show.html" title=${this.title}>
                <img src="${this.imgUrl}" alt="movie-poster">
            </a>
        </div>
        <div class="movie-section__info">
            <div class="wrapper">
                <div class="flex">
                    <a class="title result" href="show.html">${this.title}</a>
                    <span>${this.releaseYear}</span>
                </div>
            </div>
            <p class="overview">${this.synopsis}</p>
        </div>`;

}


MovieView.prototype = {
    getElement: function() {
        return this.movie_section;
    },
    render: function() {
        return this.movie_section;
    }
};


function MovieListView(moviesArr) {
    this.movies = moviesArr;
    this.moviesContainer = document.createElement('div');
    this.moviesContainer.setAttribute('class', 'main-contain');
}

MovieListView.prototype = {
    render: function() {
        this.movies.forEach(movie => {
            var film = new MovieView(movie);
            console.log(film);
            this.moviesContainer.append(film.getElement());
            return this.moviesContainer;

        });
    }
};
//document.body.movielistview = MovieListView.render();
var listFilms = new MovieListView(moviesArr);
//document.body.append(listFilms.render());
listFilms.render();

