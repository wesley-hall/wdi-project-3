// seeds.js
const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')
const Books = require('../models/book')
const BookGenre = require('../models/bookGenre')
const User = require('../models/user')
const Promise = require('bluebird')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  const promiseArray = [
    User.create([
      {
        username: 'Richierich',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manA.jpg',
        email: 'rich@email',
        password: 'password',
        passwordConfirmation: 'password',
        libraryName: 'Rich\'s library',
        location: {
          lat: 51.5,
          lng: 49
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryA.jpg',
        libraryDescription: 'A library that\'s doubled as a dining room, where I could be surrounded by the books I love'
      },
      {
        username: 'LumberJack',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manB.jpg',
        email: 'jack@email',
        password: 'password',
        passwordConfirmation: 'password',
        libraryName: 'jacklibrary',
        location: {
          lat: 51.5 ,
          lng: 49
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryB.jpg',
        libraryDescription: 'Collection of books slightly chewed up by cats, but still functional'
      },
      {
        username: 'Sumimi',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyA.jpg',
        email: 'sumi@email',
        password: 'password',
        passwordConfirmation: 'password',
        libraryName: 'Sumilibrary',
        location: {
          lat: 51.5 ,
          lng: 49
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryC.jpg',
        libraryDescription: 'I am an avid collection of religious books such as the Quran, the Torah, the bible.'
      },
      {
        username: 'Zoe68',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyB.jpg',
        email: 'zoe@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Zoe library',
        location: {
          lat: 51.5 ,
          lng: 49
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryD.jpg',
        libraryDescription: 'Eclectic collection of books, records and antiques. Some comic books as well.'
      },
      {
        username: 'Derooroo',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manC.jpg',
        email: 'orjon@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Orjon library',
        location: {
          lat: 51.5 ,
          lng: 49
        },
        libraryPicture: 'someurl',
        libraryDescription: 'filled with dead bodies'
      },
      {
        username: 'Marygoround',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'mary@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Mary library',
        location: {
          lat: 51.5 ,
          lng: 49
        },
        libraryPicture: 'someurl',
        libraryDescription: 'cluttered'
      }
    ]),
    BookGenre.create([
      {
        genre: 'cooking'
      },
      {
        genre: 'biography'
      },
      {
        genre: 'tragedy'
      },
      {
        genre: 'romance'
      },
      {
        genre: 'fantasy'
      },
      {
        genre: 'sci-fi'
      },
      {
        genre: 'diy'
      },
      {
        genre: 'art'
      },
      {
        genre: 'language'
      },
      {
        genre: 'drama'
      }
    ])
  ]

  Promise.all(promiseArray)
    .then(data => {
      const [ users, genres ] = data
      return Books.create([
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
              user: users[0]
            }
          ],
          owner: users[1],
          returnDate: new Date(),
          borrower: users[2]
        },
        {
          title: 'Change We Can Believe in',
          authors: [ 'Barack Obama'],
          image: 'https://books.google.com/books/content?id=pK5ALFeVVcMC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
          fiction: false,
          genre: genres[1],
          description: 'Change We Can Believe In outlines Barack Obamas vision for America and its standing in the world.In these pages you will find bold and specific ideas about how Barack Obama plans to fix the ailing American economy and strengthen its middle class, make health care affordable for all, achieve energy independence, and keep America safe in a dangerous world. Change We Can Believe In asks us not just to believe in Barack Obamas ability to bring change to Washington, it asks us to believe in the ability of each of us to change the world',
          rating: [
            { rating: 1, user: users[0]},
            { rating: 4, user: users[1]},
            { rating: 5, user: users[2]}
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
          owner: users[2],
          returnDate: new Date()
        },
        {
          title: 'Mansfield Park',
          authors: [ 'Jane Austen'],
          image: 'http://books.google.com/books/content?id=yS4JAAAAQAAJ&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
          fiction: true,
          genre: genres[3],
          description: 'Frances O\'Connor, born into a poor family, is sent away to live with wealthy uncle Sir Thomas (Harold Pinter), his wife (Lindsay Duncan) and their four children, where she\'ll be brought up for a proper introduction to society. She is treated unfavorably by her relatives, except for her cousin Edmund (Jonny Lee Miller), whom she grows fond of. However, Fanny\'s life is thrown into disarray with the arrival of worldly Mary Crawford (Embeth Davidtz) and her brother Henry (Alessandro Nivola).',
          rating: [
            { rating: 3, user: users[2]}
          ],
          review: [
            {
              review: 'I can not but think good horsemanship has a great deal to do with the mind." Jane Austen always did a great job of planting ridiculous declarations in the mouths of characters she wished to discredit. Character was her strong suit and there\'s some good\'uns here in.',
              user: users[2]
            }
          ],
          owner: users[3],
          returnDate: new Date(),
          borrower: users[4]
        },
        {
          title: 'The Help',
          authors: [ 'Kathryn Stockett'],
          image: 'https://books.google.com/books/content?id=wsEXhw17prsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          fiction: true,
          genre: genres[9],
          description: `Twenty-two-year-old Skeeter has just returned home after graduating from Ole Miss. She may have a degree, but it is 1962, Mississippi, and her mother will not be happy till Skeeter has a ring on her finger. Skeeter would normally find solace with her beloved maid Constantine, the woman who raised her, but Constantine has disappeared and no one will tell Skeeter where she has gone.

          Aibileen is a black maid, a wise, regal woman raising her seventeenth white child. Something has shifted inside her after the loss of her own son, who died while his bosses looked the other way. She is devoted to the little girl she looks after, though she knows both their hearts may be broken.

          Minny, Aibileen's best friend, is short, fat, and perhaps the sassiest woman in Mississippi. She can cook like nobody's business, but she can't mind her tongue, so she's lost yet another job. Minny finally finds a position working for someone too new to town to know her reputation. But her new boss has secrets of her own.`,

          rating: [
            { rating: 4, user: users[5]}
          ],
          review: [
            {
              review: `The only reason I'm not giving it a 5 is because I felt like some of the stories needed a better or stronger ending. I truly think it is a fantastic book, and it makes you really think about what happened in the not-so-distant past... and probably still happening in some parts of the country today. Scary thoughts, but in the end, at least the right people got something back they deserved, even if it wasn't as much as it should have been.

              The characters are very clear and strong. And when there are upwards of 10 to 12 supporting or lead female characters, an author has to spend a tremendous amount of time creating distinct pictures in a readers mind. Stockett did a great job with this task. Each and every one shows you a different personality: leaders and followers, movers and shakers, smart and silly, strong and weak, tolerant and intolerant, thirsty for all the world has to offer and content to stay the same for an entire lifetime.`,
              user: users[5]
            }
          ],
          owner: users[5],
          returnDate: new Date(),
          borrower: users[4]
        },
        {
          title: 'The Hobbit',
          authors: [ 'J.R.R Tolkien'],
          image: 'http://www.orjon.com/dev/booker/images/bookcovers/cover-theHobbit.jpeg',
          fiction: true,
          genre: genres[4],
          description: ' In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',

          rating: [
            { rating: 5, user: users[3]}
          ],
          review: [
            {
              review: 'To call this the epitome in which all high fantasy should be judged does not quite suffice; this is simply one of the best books that has ever been written or will ever be written. The Hobbit defines the high fantasy genre along with its sequel, of course, and has been an inspiration to countless authors and readers alike. Tolkien, quite literally, kick started a genre that would eventually capture the hearts of thousands of people. He changed the literary world. He made fantasy real. ',
              user: users[3]
            }
          ],
          owner: users[3],
          returnDate: new Date()
        }
      ])
    })
    .then(books => console.log(`${books.length} books created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
