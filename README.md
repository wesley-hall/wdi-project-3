# WDI Project 3 - booker

## Please note that this README is currently being worked on and is not yet finished.


## OVERVIEW

The third WDI project was to work in a team to deliver a fully-functional user-generated CMS (Content Management System) that includes multiple relationships between database models and consumes at least one public API (Application Programming Interface).


## TEAM

In alphabetical order:

| Name | GitHub |
|------ -|--------------------------------|
| Orjon | https://github.com/orjon |
| Ru | https://github.com/RuLette |
| Sumi | https://github.com/SumiSastri |
| Wesley | https://github.com/wesley-hall |

## TECHNICAL ACCEPTANCE CRITERIA

1. The app must deliver something of value to the end-user with a visually impressive design, ideally should be mobile responsive.

2. It should store user generated content (UGC) by authenticated users who login to upload content they have generated

3. Users must have a fully functional CMS using the MERN stack (Mongo-Express-React-Node) to upload content

4. The user flow from the front end (logged out and logged in) experience to the back end use of data must be simple, bug-free and fully functional

5. The database should store 3-4 data-schemas

6. A minimum of one external API should be integrated

7. A complete CRUD (Create, Read, Update, Delete) cycle must be integrated into the user experience and be tested, demonstrating test-driven-development

8. The project should be deployed (fully-working and bug-free) on Heroku

9. A README file should outline approach and how the project meets technical requirements


## PROJECT PROPOSAL:


| App Name | Value Proposition |
|----------|-------------------|
| booker | A multi-media sharing club - where media is loaned/ returned or kept|

| Key Use Cases |
|---------------|
| |


**Key use cases:**



## TECHNOLOGIES

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

## TEAM ORGANISATION - LOOSE AGILE FRAMEWORK

Team is self-organising
Decisions are made democratically
Trouble shoot early and often
Support quickly and solve problem
Seek to solve the problem with root cause analysis
The whole team is responsible for positive outcomes and good quality code
Interactions better than documentation

## WINS

Key technologies used by everyone
User journeys well mapped out and data-flows discussed in detail
Good road-maps to map out back-log
Testing started early
Styling as we went rather than right at the end


## CHALLENGES

Creating the promise functions - figuring out the order of promises needed
Creating the test files - had to create a proxy user to test functionality
Nav bar bugs - challenges logging out users
Figuring out search and filter functions in React - pulling data into the render function
User profile - giving users the ability to set their own location
Loans - scoping features and functions to fit time lines
Project management of roles and division of work - sprint rules difficult to follow for a 1 week project


## PROJECT ROADMAP

Front-end user journeys
Back-end configuration structure
Data schemas
Product backlog

## PROJECT DELIVERABLES

### FRONT END

Set up

Authorisation files
 - Login & Register
Common files
  - Data id's
  - Nav bar
  - Secure routes
  - Map files - for user to edit details and show user collections



#### Pages accessible by unregistered (not logged in) users:

| Page | Path | Description |
|------|------|-------------|
| Home | / | Home page with app name/logo and tagline |
| About | /about | Value proposition/brief explanation |
| Books | /books | All collections by all book owners |
| One book | /books:id |  Displays details of the book clicked: <br> - Book title <br> - Author <br> - Rating and reviews <br> - Owner information <br> - Loan request functionality |
| Libraries | /libraries | Displays all libraries by location |
| Login | /login | Login for returning (registered) users |
| Register | /register | Registration for new users |

#### Additional functionality for registered and logged in users:

1. Logout _(returns user to the homepage)_
2. Books page (/books)
  - Dropdown to filter by user libraries
  - Search box to filter by title or author
  - The CRUD Cycle for individual books (/books:id)

| CRUD Cycle | Route | HTTP Method | Description |
|------------|-------|-------------|-------------|
| Create | /books | POST | Users are directed to a blank form with the following: <br> - Text fields for title, author, image URL <br> - Select dropdown with options for genre <br> - Checkbox (styled as a toggle button) for non-/fiction <br> - Radio buttons for review <br> - Textarea for description and review |
| Read | /books <br> /books/:id | GET | Users are able to view information about the book(s) |
| Update | /books/:id/ | PUT | Users are directed to a pre-populated version of the Create form to change information. |
  | Delete | /books/:id | DELETE | A remove button on the page prompts the user to confirm that they want to delete the book before permanently removing it from the database |

_Users will be returned to the books (all) page on submit of create and update forms and when clicking the remove button._

3. Libraries page
  - Users are shown the location of their library with a blue marker (in comparison to red markers for other libraries)
  - A button links users to view/edit their profile



1. Books ( /books )
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

         _Account_ (/loans)

         A status page that lists all the books that are loaned out and status as well as books that have been borrowed and status

### BACK END

#### Configuration
 - [Environment](../master/config/environment.js) - to set up proxy client-server and encryption/ validation
 - [Routes](../master/config/routes.js) - pathways to the controller functions for the CRUD cycle

#### Controllers
 - [Authentication](../master/controllers/auth.js) - user login and registration functionality with JSON Web Tokens (JWT)

 ```
 // Example: User registration (CRUD - Create)

 function register(req, res, next) {
   User
     .create(req.body)
     .then(user => {
       const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
       res.json({
         message: `Thanks for registering, ${user.username}`,
         token,
         user
       })
     })
     .catch(next)
 }
 ```

 - CRUD functionality for:
  - [Users](../master/controllers/users.js)

  ```
  // Example: Show information on a specific user (CRUD - Read)

  function userShow(req, res) {
    User
      .findById(req.params.id)
      .then(user => res.status(200).json(user))
      .catch(err => res.json(err))
  }

  ```

  - [Genres](../master/controllers/genres.js)

  ```
  // Example: Show all genres (CRUD - Read)

  function genresAll(req, res) {
    Genres
      .find()
      .then(genres => res.json(genres))
      .catch(e => console.log(e))
  }
  ```

  - [Books](../master/controllers/books.js), including reviews and ratings

  ```
  // Example: Delete a book (CRUD - Delete)

  function bookDelete(req, res) {
    Book
      .findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(204))
      .catch(err => res.status(500).json(err))
  }
  ```
  ```
  // Example: Add a book rating (CRUD - Create)

  function ratingAdd(req, res) {
    req.body.user = req.currentUser
    Book
      .findById(req.params.id)
      .populate('rating')
      .then(book => {
        book.rating.push(req.body)
        return book.save()
      })
      .then(book => res.json(book))
      .catch(err => res.status(422).json(err))
  }
  ```

  - [Loans](../master/controllers/loans.js)

  ```
  // Example: Update loan information (CRUD - Update)

  function loanUpdate(req, res) {
    Loan
      .findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
      .exec()
      .then(loan => res.status(200).json(loan))
      .catch(err => res.status(500).json(err))
  }

  ```

 - Books functions for the CRUD cycle
 - CRUD js-functions for loans, books, genres, users to ensure get, post, put, delete functions run smoothly

#### Library files
 - [Error handlers](../master/lib/errorHandler.js) for custom error messages and response statuses
 - [Secure route](../master/lib/secureRoute.js) functionality to restrict access by unregistered and not logged in users

#### Database
- [Seeds](../master/db/seeds.js) - To drop the current database and populate it with:
  - 11 users
  - 11 genres
  - 91 books
  - 24 loan requests


- Seeds promises - In the seeds file we used JavaScript promises to ensure that the database is always seeded in the correct order. This is because certain data models require others to exist before they can be created:
  - Books can only be created once users (book owners) and genres have been created
  - Loans can only be created once users and books have been created

  ```
  // Create users and genres inside a promise array
  const promiseArray = [
    User.create([...]),
    BookGenre.create([...])
  ]

  // Wait for all promises to pass before continuing
  Promise.all(promiseArray)
    .then(data => {
      // Deconstruct data so that users and genres can be used when creating books
      const [ users, genres ] = data
      return Promise.all([
        Books.create([...]),
        // Along with books, pass users down to the next then block
        users
        ])
      })
    .then(data => {
      // Deconstruct data so that books and users can be used when creating loans
      const [ books, users ] = data
      return Loan.create([...])
    })
  ```



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

### CODE SNIPPETS
