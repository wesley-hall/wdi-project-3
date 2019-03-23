Books.create([

  {
    title: 'Change We Can Believe in',
    authors: [ 'Barack Obama'],
    image: 'https://books.google.com/books/content?id=pK5ALFeVVcMC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
    fiction: false,
    genre: genres[1],
    description: 'Change We Can Believe In outlines Barack Obamas vision for America and its standing in the world.In these pages you will find bold and specific ideas about how Barack Obama plans to fix the ailing American economy and strengthen its middle class, make health care affordable for all, achieve energy independence, and keep America safe in a dangerous world. Change We Can Believe In asks us not just to believe in Barack Obamas ability to bring change to Washington, it asks us to believe in the ability of each of us to change the world',
    rating: [
      { rating: 4, user: users[0]}
    ],
    review: [
      {
        review: 'I had originally planned to give this book four stars for the outline of Obama\'s plan. But, in addition to the plan, seven of Obama\'s speeches are included at the back of the book. Among them is his "A More Perfect Union" speech that he gave in Philadelphia on March 18, 2008, where he confronted the issue of race in America. This speech alone is more than worthy of an additional star in my rating.',
        user: users[0]
      }
    ],
    owner: users[0],
    returnDate: new Date(),
    borrower: users[2]
  },
  {
    title: 'The Joy of Cooking',
    authors: [ 'Irma S. Rombauer'],
    image: 'https://books.google.com/books/content?id=MFWFeJ5t8zcC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
    fiction: true,
    genre: genres[0],
    description: 'In 1931, Irma S. Rombauer, a recent widow, took her life savings and self-published a cookbook that she hoped might support her family. Little did she know that her book would go on to become Americas most beloved cooking companion.',
    rating: [
      { rating: 4, user: users[2]}
    ],
    review: [
      {
        review: 'What do I like most about The Joy of Cooking? It is fairly encyclopedic, covering about as broad a range of cooking topics as it can; while most of the recipes are from the Western tradition, it also dips into some less traditional preparations (e.g., ceviche). The book does not assume that you know anything about cooking -- not sure what a "dash" is? You can look up an explanation for that. What\'s the difference between a filet and a cutlet? It explains that, too. (HINT: they\'re basically synonymous.) It has a great index, is organized well, and has recipes to cover almost any occasion and varying degrees of culinary sophistication.',
        user: users[2]
      }
    ],
    owner: 'Sumisuperstar',
    returnDate: new Date()
  },
  {
    title: 'Mansfield Park',
    authors: [ 'Jane Austen'],
    image: 'http://books.google.com/books/content?id=yS4JAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
    fiction: false,
    genre: genres[3],
    description: 'Frances O\'Connor, born into a poor family, is sent away to live with wealthy uncle Sir Thomas (Harold Pinter), his wife (Lindsay Duncan) and their four children, where she\'ll be brought up for a proper introduction to society. She is treated unfavorably by her relatives, except for her cousin Edmund (Jonny Lee Miller), whom she grows fond of. However, Fanny\'s life is thrown into disarray with the arrival of worldly Mary Crawford (Embeth Davidtz) and her brother Henry (Alessandro Nivola).',
    rating: [
      { rating: 4, user: users[2]}
    ],
    review: [
      {
        review: `I can not but think good horsemanship has a great deal to do with the mind." Jane Austen always did a great job of planting ridiculous declarations in the mouths of characters she wished to discredit. Character was her strong suit and there\'s some good\'uns here in.

        Within Mansfield Park there are characterizations so delicate and actions of importance utterly unassuming. Some seem meaningless in their modesty. Excellent work by a diligent author. Dangerous pitfalls for the casual reader.`,
        user: users[2]
      }
    ],
    owner: 'Sumisuperstar',
    returnDate: new Date()
  },

  {
    title : 'Dragons of Autumn Twilight',
    authors : [ 'Margaret Weis', 'Tracy Hickman'],
    image: 'http://books.google.com/books/content?id=tFuQQQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    fiction: true,
    genre: genres[4],
    description: 'The title that started the entire Dragonlance phenomenon is now being released in a trade hardcover edition for the first time, the first in a series of the core works by Weis and Hickman.',
    rating: [
      { rating: 4, user: users[2]}
    ],
    review: [
      {
        review: `'I can not but think good horsemanship has a great deal to do with the mind." Jane Austen always did a great job of planting ridiculous declarations in the mouths of characters she wished to discredit. Character was her strong suit and there\'s some good\'uns here in.

        Within Mansfield Park there are characterizations so delicate and actions of importance utterly unassuming. Some seem meaningless in their modesty. Excellent work by a diligent author. Dangerous pitfalls for the casual reader.'`,
        user: users[2]
      }
    ],
    owner: 'Sumisuperstar',
    returnDate: new Date()
    },
