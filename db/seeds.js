// seeds.js
const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')
const Books = require('../models/book')
const BookGenre = require('../models/bookGenre')
const User = require('../models/user')
const Loan = require('../models/loan')
const Promise = require('bluebird')

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  db.dropDatabase()

  const promiseArray = [
    User.create([
      {
        username: 'Rich',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manA.jpg',
        email: 'rich@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Rich\'s library',
        location: {
          lat: 51.516625,
          lng: -0.074982
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryA.jpg',
        libraryDescription: 'A library that\'s doubled as a dining room, where I could be surrounded by the books I love'
      },
      {
        username: 'Jack',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manB.jpg',
        email: 'jack@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'jacklibrary',
        location: {
          lat: 51.517066 ,
          lng: -0.069700
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryB.jpg',
        libraryDescription: 'Collection of books slightly chewed up by cats, but still functional'
      },
      {
        username: 'Sumi',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyA.jpg',
        email: 'sumi@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Sumilibrary',
        location: {
          lat: 51.515204 ,
          lng: -0.072349
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryC.jpg',
        libraryDescription: 'I am an avid collection of religious books such as the Quran, the Torah, the bible.'
      },
      {
        username: 'Zoe',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyB.jpg',
        email: 'zoe@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Zoe library',
        location: {
          lat: 51.514120 ,
          lng: -0.071449
        },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryD.jpg',
        libraryDescription: 'Eclectic collection of books, records and antiques. Some comic books as well.'
      },
      {
        username: 'Orjon',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manC.jpg',
        email: 'orjon@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Orjon library',
        location: {
          lat: 51.515795 ,
          lng: -0.067593
        },
        libraryPicture: 'someurl',
        libraryDescription: 'filled with dead bodies'
      },
      {
        username: 'Mary',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'mary@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Mary library',
        location: {
          lat: 51.513791 ,
          lng: -0.067392
        },
        libraryPicture: 'someurl',
        libraryDescription: 'cluttered'
      },
      {
        username: 'Wesley',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'wesley@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Wesley library',
        location: {
          lat: 51.511868 ,
          lng: -0.072210
        },
        libraryPicture: 'someurl',
        libraryDescription: 'cluttered'
      },
      {
        username: 'Steven',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'steven@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Steve library',
        location: {
          lat: 51.522164,
          lng: -0.075526
        },
        libraryPicture: 'someurl',
        libraryDescription: 'cluttered'
      },
      {
        username: 'Matthew',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'steven@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Matthew library',
        location: {
          lat: 51.518474,
          lng: -0.061351
        },
        libraryPicture: 'someurl',
        libraryDescription: 'cluttered'
      },
      {
        username: 'Stephano',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'stephano@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Stephano library',
        location: {
          lat: 51.518474,
          lng: -0.061351
        },
        libraryPicture: 'someurl',
        libraryDescription: 'cluttered'
      },
      {
        username: 'Pascual',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'pascual@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Pascual library',
        location: {
          lat: 51.517453,
          lng: -0.088473
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
      },
      {
        genre: 'literature'
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
            { rating: 3, user: users[1]},
            { rating: 4, user: users[9]},
            { rating: 5, user: users[3]},
            { rating: 4, user: users[2]}
          ],
          review: [
            {
              review: 'Why does this masterpiece--yes, a true masterpiece--continue to collect dust on library shelves? I\'m almost finished not reading but studying its verbal tapestry, so intricately woven with the emotions of its characters. The play holds together, where no thread can be pulled from it. King Lear is Shakespeare\'s best play. Perhaps this work is neglected, because it requires thinking on the reader\'s part. Sad--so sad...',
              user: users[1]
            },
            {
              review: 'I\'ve read Lear many times, and, although I didn\'t learn much about the play this reading, I did learn a little about myself. I have always loved the play, but in the past I found its injustice and evil nigh overpowering, its victims pathetically guiltless, its perspective verging on the nihilistic. Now, though, I see goodness and grace everywhere: in Cordelia\'s plain-spoken honesty and love for Lear, in Kent and Gloster\'s loyalty, in Edgar\'s bizarre attempt to heal his father\'s soul through stratagem, and--perhaps most important--in the way Lear himself grows in understanding and compassion even as he grows in grief and madness. ',
              user: users[9]
            },
            {
              review: 'King Lear is a tragedy written by William Shakespeare. It depicts the gradual descent into madness of the title character, after he disposes of his kingdom giving bequests to two of his three daughters based on their flattery of him, bringing tragic consequences for all. Derived from the legend of Lear of Britain, a mythological Pre-Roman Celtic king.',
              user: users[3]
            },
            {
              review: 'My first encounter with Shakespeare has totally swept me off my feet. As much as I had heard of the indisputable grandeur of the most famous playwright of all times I never expected to be so immersed in the swirling undercurrents of the incongruities of human nature that are so vividly portrayed in this tragedy. Even though my inexpensive Wordsworth edition wasn’t generous with annotations or academic essays, the universality of Shakespeare’s art, wrought in versed polyptotons, playful aphorisms and grotesque imagery, surpasses all attempts to categorize his work. Always elusive and prone to countless interpretations, Shakespeare remains inscrutable and daunts the present reader with questions of yesteryear about the meaning of life.',
              user: users[2]
            }
          ],
          owner: users[0]

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
            { rating: 5, user: users[2]},
            { rating: 3, user: users[3]},
            { rating: 4, user: users[4]},
            { rating: 5, user: users[5]},
            { rating: 4, user: users[6]}
          ],
          review: [
            {
              review: 'I had originally planned to give this book four stars for the outline of Obama\'s plan. But, in addition to the plan, seven of Obama\'s speeches are included at the back of the book. Among them is his "A More Perfect Union" speech that he gave in Philadelphia on March 18, 2008, where he confronted the issue of race in America. This speech alone is more than worthy of an additional star in my rating.',
              user: users[4]
            },
            {
              review: 'Since I don\'t agree with most liberal policies, this book didn\'t stand a good chance of being "liked" - but I was pleasantly surprised to see some of the more moderate stances he has, particularly as concerns some national defense issues... if these are sincere and not just rhetoric to appease the masses who care about our security. However, apart from a summary and laundry list of policies and goals, there is no philosophical or argumentative basis (or support or examples for that matter) to persuade the reader as to why their approach is the right or best or appropriate approach to begin with... which leaves this book with all kinds of assumptions and holes, and leaving it utterly uninteresting to read. This and the fact that even when it does give specifics, they are completely out of context (ie. giving dollar amounts that mean nothing to most of us). ',
              user: users[0]
            },
            {
              review: `I arrived home from work today and found this book in my mailbox. I walked into my home, sat down, and read it in its entirety. It is rare that I consume a book so completely without pause.

              As with any all encompassing policy proposal there will be items that you completely agree with and others that you would want to see some alterations to before being implemented. But, when read in the light (or shadows) of the last eight years under the Bush administration, Obama's vision is a breath of fresh air that allows you to once again ponder what America is truly capable of accomplishing. When read in comparison with the muddled, status quo policies being hocked by McCain, it is difficult to see how any critical thinking citizen with a social conscience could not easily prefer Obama's proposal. `,
              user: users[2]
            }
          ],
          owner: users[1]
        },
        {
          title: 'The Joy of Cooking',
          authors: [ 'Irma S. Rombauer'],
          image: 'https://books.google.com/books/content?id=MFWFeJ5t8zcC&printsec=frontcover&img=1&zoom=2&edge=curl&source=gbs_api',
          fiction: true,
          genre: genres[0],
          description: 'In 1931, Irma S. Rombauer, a recent widow, took her life savings and self-published a cookbook that she hoped might support her family. Little did she know that her book would go on to become Americas most beloved cooking companion.',
          rating: [
            { rating: 4, user: users[2]},
            { rating: 3, user: users[5]},
            { rating: 2, user: users[4]}
          ],
          review: [
            {
              review: 'What do I like most about The Joy of Cooking? It is fairly encyclopedic, covering about as broad a range of cooking topics as it can; while most of the recipes are from the Western tradition, it also dips into some less traditional preparations (e.g., ceviche). The book does not assume that you know anything about cooking -- not sure what a "dash" is? You can look up an explanation for that. What\'s the difference between a filet and a cutlet? It explains that, too. (HINT: they\'re basically synonymous.) It has a great index, is organized well, and has recipes to cover almost any occasion and varying degrees of culinary sophistication.',
              user: users[2]
            },
            {
              review: 'I don\'t know why it took so long for me to include this very worthy book to my Goodreads Library. This is my second copy. The first, a paperback, became so tattered and worn that my son presented this valued edition as a gift. I have been cooking for more than forty years, but continue to return to this book for ideas, information and special recipes. On many occasions I search for new ways to prepare foods and will find the ideal formula for preparation. Frequently I will "tweak" the recipe in order to please the palates of my diners, but JOY has rarely failed to please me.',
              user: users[2]
            }
          ],
          owner: users[2]

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
            },
            {
              review: `I was astounded to find that many of the reviews on this site criticize this book for the main character, Fanny Price, & her timidity and morality. It is very different from Pride and Prejudice and Sense and Sensibility, whose smart, sensible heroines make the novels, but I actually enjoyed this book immensely for its social commentary.

              Most of the characters in this book singlemindedly pursue wealth, status, and pleasure regardless of their personal and moral costs. Their antics are pretty hilarious, and I think Fanny's passive and proper nature makes her an ideal medium through which to observe all the frivolous and shallow people around her. Aside from being funny, the book also raises the issue of a girl's "duty" to marry well - should personal happiness be sacrificed for money and connections?`,
              user: users[3]
            }
          ],
          owner: users[3]
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
            { rating: 4, user: users[5]},
            { rating: 4, user: users[7]},
            { rating: 3, user: users[6]}
          ],
          review: [
            {
              review: `The only reason I'm not giving it a 5 is because I felt like some of the stories needed a better or stronger ending. I truly think it is a fantastic book, and it makes you really think about what happened in the not-so-distant past... and probably still happening in some parts of the country today. Scary thoughts, but in the end, at least the right people got something back they deserved, even if it wasn't as much as it should have been.

              The characters are very clear and strong. And when there are upwards of 10 to 12 supporting or lead female characters, an author has to spend a tremendous amount of time creating distinct pictures in a readers mind. Stockett did a great job with this task. Each and every one shows you a different personality: leaders and followers, movers and shakers, smart and silly, strong and weak, tolerant and intolerant, thirsty for all the world has to offer and content to stay the same for an entire lifetime.`,
              user: users[5]
            },
            {
              review: 'My 12 year old daughter would like to read this. I have not read it in a few years and can\'t remember if there is anything graphic that she will encounter. What do you think about a middle school student reading this?',
              user: users[6]
            }
          ],
          owner: users[5]
        },
        {
          title: '1984',
          authors: [ 'George Orwell'],
          image: 'http://www.orjon.com/dev/booker/images/bookcovers/cover-1984.jpeg',
          fiction: true,
          genre: genres[4],
          description: 'Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell\'s nightmarish vision of a totalitarian, bureaucratic world and one poor stiff\'s attempt to find individuality. The brilliance of the novel is Orwell\'s prescience of modern life--the ubiquity of television, the distortion of the language--and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written. ',

          rating: [
            { rating: 5, user: users[3]},
            { rating: 4, user: users[8]},
            { rating: 4, user: users[9]}
          ],
          review: [
            {
              review: `This book is far from perfect. Its characters lack depth, its rhetoric is sometimes didactic, its plot (well, half of it anyway) was lifted from Zumyatin’s We, and the lengthy Goldstein treatise shoved into the middle is a flaw which alters the structure of the novel like a scar disfigures a face.

              But in the long run, all that does not matter, because George Orwell got it right.

              Orwell, a socialist who fought against Franco, watched appalled as the great Soviet experiment was reduced to a totalitarian state, a repressive force equal in evil to Fascist Italy or Nazi Germany. He came to realize that ideology in an authoritarian state is nothing but a distraction, a shiny thing made for the public to stare at. He came to realize that the point of control was more control, the point of torture was more torture, that the point of all their "alternative facts" was to fashion a world where people would no longer possess even a word for truth. `,
              user: users[1]
            },
            {
              review: `This book is far from perfect. Its characters lack depth, its rhetoric is sometimes didactic, its plot (well, half of it anyway) was lifted from Zumyatin’s We, and the lengthy Goldstein treatise shoved into the middle is a flaw which alters the structure of the novel like a scar disfigures a face.

              But in the long run, all that does not matter, because George Orwell got it right.

              Orwell, a socialist who fought against Franco, watched appalled as the great Soviet experiment was reduced to a totalitarian state, a repressive force equal in evil to Fascist Italy or Nazi Germany. He came to realize that ideology in an authoritarian state is nothing but a distraction, a shiny thing made for the public to stare at. He came to realize that the point of control was more control, the point of torture was more torture, that the point of all their "alternative facts" was to fashion a world where people would no longer possess even a word for truth. `,
              user: users[1]
            },
            {
              review: '1984 is not a particularly good novel, but it is a very good essay. On the novel front, the characters are bland and you only care about them because of the awful things they live through. As a novel all the political exposition is heavyhanded, and the message completely overrides any sense of storytelling. As an essay, the points it makes can be earthshaking. It seems everyone who has so much as gotten a parking ticket thinks he lives in a 1984-dystopia. Every administration that reaches for power, injures civil liberties or collaborates too much with media is accused of playing Big Brother. These are the successes of 1984\'s paranoia, far outliving its original intent as a battery against where Communism was going (Orwell was a severely disappointed Marxist), and while people who compare their leaders to Big Brother are usually overreaching themselves and speak far away from Orwell\'s intent and vision, it is a useful catchcloth for dissent. Like so many immortalized books with a social vision, 1984\'s actual substance is so thin that its ideologies and fear-mongering aspects can be stretched and skewed to suit the readers. If you\'d like a better sense of the real world and Orwell\'s intents, rather than third-hand interpretations of his fiction, then his Homage to Catalonia is highly recommended. ',
              user: users[1]
            }
          ],
          owner: users[2]
        },
        {
          title: 'The Hobbit',
          authors: [ 'J.R.R Tolkien'],
          image: 'http://www.orjon.com/dev/booker/images/bookcovers/cover-theHobbit.jpeg',
          fiction: true,
          genre: genres[4],
          description: ' In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.',

          rating: [
            { rating: 5, user: users[3]},
            { rating: 4, user: users[8]}
          ],
          review: [
            {
              review: 'To call this the epitome in which all high fantasy should be judged does not quite suffice; this is simply one of the best books that has ever been written or will ever be written. The Hobbit defines the high fantasy genre along with its sequel, of course, and has been an inspiration to countless authors and readers alike. Tolkien, quite literally, kick started a genre that would eventually capture the hearts of thousands of people. He changed the literary world. He made fantasy real. ',
              user: users[3]
            }
          ],
          owner: users[3]
        }
      ])
    })
    .then(books => console.log(`${books.length} books created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
