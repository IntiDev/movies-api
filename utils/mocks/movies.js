const moviesMock = [
  {
    id: '9feb6d4c-4ed2-4193-a8c7-06d244dfe38b',
    title: 'Zero Theorem, The',
    year: 1985,
    cover: 'http://dummyimage.com/184x160.jpg/ff4444/ffffff',
    description:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2065,
    contentRating: 'PG-13',
    source: 'https://blogspot.com/nam/congue.jpg',
    tags: ['Drama|Thriller', 'Drama|Romance', 'Drama|Romance']
  },
  {
    id: '2f043e55-4ad7-4add-94a8-343fa53411e5',
    title: 'Iron Man 2',
    year: 1993,
    cover: 'http://dummyimage.com/116x223.jpg/5fa2dd/ffffff',
    description:
      'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
    duration: 1890,
    contentRating: 'PG-13',
    source: 'http://wiley.com/praesent.js',
    tags: [
      'Horror|Mystery|Sci-Fi',
      'Comedy|Musical',
      'Adventure|Animation|Children|IMAX'
    ]
  },
  {
    id: 'ef19659e-5684-47f8-b7c5-7d8e9ac126a8',
    title: 'Ballistic: Ecks vs. Sever',
    year: 1985,
    cover: 'http://dummyimage.com/213x176.bmp/cc0000/ffffff',
    description:
      'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
    duration: 2015,
    contentRating: 'R',
    source:
      'https://hostgator.com/non/ligula/pellentesque/ultrices/phasellus/id/sapien.png',
    tags: ['Drama|Fantasy|Romance']
  },
  {
    id: 'a6aac675-d8cd-4b1a-9ed2-dd47fed03ac1',
    title: 'Boy Meets Girl',
    year: 1992,
    cover: 'http://dummyimage.com/202x248.bmp/cc0000/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1996,
    contentRating: 'NC-17',
    source: 'https://imgur.com/mi/sit/amet/lobortis.jsp',
    tags: ['Drama', 'Drama', 'Action|Crime|Drama', 'Crime|Drama', 'Documentary']
  },
  {
    id: '5e2654fa-3e91-4efe-bf6e-e7bdf85b5754',
    title: 'Captain Abu Raed',
    year: 2012,
    cover: 'http://dummyimage.com/204x151.png/5fa2dd/ffffff',
    description:
      'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
    duration: 2070,
    contentRating: 'R',
    source: 'http://zimbio.com/mauris/viverra.html',
    tags: ['Comedy|Romance', 'Crime|Thriller', 'Drama']
  },
  {
    id: '16f6556b-b95c-4f38-bd8d-a18d48b2b789',
    title: 'Yves Saint Laurent',
    year: 1993,
    cover: 'http://dummyimage.com/240x160.jpg/5fa2dd/ffffff',
    description:
      'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1926,
    contentRating: 'NC-17',
    source: 'https://ucoz.ru/amet/nulla/quisque/arcu/libero.aspx',
    tags: ['Drama', 'Action|Crime|Drama', 'Documentary', 'Drama|War', 'Drama']
  },
  {
    id: '7ff326e0-cd3c-4239-9dea-4e8ca0493986',
    title: 'Of Mice and Men',
    year: 2005,
    cover: 'http://dummyimage.com/221x248.png/dddddd/000000',
    description:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    duration: 2040,
    contentRating: 'NC-17',
    source: 'https://xrea.com/faucibus/orci/luctus/et/ultrices.js',
    tags: [
      'Comedy|Drama',
      'Crime|Drama',
      'Comedy|Drama',
      'Drama',
      'Romance|Western'
    ]
  },
  {
    id: '8ac6b541-34cd-4e2d-a30d-f9ce8c09c5fb',
    title: 'Waltzes from Vienna',
    year: 2009,
    cover: 'http://dummyimage.com/137x114.jpg/ff4444/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 1989,
    contentRating: 'PG',
    source: 'http://chron.com/at/nulla/suspendisse/potenti/cras/in.js',
    tags: [
      'Documentary',
      'Comedy|Drama|Fantasy',
      'Action|Adventure|Sci-Fi',
      'Thriller',
      'Comedy|Drama'
    ]
  },
  {
    id: '35c564ac-a42a-41fb-9bc6-a11a6406f54d',
    title: 'Sweeney Todd',
    year: 2002,
    cover: 'http://dummyimage.com/219x123.jpg/5fa2dd/ffffff',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    duration: 2014,
    contentRating: 'NC-17',
    source: 'http://yahoo.co.jp/neque/aenean.png',
    tags: ['Adventure|Sci-Fi', 'Drama', 'Animation|Children', 'Action']
  },
  {
    id: 'd6c73b08-4288-415e-835b-230d47595686',
    title: 'Bone',
    year: 2010,
    cover: 'http://dummyimage.com/238x179.jpg/5fa2dd/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
    duration: 2009,
    contentRating: 'PG',
    source: 'http://senate.gov/rhoncus/dui/vel/sem/sed/sagittis/nam.jsp',
    tags: [
      'Documentary',
      'Documentary',
      'Action|Crime|Thriller',
      'Action|Adventure|Horror|Sci-Fi'
    ]
  },
  {
    id: '8c6de963-7cc5-4dbc-8afb-74715104e79a',
    title: 'Stoker',
    year: 2004,
    cover: 'http://dummyimage.com/142x199.png/cc0000/ffffff',
    description:
      'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
    duration: 1889,
    contentRating: 'G',
    source: 'http://devhub.com/suspendisse/potenti/cras/in/purus/eu/magna.png',
    tags: ['Drama|Horror|Mystery|Thriller', 'Crime|Drama|Film-Noir|Thriller']
  },
  {
    id: 'a8f55c54-c328-4837-8d6b-c3bfb7df7366',
    title: 'Day a Pig Fell Into the Well, The (Daijiga umule pajinnal)',
    year: 1995,
    cover: 'http://dummyimage.com/249x100.bmp/cc0000/ffffff',
    description:
      'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    duration: 2032,
    contentRating: 'PG',
    source: 'https://slideshare.net/in.jpg',
    tags: ['Drama']
  },
  {
    id: 'c14586f7-0cd5-4668-9516-f3c5c77d2614',
    title: 'Tokyo Story (Tôkyô monogatari)',
    year: 2003,
    cover: 'http://dummyimage.com/102x231.bmp/5fa2dd/ffffff',
    description:
      'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 2064,
    contentRating: 'PG',
    source: 'http://naver.com/justo/maecenas/rhoncus/aliquam/lacus.png',
    tags: ['Drama', 'Drama|Sci-Fi', 'Horror', 'Drama|Romance']
  },
  {
    id: '90865e9f-8f77-4b5c-9450-b5291ea8b253',
    title:
      'Dragon Ball Z the Movie: The Tree of Might (Doragon bôru Z 3: Chikyû marugoto chô kessen)',
    year: 2004,
    cover: 'http://dummyimage.com/117x112.bmp/cc0000/ffffff',
    description:
      'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    duration: 1935,
    contentRating: 'G',
    source: 'http://weibo.com/tincidunt/ante/vel/ipsum/praesent.jpg',
    tags: ['Crime|Drama', 'Comedy|Horror', 'Drama']
  },
  {
    id: 'a27b8bb1-4982-46e9-9a45-08b9d1e43825',
    title: 'Transporter 2',
    year: 2011,
    cover: 'http://dummyimage.com/187x209.jpg/dddddd/000000',
    description: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
    duration: 1908,
    contentRating: 'R',
    source: 'http://theatlantic.com/donec/ut/mauris.png',
    tags: [
      'Action|Adventure|Fantasy',
      'Action|Musical|IMAX',
      'Comedy|Drama',
      'Comedy|Fantasy'
    ]
  }
];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
