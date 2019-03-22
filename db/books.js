Books.create([
  {
      title: 'King Lear',
      authors: [ 'Rene Weis', 'William Shakespeare'],
      image: 'https://books.google.com/books/content?id=cWJcAgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
      fiction: true,
      genre: genres[2],
      description: 'Lear, King of Britain, in an attempt to avoid future strife, divides his kingdom between his three daughters. ... He convinces Gloucester that Edgar is plotting against him, and then persuades his brother to flee from his fathers anger. To avoid arrest, Edgar disguises himself as a mad beggar, Poor Tom.',
      rating: [
        { rating: 3, user: users[1]}
      ],
      review: [
        {
          review: 'Why does this masterpiece--yes, a true masterpiece--continue to collect dust on library shelves? I\'m almost finished not reading but studying its verbal tapestry, so intricately woven with the emotions of its characters. The play holds together, where no thread can be pulled from it. King Lear is Shakespeare\'s best play. Perhaps this work is neglected, because it requires thinking on the reader\'s part. Sad--so sad...',
          user: users[0],
        }
      ],
      owner: users[0],
      returnDate: new Date(),
      borrower: users[2]

    },

    {
      title: 'Change We Can Believe in',
      authors: [ 'Barack Obama'],
      image: 'https://books.google.com/books/content?id=pK5ALFeVVcMC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
      fiction: false,
      genre: genres[0],
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
    }



  //   {
  //   title: 'Change We Can Believe in',
  //   authors: [ 'Barack Obama'],
  //   image: `https://books.google.com/books/content?id=pK5ALFeVVcMC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api`,
  //   genre: 'biography',
  //   fiction: false,
  //   description: 'Change We Can Believe In outlines Barack Obamas vision for America and its standing in the world.In these pages you will find bold and specific ideas about how Barack Obama plans to fix the ailing American economy and strengthen its middle class, make health care affordable for all, achieve energy independence, and keep America safe in a dangerous world. Change We Can Believe In asks us not just to believe in Barack Obamas ability to bring change to Washington, it asks us to believe in the ability of each of us to change the world',
  //   rating: 4,
  //   review: `I had originally planned to give this book four stars for the outline of Obama's plan. But, in addition to the plan, seven of Obama's speeches are included at the back of the book. Among them is his "A More Perfect Union" speech that he gave in Philadelphia on March 18, 2008, where he confronted the issue of race in America. This speech alone is more than worthy of an additional star in my rating.`,
  //   owner: 'Obama4ever',
  //   returnDate: '2018-09-06T12:48:25.776Z',
  //   borrower: 'partykiller'
  // },
  {

    title: 'The Joy of Cooking',
    authors: [ 'Irma S. Rombauer'],
    image: 'https://books.google.com/books/content?id=MFWFeJ5t8zcC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
    genre: 'fantasy',
    fiction: true,
    rating: 5,
    review: `The day I found out my grandmother was dying was the day I got this book.

    She was sick and we were both very hopeful that she would get better. She was lying on the couch in the living room and asked me to boil her a potato. I, being 19, had NO idea how to boil a potato! But I did not want to bother her about it - so I went into the kitchen and started up the pot of water.

    Not only did I ruin that cute little potato ... but I saw my grandmother lose it!! She came into the kitchen and saw the whole potato (not peeled or cut) hanging out in the pot and lost it. She started crying... How can I leave you if you can't even boil a potato?!

    My grandfather happened to arrive home at that moment. He did a big sigh when he heard and saw the commotion. My poor frail grandma rolling around on the stool (too weak to stand up even), throwing pans around as she was trying to find another pot to make her potato in. He got her calmed down and fixed her another potato. But before it was even boiled she made him go out to the store "right this minute" and buy me the joy of cooking.

    She knew that she would not always be in the kitchen with me to help me cook -- so she got me a GREAT back up.`,

    description: 'In 1931, Irma S. Rombauer, a recent widow, took her life savings and self-published a cookbook that she hoped might support her family. Little did she know that her book would go on to become Americas most beloved cooking companion. Thus was born the bestselling Joy of Cooking, and with it, a culinary revolution that continues to this day. In Stand Facing the Stove, Anne Mendelson presents a richly detailed biographical portrait of the two remarkable forces behind Joy -- Irma S. Rombauer and her daughter, Marion Rombauer Becker -- shedding new light on the classic kitchen mainstay and on the history of American cooking. Mendelson weaves together three fascinating stories: the affectionate though often difficult relationship between Joy\'s original creator, Irma, and her eventual coauthor, Marion; the bitter dealings between the Rombauers and their publisher, Bobbs-Merrill (at whose hands the Rombauers likely lost millions of dollars); and the enormous cultural impact of the beloved book that Irma and Marion devoted their lives to refining, edition after edition. Featuring an accessible new recipe format and an engaging voice that inspired home cooks, Joy changed the face of American cookbooks. Stand Facing the Stove offers an intimate look at the women behind this culinary bible and provides a marvelous portrait of twentieth-century America as seen through the kitchen window.',
    owner: 'Sumisuperstar',
    returnDate: '2018-09-06T12:48:25.776Z',
    borrower: 'Derooroo'
  },


{
title: Mansfield Park,
authors: [ 'Jane Austen'],
availability: true,
returndate: date,
description: `'Fanny (Frances O'Connor), born into a poor family, is sent away to live with wealthy uncle Sir Thomas (Harold Pinter), his wife (Lindsay Duncan) and their four children, where she'll be brought up for a proper introduction to society. She is treated unfavorably by her relatives, except for her cousin Edmund (Jonny Lee Miller), whom she grows fond of. However, Fanny's life is thrown into disarray with the arrival of worldly Mary Crawford (Embeth Davidtz) and her brother Henry (Alessandro Nivola).'`,
image: 'http://books.google.com/books/content?id=yS4JAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
location: 'London',
reviews: [4, 4, 5, 3],
fiction: true,
  genre: 'romance'
},
{
title : 'Dragons of Autumn Twilight',
authors : [ 'Margaret Weis', 'Tracy Hickman'],
availability: true,
returndate: date,
description: 'The title that started the entire Dragonlance phenomenon is now being released in a trade hardcover edition for the first time, the first in a series of the core works by Weis and Hickman.',
image: 'http://books.google.com/books/content?id=tFuQQQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
location: 'London',
reviews: [4, 4],
fiction: false, 
genre: 'fantasy'
}
])
