// var option1 =
//     {
//     ID: '1001',
//     shortCode: '',
//     title: 'Joker',
//     rating: 8.1,
//     releaseYear: 2019,
//     country: ['USA'],
//     translation: 'origin',
//     duration: 122,
//     synopsis: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
//     producerName: 'Todd Phillips',
//     actorsList: [],
//     trailerUrl: 'https://www.youtube.com/embed/t433PEQGErc'
//     };
// var option2 ={
//         ID: '1002',
//         shortCode: '',
//         title: 'Spider-Man: Far from Home',
//         rating: 7.6,
//         releaseYear: 2019,
//         country: ['USA'],
//         translation: 'origin',
//         duration: 129,
//         synopsis: 'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
//         producerName: 'Jon Watts',
//         actorsList: ['Tom Holland', 'Jake Gyllenhaal', 'Zendaya'],
//         trailerUrl: 'https://www.youtube.com/embed/DYYtuKyMtY8'
//     };
// var option4 ={
//         ID: '1004',
//         shortCode: '',
//         title: 'It Chapter Two',
//         rating: 7.0,
//         releaseYear: 2019,
//         country: ['USA'],
//         translation: 'origin',
//         duration: 169,
//         synopsis: '27 years after overcoming the malevolent supernatural entity Pennywise, the former members of the Losers\' Club, who have grown up and moved away from Derry, are brought back together by a devastating phone call',
//         producerName: 'Andy Muschietti',
//         actorsList: ['James McAvoy', 'Jessica Chastain', 'Bill Hader'],
//         trailerUrl: 'https://www.youtube.com/embed/zqUopiAYdRg'
//     };
// var option3 ={
//         ID: '1003',
//         shortCode: '',
//         title: 'The Old Man & the Gun ',
//         rating: 7.6,
//         releaseYear: 2018,
//         country: ['USA'],
//         translation: 'origin',
//         duration: 93,
//         synopsis: 'The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.',
//         producerName: 'David Lowery',
//         actorsList: ['Robert Redford', 'Sissy Spacek', 'Casey Affleck'],
//         trailerUrl: 'https://www.youtube.com/embed/d7rlUe-Thvk'
//     };
// var option5 ={
//         ID: '1005',
//         shortCode: '',
//         title: 'The Lion King',
//         rating: 7.1,
//         releaseYear: 2019,
//         country: ['USA'],
//         translation: 'origin',
//         duration: 118,
//         synopsis: 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub\'s arrival. Scar, Mufasa\'s brother—and former heir to the throne—has plans of his own. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile. With help from a curious pair of newfound friends, Simba will have to figure out how to grow up and take back what is rightfully his.',
//         producerName: 'Jon Favreau',
//         actorsList: ['Donald Glover', 'Beyoncé Knowles', 'James Earl Jones'],
//         trailerUrl: 'https://www.youtube.com/embed/4CbLXeGSDxg'
//     };

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
        synopsis: 'The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public.',
        producerName: 'David Lowery',
        actorsList: ['Robert Redford', 'Sissy Spacek', 'Casey Affleck'],
        trailerUrl: 'https://www.youtube.com/embed/d7rlUe-Thvk'
    },
    {
        ID: '1005',
        shortCode: '',
        Title: 'The Lion King',
        imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg',
        Rating: 7.1,
        OpeningDate: 2019,
        country: ['USA'],
        translation: 'origin',
        RunTime: 118,
        synopsis: 'Simba idolises his father, King Mufasa, and takes to heart his own royal destiny. The battle for Pride Rock is ravaged with betrayal, tragedy and drama, ultimately resulting in Simba\'s exile.',
        producerName: 'Jon Favreau',
        actorsList: ['Donald Glover', 'Beyoncé Knowles', 'James Earl Jones'],
        trailerUrl: 'https://www.youtube.com/embed/4CbLXeGSDxg'
    }
];
var movieone = {
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
};
