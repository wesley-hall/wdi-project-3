#OVERVIEW

The third project is to work in a team to deliver a fully-functional user-generated-content-management system that consumes at least one public API (application programming interface)

#TEAM

In alphabetical order: _Orjon, Ru, Sumi, Wesley_

##TECHNICAL ACCEPTANCE CRITERIA

The app must deliver something of value to the end-user with a visually impressive design, ideally should be mobile responsive

It should store user generated content (UGC) by authenticated users who log-in to upload content they have generated

Users must have a fully functional CMS (content management system) using the MERN stack (Mongo-Express-React-Node) to upload content

The user flow from the front end (logged-out and logged-in) experience to the back-end use of data must be simple, bug-free and fully functional

The database should store 3-4 data-schemas

A minimum of one external API should be integrated into the back-end data

A complete CRUD cycle (create-update-delete) must be integrated into the user experience and be tested, demonstrating test-driven-development

The project should be deployed (fully-working and bug-free) on Heroku

A read-me file should outline approach and how the project meets technical requirements


##PROJECT PROPOSAL:

**App Name:** Booker

**Value Proposition:** A multi-media sharing club - where media is loaned/ returned or kept

**Key use cases:**

As a user I would like to register my details so that I can use the app and keep my details safe

As a user I would like to log-in and create, update or delete my user profile as the details change so that accurate information is stored in the app

As a user I would like to upload my books to the app and create a library of my books so that other users can borrow my books

As a user I would like to see other people’s books so that I may borrow books from their libraries

As a user I would like to confirm or reject a request to borrow the books in my library so that I retain control over who can borrow books from me

As a user I would like to know how far the books that I want to borrow are from me so that I can make decisions on whether I want to travel that far to get the book

As a user I would like to communicate with the owner of the book to pick the book up

As a user I would like to communicate with the borrow of the book to organise pick up details

As a user I would like to see the book title, author, reviews and ratings of books so that I can make decisions whether I would like to borrow the book or not

As a user I would like to see ratings of borrowers to gauge whether I want to loan my book to the user

As a user I would like to quickly view the books I have out on loan and the books I am loaning so that I can manage the books I am reading and keep track that all books that have been borrowed are returned in a timely fashion

##TECHNOLOGIES

Front-end libraries
react-js
bulma (css)


Back-end noSQL db
mongo-db

Authentication
jsonwebtokens
bcrypt

Mid-ware
mongoose (extensions form validate, autofill)
node-js
express

Other tools
json
axios
insomnia
mocha-chai

##TEAM ORGANISATION - LOOSE AGILE FRAMEWORK

Team is self-organising
Decisions are made democratically
Trouble shoot early and often
Support quickly and solve problem
Seek to solve the problem with root cause analysis
The whole team is responsible for positive outcomes and good quality code
Interactions better than documentation

##PROJECT ROADMAP

Front-end user journeys
Back-end configuration structure
Data schemas
Product backlog

##PROJECT DELIVERABLES

    ###FRONT-END

**PAGES - not logged-in (browsers)**

_Home_ - (/home)
App value proposition and navigation

_Books_  - (/books)
All collections by all book owners

_One book_ - (/books:id)
Displays details of the book clicked
   - The individual book title, author, rating and the owner of the collection

_Libraries_ - (/location)
All collections by owner location

_Login-Register_ - (/login)
Register for new users and login for returning, registered users

**PAGES - logged-in (registered users)**

_Books_ (/books)
Added functionality
 - filter by owner
 - search by book title or author
 - the CRUD cycle (create, update, delete)
 - Logout (back to the home logged out page)

              _Add_ (/books/add) CR (create)
              _Edit_ (/books/id/update) U (update)
              _Remove_ (/books/id/update) D (delete)

              Add a book to collection as the authorised user
              - form fields
                 - Text fields for book by name, author, picture of the book, a description
                 - Toggle button - category
                 - Radio buttons - rating

            CREATE-  The submit button takes user back to Books page (/books)
            UPDATE - The submit button takes the user back to the Books page (/books/id)
            DELETE  - The remove button removes the book automatically and takes the user back to the Books page (/books)  

            _Borrow_  (/books/id/loan)

            Borrow books from owners
            -form fields
              - collect book (loan start) date
              - return book (loan end) date
              - message (text field) to owner

         The submit button takes the user back to the account page of the user (/loans)
         The back button takes the user back to the main page (/books)

         ###BACKEND

Configuration
 - environment to set up proxy client-server and encryptation/ validation
 - routes - pathways to the controller functions for the CRUD cycle

Controllers
 - Authentication with jsonwebtoken (JWT)
 - Books functions for the CRUD cycle
 - CRUD js-functions for loans, books, genres, users to ensure get, post, put, delete functions run smoothly

Library files
 - Error handlers
 - Secure routes

Database

          SEED FILES:
          -100 books
          -11 loans
          -10 users
          -10 genres
          -6 book owners

          PROMISES

          A series of functions written to load information in the order that would enhance the user Experience
           - user & genre
           - to create books
           - user, genre, book to create loans   
           - loans

          DATA SCHEMAS: Plug-ins (mongoose validator and auto-populate)

          **User**

          ratingSchema({
            rating: { type: Number },
            user: {type: mongoose.Schema.ObjectId, ref: 'User'}
          })

          userSchema({
            username: { type: String, required: true, unique: true },
            profilePicture: { type: String},
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true, unique: true },
            libraryName: { type: String, required: true, unique: true },
            location: {
              lat: { type: Number, required: true },
              lng: { type: Number, required: true }
            },
            libraryPicture: { type: String},
            libraryDescription: { type: String },
            userRating: [ userRatingSchema ]
          }, {
            timestamps: true
          })

          Virtuals - books, loans and password


          **Book:**

          ratingSchema ({
            rating: {type: Number, min: 1, max: 5},
            user: {type: mongoose.Schema.ObjectId, ref: 'User'}
          })

          reviewSchema({
            review: {type: String},
            user: {type: mongoose.Schema.ObjectId, ref: 'User'}
          })

          bookSchema({
            title: {type: String, required: true},
            authors: {type: String},
            image: {type: String},
            fiction: {type: Boolean, required: true},
            genre: { type: mongoose.Schema.ObjectId, ref: 'BookGenre'},
            description: {type: String},
            rating: [ratingSchema],
            review: [reviewSchema],
            owner: { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true }
          })

          Virtuals: loans and books

          **Genre**

            genre: { type: String, required: true }

          Created to separate genre from book schema to scale this list as required

          **Loan:**

          ({
            book: { type: mongoose.Schema.ObjectId, ref: 'Book'},
            borrower: { type: mongoose.Schema.ObjectId, ref: 'User'},
            start: { type: Date, required: true},
            end: { type: Date, required: true},
            message: { type: String },
            returned: { type: Date},
            approved: { type: Boolean },
            declined: { type: Boolean }
          }, {
            timestamps: true
          })

###CODE SNIPPETS
