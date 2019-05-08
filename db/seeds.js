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

  // Users
  // 0: Rich
  // 1: jack
  // 2: sumi
  // 3: zoe
  // 4: orjon
  // 5: mary
  // 6: wesley
  // 7: steven
  // 8: matthew
  // 9: stephano
  //10: Pascual

  //   genres
  // 0: Cooking
  // 1: Biography
  // 2: Tragedy
  // 3: Romance
  // 4: Fantasy
  // 5: Sci-Fi
  // 6: D.I.Y.
  // 7: Art
  // 8: Language
  // 9: Drama
  // 10:Literature

  // book : owner
  // 0 : user0
  // 1 : user1
  // 2 : user2
  // 3 : user3
  // 4 : user5
  // 5 : user2
  // 6 : user3

  const promiseArray = [
    User.create([
      {
        username: 'Rich',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manA.jpg',
        email: 'rich@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Rich\'s library',
        location: { lat: 51.516625, lng: -0.074982 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryA.jpg',
        libraryDescription: 'A library that\'s doubled as a dining room, where I could be surrounded by the books I love'
      },
      {
        username: 'Jack',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manB.jpg',
        email: 'jack@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Jack\'s bookshelf',
        location: { lat: 51.517066, lng: -0.069700 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryB.jpg',
        libraryDescription: 'Collection of books slightly chewed up by cats, but still functional'
      },
      {
        username: 'Sumi',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyA.jpg',
        email: 'sumi@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Sumi\'s books!',
        location: { lat: 51.515204, lng: -0.072349 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryC.jpg',
        libraryDescription: 'I am an avid collection of religious books such as the Quran, the Torah, the bible.'
      },
      {
        username: 'Zoe',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyB.jpg',
        email: 'zoe@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Zoe\'s library',
        location: { lat: 51.514120, lng: -0.071449 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryD.jpg',
        libraryDescription: 'Eclectic collection of books, ranging from novels to textbooks, and even some comic books!'
      },
      {
        username: 'Orjon',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manC.jpg',
        email: 'orjon@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Orjon\'s home library',
        location: { lat: 51.515795, lng: -0.067593 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryE.jpg',
        libraryDescription: 'My library collection has been passed down through many generations.'
      },
      {
        username: 'Mary',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/ladyC.jpg',
        email: 'mary@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Mary & John\'s bookcase',
        location: { lat: 51.513791, lng: -0.067392 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryF.jpg',
        libraryDescription: 'We\'ve collected many books from around the world and love sharing them with you all!'
      },
      {
        username: 'Wesley',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manD.jpg',
        email: 'wesley@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Wesley\'s Library',
        location: { lat: 51.511868, lng: -0.072210},
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryG.jpg',
        libraryDescription: 'If you love Sci-Fi novels, my library is for you.'
      },
      {
        username: 'Steven',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manE.jpg',
        email: 'steven@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Steve\'s library',
        location: { lat: 51.522164, lng: -0.075526 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryH.jpg',
        libraryDescription: 'My collection is largely music and film-based, with a few classics thrown in.'
      },
      {
        username: 'Matthew',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manF.jpg',
        email: 'matthew@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Matthew\'s library',
        location: { lat: 51.518474, lng: -0.061351 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryI.jpg',
        libraryDescription: 'Romance novels, technical journals and many many children\'s books!'
      },
      {
        username: 'Stephano',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manG.jpg',
        email: 'stephano@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Stephano\'s library',
        location: { lat: 51.518474, lng: -0.061351},
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryJ.jpg',
        libraryDescription: 'Cooking and cakes is what it\'s all about!'
      },
      {
        username: 'Pascual',
        profilePicture: 'http://www.orjon.com/dev/booker/images/profile/manH.jpg',
        email: 'pascual@email',
        password: 'pass',
        passwordConfirmation: 'pass',
        libraryName: 'Pascual\'s book collection',
        location: { lat: 51.517453, lng: -0.088473 },
        libraryPicture: 'http://www.orjon.com/dev/booker/images/libraries/libraryK.jpg',
        libraryDescription: 'D.I.Y, language and art books are what you will find. Everyone is welcome!'
      }
    ]),
    BookGenre.create([
      { genre: 'Cooking'},
      { genre: 'Biography'},
      { genre: 'Tragedy' },
      { genre: 'Romance'},
      { genre: 'Fantasy'},
      { genre: 'Sci-Fi'},
      { genre: 'D.I.Y.'},
      { genre: 'Art'},
      { genre: 'Language'},
      { genre: 'Drama'},
      { genre: 'Literature'}
    ])
  ]

  Promise.all(promiseArray)
    .then(data => {
      const [ users, genres ] = data
      console.log(`${users.length} users created`)
      console.log(`${genres.length} genres created`)
      return Promise.all([
        Books.create([
          {
            owner: users[10],
            title: 'King Lear',
            authors: 'William Shakespeare',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/kinglear.jpeg',
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
            ]
          },
          {
            owner: users[1],
            title: 'Change We Can Believe in',
            authors: 'Barack Obama',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/obama.jpeg',
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
            ]
          },
          {
            owner: users[2],
            title: 'The Joy of Cooking',
            authors: 'Irma S. Rombauer',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/joy.jpeg',
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
                user: users[5]
              },
              {
                review: 'I don\'t know why it took so long for me to include this very worthy book to my Goodreads Library. This is my second copy. The first, a paperback, became so tattered and worn that my son presented this valued edition as a gift. I have been cooking for more than forty years, but continue to return to this book for ideas, information and special recipes. On many occasions I search for new ways to prepare foods and will find the ideal formula for preparation. Frequently I will "tweak" the recipe in order to please the palates of my diners, but JOY has rarely failed to please me.',
                user: users[1]
              }
            ]
          },
          {
            owner: users[3],
            title: 'Mansfield Park',
            authors: 'Jane Austen',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/mansfield.jpeg',
            fiction: true,
            genre: genres[3],
            description: 'Frances O\'Connor, born into a poor family, is sent away to live with wealthy uncle Sir Thomas (Harold Pinter), his wife (Lindsay Duncan) and their four children, where she\'ll be brought up for a proper introduction to society. She is treated unfavorably by her relatives, except for her cousin Edmund (Jonny Lee Miller), whom she grows fond of. However, Fanny\'s life is thrown into disarray with the arrival of worldly Mary Crawford (Embeth Davidtz) and her brother Henry (Alessandro Nivola).',
            rating: [
              { rating: 3, user: users[2]},
              { rating: 1, user: users[1]}
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
            ]
          },
          {
            owner: users[5],
            title: 'The Help',
            authors: 'Kathryn Stockett',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/100.jpg',
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
            ]
          },
          {
            owner: users[2],
            title: '1984',
            authors: 'George Orwell',
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
                user: users[3]
              },
              {
                review: '1984 is not a particularly good novel, but it is a very good essay. On the novel front, the characters are bland and you only care about them because of the awful things they live through. As a novel all the political exposition is heavyhanded, and the message completely overrides any sense of storytelling. As an essay, the points it makes can be earthshaking. It seems everyone who has so much as gotten a parking ticket thinks he lives in a 1984-dystopia. Every administration that reaches for power, injures civil liberties or collaborates too much with media is accused of playing Big Brother. These are the successes of 1984\'s paranoia, far outliving its original intent as a battery against where Communism was going (Orwell was a severely disappointed Marxist), and while people who compare their leaders to Big Brother are usually overreaching themselves and speak far away from Orwell\'s intent and vision, it is a useful catchcloth for dissent. Like so many immortalized books with a social vision, 1984\'s actual substance is so thin that its ideologies and fear-mongering aspects can be stretched and skewed to suit the readers. If you\'d like a better sense of the real world and Orwell\'s intents, rather than third-hand interpretations of his fiction, then his Homage to Catalonia is highly recommended. ',
                user: users[8]
              }
            ]
          },
          {
            owner: users[3],
            title: 'The Hobbit',
            authors: 'J.R.R Tolkien',
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
            ]
          },
          {
            owner: users[8],
            title: 'Pride and Prejudice',
            authors: 'Jane Austen',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/1.jpeg'  ,
            fiction: true,
            genre: genres[2],
            description: 'Tvoluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[4],
            title: 'Frankenstein',
            authors: 'Mary Wollstonecraft Shelley',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/2.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[6],
            title: 'A Modest Proposal',
            authors: 'Jonathan Swift',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/3.jpeg',
            fiction: true,
            genre: genres[0],
            description: 'Ovoluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[2],
            title: 'The Importance of Being Earnest',
            authors: 'Oscar Wilde',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/4.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[6],
            title: 'A Tale of Two Cities',
            authors: 'Charles Dickens',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/5.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[6],
            title: 'Moby Dick',
            authors: 'Herman Melville',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/6.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[3],
            title: 'Heart of Darkness',
            authors: 'Joseph Conrad',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/7.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[6],
            title: 'The Awakening',
            authors: 'Kate Chopin',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/8.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[6],
            title: 'Alice\'s Adventures in Wonderland',
            authors: 'Lewis Carroll',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/9.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Metamorphosis',
            authors: 'Franz Kafka',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/10.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Adventures of Huckleberry Finn',
            authors: 'Mark Twain',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/11.jpeg',
            fiction: false,
            genre: genres[4],
            description: 'Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et.',
            rating: [
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[6],
            title: 'The Adventures of Sherlock Holmes',
            authors: 'Arthur Conan Doyle',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/13.jpeg',
            fiction: false,
            genre: genres[1],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              }
            ]
          },
          {
            owner: users[6],
            title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
            authors: 'Robert Louis Stevenson',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/14.jpeg',
            fiction: false,
            genre: genres[8],
            description: 'voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[2],
            title: 'The Yellow Wallpaper',
            authors: 'Charlotte Perkins Gilman',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/15.jpeg',
            fiction: true,
            genre: genres[5],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[4],
            title: 'The Picture of Dorian Gray',
            authors: 'Oscar Wilde',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/16.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'Has natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[4],
            title: 'The Adventures of Tom Sawyer',
            authors: 'Mark Twain',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/17.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              },
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[6],
            title: 'Grimms\' Fairy Tales',
            authors: 'Jacob Grimm and Wilhelm Grimm',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/18.jpeg',
            fiction: false,
            genre: genres[3],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[3],
            title: 'Beowulf: An Anglo-Saxon Epic Poem',
            authors: '(unknown)',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/19.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[6],
            title: 'Jane Eyre',
            authors: 'Charlotte Brontë',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/20.jpeg',
            fiction: true,
            genre: genres[9],
            description: 'Pro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              }
            ]
          },
          {
            owner: users[1],
            title: 'The Iliad',
            authors: 'Homer',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/21.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et.',
            rating: [
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[5],
            title: 'War and Peace',
            authors: 'Leo Tolstoy',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/22.jpeg',
            fiction: true,
            genre: genres[6],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[8],
            title: 'Walden, and On The Duty Of Civil Disobedience',
            authors: 'Henry David Thoreau',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/23.jpeg',
            fiction: false,
            genre: genres[7],
            description: 'Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[2],
            title: 'Great Expectations',
            authors: 'Charles Dickens',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/24.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[7],
            title: 'Why is the Negro Lynched?',
            authors: 'Frederick Douglass',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/25.jpeg',
            fiction: false,
            genre: genres[10],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[6],
            title: 'The Architecture of Colonial America',
            authors: 'Harold Donaldson Eberlein',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/26.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[7],
            title: 'The Scarlet Letter',
            authors: 'Nathaniel Hawthorne',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/28.jpeg',
            fiction: true,
            genre: genres[4],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[7],
            title: 'Pygmalion',
            authors: 'Bernard Shaw',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/29.jpeg',
            fiction: false,
            genre: genres[1],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[2],
            title: 'Peter Pan',
            authors: 'J. M. Barrie',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/30.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Narrative of the Life of Frederick Douglass, an American Slave',
            authors: 'Frederick Douglass',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/32.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[0],
            title: 'Treasure Island',
            authors: 'Robert Louis Stevenson',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/33.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[3],
            title: 'Dubliners',
            authors: 'James Joyce',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/34.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et.',
            rating: [
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[4],
            title: 'The Souls of Black Folk',
            authors: 'W. E. B. Du Bois',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/35.jpeg',
            fiction: false,
            genre: genres[6],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[9],
            title: 'Il Principe. English',
            authors: 'Niccolò Machiavelli',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/36.jpeg',
            fiction: true,
            genre: genres[8],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[9],
            title: 'A Christmas Carol',
            authors: 'Charles Dickens',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/37.jpeg',
            fiction: false,
            genre: genres[3],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[5],
            title: 'Wuthering Heights',
            authors: 'Emily Brontë',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/38.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[8],
            title: 'The Count of Monte Cristo',
            authors: 'Alexandre Dumas',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/39.jpeg',
            fiction: false,
            genre: genres[5],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[9],
            title: 'Hard Times',
            authors: 'Charles Dickens',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/40.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Tractatus Logico-Philosophicus',
            authors: 'Ludwig Wittgenstein',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/41.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[2],
            title: 'Ye Sundial Booke',
            authors: 'Thomas Geoffrey Wall Henslow',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/42.jpeg',
            fiction: true,
            genre: genres[1],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              }
            ]
          },
          {
            owner: users[9],
            title: 'The Brothers Karamazov',
            authors: 'TFyodor Dostoyevsky',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/43.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 1, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 4, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 1, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[9],
            title: 'Siddhartha',
            authors: 'Hermann Hesse',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/44.jpeg',
            fiction: true,
            genre: genres[6],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[3],
            title: 'Rossum\'s Universal Robots',
            authors: 'Karel Čapek',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/45.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[9],
            title: 'Arthur Conan Doyle',
            authors: 'Arthur Conan Doyle',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/46.jpeg',
            fiction: false,
            genre: genres[4],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[6],
            title: 'Aquarium',
            authors: 'Harold Acton',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/47.jpeg',
            fiction: true,
            genre: genres[9],
            description: 'Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Les Misérables',
            authors: 'Victor Hugo',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/48.jpeg',
            fiction: true,
            genre: genres[0],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[8],
            title: 'Essays of Michel de Montaigne',
            authors: 'Michel de Montaigne',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/49.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              },
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[4],
            title: 'The Turn of the Screw',
            authors: 'Henry James',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/50.jpeg',
            fiction: true,
            genre: genres[3],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[9],
            title: 'The Prophet',
            authors: 'Kahlil Gibran',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/51.jpeg',
            fiction: false,
            genre: genres[7],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[2],
            title: 'Hamlet, Prince of Denmark',
            authors: 'William Shakespeare',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/52.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[5],
            title: 'The Divine Comedy',
            authors: 'Dante Alighieri',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/53.jpeg',
            fiction: true,
            genre: genres[6],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Uncle Tom\'s Cabin',
            authors: 'Harriet Beecher Stowe',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/54.jpeg',
            fiction: true,
            genre: genres[10],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[0],
            title: 'An Occurrence at Owl Creek Bridge',
            authors: 'Ambrose Bierce',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/55.jpeg',
            fiction: true,
            genre: genres[1],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              }
            ]
          },
          {
            owner: users[7],
            title: 'The Luck of the Kid',
            authors: 'Ridgwell Cullum',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/56.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[3],
            title: 'The Republic',
            authors: 'Plato',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/57.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[0],
            title: 'Leaves of Grass',
            authors: 'Walt Whitman',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/58.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[0],
            title: 'The Hound of the Baskervilles',
            authors: 'Arthur Conan Doyle',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/59.jpeg',
            fiction: true,
            genre: genres[4],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[6],
            title: 'The Wonderful Wizard of Oz',
            authors: 'L. Frank Baum',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/60.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[2],
            title: 'The Time Machine',
            authors: 'H. G. Wells',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/61.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[0],
            title: 'The Complete Works of William Shakespeare',
            authors: 'William Shakespeare',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/62.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Leviathan',
            authors: 'Thomas Hobbes',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/63.jpeg',
            fiction: false,
            genre: genres[9],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              }
            ]
          },
          {
            owner: users[3],
            title: 'The Kama Sutra of Vatsyayana',
            authors: 'Vatsyayana',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/64.jpeg',
            fiction: false,
            genre: genres[3],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[4],
            title: 'Sense and Sensibility',
            authors: 'Jane Austen',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/65.jpeg',
            fiction: false,
            genre: genres[6],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[0],
            title: 'Songs of Innocence, and Songs of Experience',
            authors: 'William Blake',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/66.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[8],
            title: 'Gulliver\'s Travels',
            authors: 'Jonathan Swift',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/67.jpeg',
            fiction: true,
            genre: genres[5],
            description: 'Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[2],
            title: 'Anne of Green Gables',
            authors: 'L. M. Montgomery',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/68.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[8],
            title: 'Second Treatise of Government',
            authors: 'John Locke',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/69.jpeg',
            fiction: false,
            genre: genres[1],
            description: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[0],
            title: 'Little Women',
            authors: 'Louisa May Alcott',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/70.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[3],
            title: 'The War of the Worlds',
            authors: 'H. G. Wells',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/71.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Ax menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[1],
            title: 'The Secret Garden',
            authors: 'Frances Hodgson Burnett',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/72.jpeg',
            fiction: true,
            genre: genres[7],
            description: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              }
            ]
          },
          {
            owner: users[7],
            title: 'The Sign of the Four',
            authors: 'Arthur Conan Doyle',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/74.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[5],
            title: 'The Horse and His Rider',
            authors: 'Rollo Springfield',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/75.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 4, user: users[3]},
              { rating: 5, user: users[4]},
              { rating: 5, user: users[5]},
              { rating: 3, user: users[6]},
              { rating: 2, user: users[7]},
              { rating: 5, user: users[8]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              }
            ]
          },
          {
            owner: users[0],
            title: 'My Southern Home',
            authors: 'William Wells Brown',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/76.jpeg',
            fiction: false,
            genre: genres[9],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 3, user: users[9]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[0],
            title: 'Beyond Good and Evil',
            authors: 'Friedrich Wilhelm Nietzsche',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/77.jpeg',
            fiction: true,
            genre: genres[8],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[2],
            title: 'The Works of Edgar Allan Poe',
            authors: 'Edgar Allan Poe',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/78.jpeg',
            fiction: false,
            genre: genres[5],
            description: 'Pvoluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu.',
            rating: [
              { rating: 5, user: users[0]},
              { rating: 2, user: users[1]},
              { rating: 3, user: users[2]},
              { rating: 4, user: users[3]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[6],
            title: 'The Legend of Sleepy Hollow',
            authors: 'Washington Irving',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/79.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[0],
            title: 'Oliver Twist',
            authors: 'Charles Dickens',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/80.jpeg',
            fiction: true,
            genre: genres[7],
            description: 'Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              }
            ]
          },
          {
            owner: users[3],
            title: 'The King James Version of the Bible',
            authors: 'n/a',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/81.jpeg',
            fiction: false,
            genre: genres[2],
            description: 'Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[1],
            title: 'The Tragical History of Doctor Faustus',
            authors: 'Christopher Marlowe',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/82.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[4],
            title: 'Hedda Gabler',
            authors: 'Henrik Ibsen',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/83.jpeg',
            fiction: false,
            genre: genres[3],
            description: 'Svoluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[0],
            title: 'The Life and Adventures of Robinson Crusoe',
            authors: 'Daniel Defoe',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/84.jpeg',
            fiction: true,
            genre: genres[6],
            description: 'Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Elitr possim vituperatoribus cu ius, placerat complectitur nec et. In iisque invenire intellegam mei, at simul oportere eam. Cu vel inani tollit sententiae, quo ne oblique blandit. Eos quod paulo affert cu, at vel reque ponderum. Ne duo ubique voluptatibus, duo odio liber ancillae in. Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
                user: users[7]
              }
            ]
          },
          ////////////////////////////////////////
          {
            owner: users[2],
            title: 'The Study of Plant Life',
            authors: 'M. C. Stopes',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/85.jpeg',
            fiction: false,
            genre: genres[4],
            description: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Facilisi nullam vehicula ipsum a arcu cursus vitae. Turpis nunc eget lorem dolor sed viverra ipsum. Iaculis nunc sed augue lacus viverra. Orci sagittis eu volutpat odio facilisis mauris. Morbi tristique senectus et netus. Augue eget arcu dictum varius duis at consectetur lorem. Praesent elementum facilisis leo vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.',
                user: users[1]
              },
              {
                review: 'Cu evertitur consequat sit, tale tempor blandit an mea. Ex eripuit deleniti gubergren quo, in sed illum minimum.',
                user: users[4]
              }
            ]
          },
          {
            owner: users[5],
            title: 'Faulkner\'s Folly',
            authors: 'Carolyn Wells',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/86.jpeg',
            fiction: false,
            genre: genres[1],
            description: 'Choro deterruisset cu usu, postea nostro percipit eum an. Te mei platonem recteque, eam ut causae discere veritus, cum in labitur eligendi lobortis. Mel mentitum disputationi an, eos ut quaerendum liberavisse ullamcorper. Ea graeci delectus mea. Has deserunt expetenda evertitur at. An eos essent euripidis intellegam, novum albucius oporteat sed ut.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Odio utamur scripserit sit eu, eam ne salutandi molestiae temporibus. Mea id sapientem disputationi mediocritatem. Ei pro diam erant. Dicit nobis cu cum. Vel movet labitur adversarium in.',
                user: users[8]
              },
              {
                review: 'Et mei laudem virtute fuisset. At mea eros zril. Cu hinc dolores sit, in pro inani iudicabit, luptatum erroribus has eu. In numquam detracto appetere eum, duo fugit utroque theophrastus ne.\nTe vix mucius nostro. Per perfecto quaerendum ei, summo oblique accusam cu vim. Et duo magna autem suscipiantur. Vis wisi vituperatoribus ex, mei duis ferri temporibus eu. Ut eos erant accusam, veritus maiorum omittam ea ius.',
                user: users[9]
              },
              {
                review: 'Commodo posidonium pro ne. Vix ut noluisse verterem, paulo sensibus vix ex. Melius oporteat tractatos mei ut, sed ex quod propriae, patrioque consequat intellegebat quo id. Sea eius magna erant ut, ex novum aeque eum, aliquando conceptam maiestatis pro et. Veniam detracto ad eum, nusquam minimum ad mel, te assum vulputate inciderint qui. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nPro malis paulo doctus ei, nec voluptua expetendis cu. Ex option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[3]
              }
            ]
          },
          {
            owner: users[1],
            title: 'Persuasion',
            authors: 'Jane Austen',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/87.jpeg',
            fiction: true,
            genre: genres[2],
            description: 'Lorem ipsum dolor sit amet, accusam corpora ad duo, vis in eius forensibus, vix ut hinc voluptua. Eu pri melius accusamus percipitur, ad mea mucius neglegentur. Nec eu integre qualisque. Dico soluta perfecto nec id, tacimates definitiones nec ex, vel option accusata quaerendum ex. Cum et cibo ubique. Natum accusamus inciderint eos eu, mea te vero viderer.\nWisi blandit democritum ex his. Vim ancillae scripserit cotidieque ne. Has cu velit feugait rationibus, eu vero epicuri cotidieque eam. No accusata explicari repudiandae usu, ei meis fuisset est. Et iudico soluta vis. An zril invidunt duo.\nChoro deterruisset cu usu, postea nostro percipit eum an. Te mei platonem recteque, eam ut causae discere veritus, cum in labitur eligendi lobortis. Mel mentitum disputationi an, eos ut quaerendum liberavisse ullamcorper. Ea graeci delectus mea. Has deserunt expetenda evertitur at. An eos essent euripidis intellegam, novum albucius oporteat sed ut.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'An vix dictas deseruisse reformidans. An vel corpora facilisi. Vitae mollis euripidis ex cum, sed in primis commodo reformidans. Vidit dignissim efficiantur est et, agam oratio voluptatum no has. Eum nibh mollis ad, sed vitae essent eu.\nSit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[1]
              },
              {
                review: 'Sit purto verear iracundia ea, cu mea expetenda gubergren. Te quis partiendo vix. Vivendo voluptatum cu vis, unum minim pertinacia vis ea. Dictas animal suavitate sed ea. No eam dicat erroribus disputando, graecis luptatum partiendo cu ius. Quodsi malorum omittantur sit an, id est mucius temporibus.\nCum eu illum simul, ad velit aliquam has. Dolorum officiis eos et, id usu mentitum sadipscing, veri admodum copiosae ne eum. Invenire definiebas te sea, consul timeam appellantur his cu. Nec lorem quando volutpat cu, et quodsi aperiri eum. Eu consul fabellas gubergren per, ut augue iusto simul mei. Quot omnium quo eu, cu modus illum mea.',
                user: users[2]
              },
              {
                review: 'Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[2]
              },
              {
                review: 'At vel amet vivendum. Brute ignota nemore sit id, vis ne quaeque accumsan. Malis pertinacia omittantur ex vim, vis ne quidam invenire adversarium, quaerendum interpretaris ne qui. Cum ex menandri sensibus iudicabit, te suscipit perfecto pri.\nCu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[0]
              }
            ]
          },
          {
            owner: users[4],
            title: 'The Jungle',
            authors: 'Upton Sinclair',
            image: 'http://www.orjon.com/dev/booker/images/bookcovers/88.jpeg',
            fiction: false,
            genre: genres[0],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            rating: [
              { rating: 4, user: users[2]}
            ],
            review: [
              {
                review: 'Nibh nostrum ne duo, nullam splendide quo ea, vix eros quidam forensibus id. Et vim reque abhorreant, mel ex reque munere, cu eirmod vocent deseruisse mel. Ei dolorem detraxit pri. Ea eum semper cotidieque disputando, nam albucius nominati accommodare ne. Est at quod ancillae reformidans, ius id falli equidem moderatius. Est eu partem quaeque. No unum sale vel, nec ea blandit percipit expetenda.\nEst paulo diceret ea, ut odio audire scribentur ius. Dolor aliquando et per. Vidisse persius gloriatur pro no, appareat quaerendum ei nec. Commodo equidem te qui. Quaeque saperet definitionem ea pri, no vim justo porro atqui.\nNe veniam oportere scriptorem vis, ne has tempor omnium, mel te nominavi interesset. Vix at eirmod fuisset lobortis, ei cum inani aliquid deleniti, duis veniam percipitur has id. Te his adhuc vituperata, et mei bonorum facilis epicuri. Vis dico erant dolor ea. Eum an suas inani efficiendi, mei ne congue salutandi. Et ipsum laboramus vim, cu eos dicunt aliquando liberavisse.',
                user: users[5]
              },
              {
                review: 'Commodo posidonium pro ne. Has malis mucius everti ad, ad eum tacimates vituperata, alia modus vel et. Vim quot sonet cu, voluptua posidonium vis in.\nHas natum utinam voluptatibus at, et ius homero abhorreant rationibus. Te est tamquam scaevola, nihil mnesarchum te per. Te vim senserit reprimique percipitur. Eum lobortis forensibus deseruisse no, ignota singulis ex eum, augue offendit et cum.\nEx option euismod theophrastus nec, sea ad discere luptatum. Pri quodsi integre reformidans ea, nibh tota mel ex. Cu facete propriae duo, his tollit iisque constituam ei, cu vel quot dolores deseruisse.',
                user: users[6]
              },
              {
                review: 'Elitr possim vituperatoribus cu ius, placerat complectitur nec et. In iisque invenire intellegam mei, at simul oportere eam. Cu vel inani tollit sententiae, quo ne oblique blandit. Eos quod paulo affert cu, at vel reque ponderum. Ne duo ubique voluptatibus, duo odio liber ancillae in. Eius vocibus sapientem eos at.\nQuem imperdiet eu mea, cum et nominavi gloriatur, delenit dignissim philosophia ut mea. Vim facete dolorum phaedrum id, sint minim quaerendum no per. Usu ea erat falli neglegentur, tota illud eirmod ex pro, ut lucilius instructior vim. Probo eligendi in sit, reformidans adversarium has ex, partiendo dissentiet ne pri. affert utinam epicurei vis. Per te tacimates moderatius dicat.',
                user: users[7]
              }
            ]
          }
        ]),
        users
      ])
    })
    .then(data => {
      const [ books, users ] = data
      console.log(`${books.length} books created`)
      return Loan.create([
        {
          book: books[3],
          borrower: users[2],
          start: '2019-02-20T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan A',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[6],
          borrower: users[2],
          start: '2019-03-20T10:14:31.561Z',
          end: '2019-04-20T10:14:31.561Z',
          message: 'Loan B',
          returned: null,
          approved: false
        },
        {
          book: books[2],
          borrower: users[3],
          start: '2019-02-19T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan C',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[5],
          borrower: users[3],
          start: '2019-03-20T10:14:31.561Z',
          end: '2019-04-20T10:14:31.561Z',
          message: 'Loan D',
          returned: null,
          approved: true
        },
        {
          book: books[5],
          borrower: users[0],
          start: '2019-05-20T10:14:31.561Z',
          end: '2019-05-30T10:14:31.561Z',
          message: 'Loan E',
          returned: null,
          approved: false
        },
        {
          book: books[5],
          borrower: users[1],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan F',
          returned: null,
          approved: false
        },
        {
          book: books[0],
          borrower: users[2],
          start: '2019-01-15T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan G',
          returned: null,
          approved: true
        },
        {
          book: books[5],
          borrower: users[0],
          start: '2019-01-15T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan H',
          returned: null,
          approved: true,
          collected: '2019-01-15T12:15:08.561Z'
        },
        {
          book: books[90],
          borrower: users[1],
          start: '2019-01-15T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan i',
          returned: null,
          approved: true
        },
        {
          book: books[89],
          borrower: users[1],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan j',
          returned: null,
          approved: false
        },
        {
          book: books[88],
          borrower: users[2],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan k',
          returned: null,
          approved: false
        },
        {
          book: books[87],
          borrower: users[10],
          start: '2019-02-20T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan l',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[86],
          borrower: users[0],
          start: '2019-02-19T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan m',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[85],
          borrower: users[4],
          start: '2019-01-15T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan n',
          returned: null,
          approved: true
        },
        {
          book: books[84],
          borrower: users[1],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan o',
          returned: null,
          approved: false
        },
        {
          book: books[83],
          borrower: users[2],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan p',
          returned: null,
          approved: false
        },
        {
          book: books[82],
          borrower: users[3],
          start: '2019-02-20T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan q',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[81],
          borrower: users[3],
          start: '2019-02-19T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan r',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[80],
          borrower: users[0],
          start: '2019-02-19T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan s',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[79],
          borrower: users[4],
          start: '2019-01-15T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan t',
          returned: null,
          approved: true
        },
        {
          book: books[78],
          borrower: users[1],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan u',
          returned: null,
          approved: false
        },
        {
          book: books[77],
          borrower: users[2],
          start: '2019-05-15T10:14:31.561Z',
          end: '2019-05-25T10:14:31.561Z',
          message: 'Loan v',
          returned: null
        },
        {
          book: books[76],
          borrower: users[3],
          start: '2019-02-20T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan w',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        },
        {
          book: books[75],
          borrower: users[3],
          start: '2019-02-19T10:14:31.561Z',
          end: '2019-02-25T10:14:31.561Z',
          message: 'Loan x',
          returned: '2019-02-25T10:14:31.561Z',
          approved: true
        }

      ])
    })
    .then(loans => console.log(`${loans.length} loans created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
