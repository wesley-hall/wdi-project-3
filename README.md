# WDI Project 3 - booker

## Please note that this README is currently being worked on and is not yet finished.

## Table of Contents


| 1. [Overview](#overview) <br> 2. [Team](#team) <br> 3. [Technical Acceptance Criteria](#technical-acceptance-criteria) <br> 4. [Project Proposal](#project-proposal) <br> 5. [Technologies](#technologies) <br> 6. [Team Organisation](#team-organisation---loose-agile-framework) <br> 7. [Wins](#wins) <br> 8. [Challenges](#challenges) | 9. [Project Roadmap](#project-roadmap) <br> 10. [Project Deliverables](#project-deliverables) <br> &nbsp;&nbsp;&nbsp; - [Front End](#front-end) <br> &nbsp;&nbsp;&nbsp; - [Back End](#back-end) <br> &nbsp;&nbsp;&nbsp; - [Testing](#testing) <br> 11. [Future Features](#future-features) <br> 12. [Key Learnings](#key-learnings) |
|:---|:---|


## Overview

The third WDI project was to work in a team to deliver a fully-functional user-generated CMS (Content Management System) that includes multiple relationships between database models and consumes at least one public API (Application Programming Interface).


## Team

In alphabetical order:

| Name | GitHub |
|-------|--------------------------------|
| Orjon | https://github.com/orjon |
| Ru | https://github.com/RuLette |
| Sumi | https://github.com/SumiSastri |
| Wesley | https://github.com/wesley-hall |

## Technical Acceptance Criteria

1. The app must deliver something of value to the end-user with a visually impressive design, ideally should be mobile responsive.

2. It should store user generated content (UGC) by authenticated users who login to upload content they have generated

3. Users must have a fully functional CMS using the MERN stack (Mongo-Express-React-Node) to upload content

4. The user flow from the front end (logged out and logged in) experience to the back end use of data must be simple, bug-free and fully functional

5. The database should store 3-4 data-schemas

6. A minimum of one external API should be integrated

7. A complete CRUD (Create, Read, Update, Delete) cycle must be integrated into the user experience and be tested, demonstrating test-driven-development

8. The project should be deployed (fully-working and bug-free) on Heroku

9. A README file should outline approach and how the project meets technical requirements


## Project Proposal:

**App Name:** booker

**Value Proposition:** A book sharing community - where users share their book collections by loaning out and borrowing books from other users

**Key Use Cases:** "As a user, I would like to...."

- register my details so that I can use the app and keep my details safe

- login and create, update or delete my user profile as the details change so that accurate information is stored in the app

- upload my books to the app and create a library of my books so that other users can borrow my books

- see other peoples’ books so that I may borrow books from their libraries

- confirm or reject a request to borrow the books in my library so that I retain control over who can borrow books from me

- know how far the books that I want to borrow are from me so that I can make decisions on whether I want to travel that far to get the book

- know the contact details of the owner of the books I want to borrow, so that I can arrange to pick the book up

- know the contact details of the borrower of my books I want to borrow, so that I can arrange the book pick up

- see the book title, author, reviews and ratings of books so that I can make decisions whether I would like to borrow the book or not

- easily view the books I have out on loan and the books I am loaning in one place, so that I can manage the books I am reading and keep track that all books that have been borrowed are returned in a timely fashion


## Technologies

| Front End | Back End | Testing | Other |
|:---:|:---:|:---:|:---:|
| React | Node.js | Mocha | Webpack |
| ReactDOM | MongoDB (NoSQL) | Chai | Babel |
| React Router DOM | Mongoose | SuperTest | Axios |
| Bulma | Express | mongoose-autopopulate | |
| SCSS | dotenv | | |
| Mapbox GL JS | JSON Web Tokens (JWT) | | |
| | bcrypt | | | |


View the full list of dependencies and dev dependencies in the [`package.json`](../master/package.json)


## Team Organisation - Loose Agile Framework

- Team is self-organising
- Decisions are made democratically
- Trouble shoot early and often
- Support quickly and solve problem
- Seek to solve the problem with root cause analysis
- The whole team is responsible for positive outcomes and good quality code
- Interactions better than documentation

## Wins

- Key technologies used by everyone
- User journeys well mapped out and data-flows discussed in detail
- Good road-maps to map out back-log
- Testing started early
- Ongoing styling rather than leaving it to right at the end


## Challenges

- Creating the promise functions in the seeds file - figuring out the order of promises needed
- Creating the test files - had to create a proxy user to test functionality
- Nav bar bugs - challenges logging out users
- Figuring out search and filter functions in React - pulling data into the render function
- User profile - giving users the ability to set their own location using a map marker
- Loans - scoping features and functions to fit time lines
- Project management of roles and division of work - sprint rules difficult to follow for a one week project


## Project Roadmap

- Front-end user journeys
- Back-end configuration structure
- Data schemas  
- Product backlog

## Project Deliverables

### Front End

#### Pages

| Page | Path | Features <br> _(Logged Out)_ | Additional Features <br> _(Logged In)_ |
|:---:|:---:|---|---|
| [Nav bar](../master/src/components/common/nav.js) | _On all pages_ | - Navigate to pages that do not require login <br> - Login or register | - Navigate to SecureRoute pages <br> - Logout |
| [Home](../master/src/components/pages/home.js) | / | View the app name/logo and tagline | |
| [About](../master/src/components/pages/about.js) | /about | View the value proposition/brief explanation |  |
| [Login](../master/src/components/auth/login.js) | /login | Login as a returning (registered) users | |
| [Register](../master/src/components/auth/register.js) | /register | Register as a new user | |
| [Books (All)](../master/src/components/books/booksAll.js) | /books | View all books in the database | View the distance between the logged in user's library and the libraries that the books are in  |
| [Book Show (Individual books)](../master/src/components/books/bookShow.js) | /books/:id |  View details of the chosen book: <br> - Book title <br> - Author <br> - Rating and reviews <br> - Owner information <br> - Loan request functionality |  - All users can rate and review the book <br> - Existing reviews can be deleted by the user that created the review <br> - Users that own the book can remove/delete it <br> - Users that don't own the book can create loan requests |
| [Book Add](../master/src/components/books/bookAdd.js) | /books/add | _Login required to access this page_ | Add a book by filling in a blank [BookForm](../master/src/components/books/bookForm.js) with the following: <br> - Text fields for title, author, image URL <br> - Select dropdown with options for genre <br> - Checkbox (styled as a toggle button) for non-/fiction <br> - Radio buttons for review <br> - Textarea for description and review |
| [Book Update](../master/src/components/books/bookUpdate.js) | /books/:id/update | _Login required to access this page_ | Users that own the book can change book information by filling in a pre-populated version of the [BookForm](../master/src/components/books/bookForm.js) |
| [Libraries](../master/src/components/books/libraries.js) | /libraries | View all libraries by location, including: <br> - A book count in the marker <br> - Library name, picture and description in a popup |  - View the logged in user's own library location and details <br> - Link to the User Profile page to view and edit user information |
| [Loans](../master/src/components/loans/loansAll.js) | /loans | _Login required to access this page_ | Loan management page for books loaned out and books borrowed |
| [User Profile](../master/src/components/users/userprofile.js) | /users | _Login required to access this page_ | Profile page of the user where they can view and delete their profile and library information |
| [Edit Profile](../master/src/components/users/userEdit.js) | /userEdit | _Login required to access this page_ | Page for users to update their profile and library information |
| [404](../master/src/components/pages/404.js) | /* | Error 404 page for when users attempt to access: <br> - A page they are not authorized to access <br> - A page that does not exist | &nbsp; |

#### Forms

| Form | Description |
|---|---|
| Book Form | Used for creating and updating book information: <br> - Text fields for title, author, image URL <br> - Select dropdown with options for genre <br> - Checkbox (styled as a toggle button) for non-/fiction <br> - Radio buttons for review <br> - Textarea for description and review |
| Loan Form | Used for creating loan requests: <br> - Loan start date <br> - Loan end date <br> Loan updating is not handled by this form |
| User Form | Used for creating and updating user information: <br> - Text fields for username, email, password, password confirmation and profile picture <br> and library information: <br> - Mapbox map for library location


#### Loan Management

.........................??


#### Styling

Orjon?
....Mainly Bulma... custom.....[SCSS](./src/style.scss)...


### Back End

#### Models
##### [User](../master/models/user.js)

Login/authentication credentials, as well as profile and library information

```js
const userSchema = new mongoose.Schema({
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
```
 - Virtual fields were also included for books, loans and password confirmation

##### [Genre](../master/models/bookGenre.js)

A simple Mongoose Schema containing one string for the genre name/title

```js
const bookGenreSchema = new mongoose.Schema({
 genre: { type: String, required: true }
})
```
 - Genres were created separately from books so that the list could be scaled up as required

##### [Book](../master/models/book.js)

Book information with references to the BookGenre and User schemas, as well as information for book ratings and reviews

```js
const ratingSchema = new mongoose.Schema({
 rating: {type: Number, min: 1, max: 5},
 user: {type: mongoose.Schema.ObjectId, ref: 'User',  autopopulate: true }
})
```
```js
const reviewSchema = new mongoose.Schema({
 review: {type: String},
 user: {type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true }
})
```
```js
const bookSchema = new mongoose.Schema({
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
```
- Virtual fields were also used for book loans
- Where `autopopulate: true` can be seen, mongoose-autopopulate has been used to autopopulate the local field (e.g. owner) with information from the referenced model (e.g. User)

##### [Loan](../master/models/loan.js)

Loan information with references to the Book and User schemas

```js
const loanSchema = new mongoose.Schema({
 book: { type: mongoose.Schema.ObjectId, ref: 'Book'},
 borrower: { type: mongoose.Schema.ObjectId, ref: 'User'},
 start: { type: Date, required: true},
 end: { type: Date, required: true},
 message: { type: String },
 approved: { type: Boolean },
 declined: { type: Boolean },
 collected: { type: Date },
 returned: { type: Date}
}, {
 timestamps: true
})
```

#### Controllers

##### [Authentication](../master/controllers/auth.js)

User login and registration functionality with JSON Web Tokens (JWT)

 ```js
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

##### [Users](../master/controllers/users.js)

Complete CRUD cycle for users:

| CRUD | API Route | HTTP Method |
|---|---|---|
| Create | /api/register | POST |
| Read | /api/users <br> /api/users/:id | GET |
| Update | /api/users/:id | PUT |
| Delete | /api/users/:id | DELETE |

  ```js
// Example: Show information on a specific user (CRUD - Read)

function userShow(req, res) {
  User
    .findById(req.params.id)
    .then(user => res.status(200).json(user))
    .catch(err => res.json(err))
}
  ```

##### [Genres](../master/controllers/genres.js)

Read only (no Create, Update or Delete for genres):

| CRUD | API Route | HTTP Method |
|---|---|---|
| Read | /api/genres | GET |

  ```js
// Example: Show all genres (CRUD - Read)

function genresAll(req, res) {
  Genres
    .find()
    .then(genres => res.json(genres))
    .catch(e => console.log(e))
}
  ```

##### [Books](../master/controllers/books.js), _including reviews and ratings_

Complete CRUD cycle for books:

| CRUD | API Route | HTTP Method |
|---|---|---|
| Create | /api/books | POST |
| Read | /api/books <br> /api/books/:id | GET |
| Update | /api/books/:id | PUT |
| Delete | /api/books/:id | DELETE |

```js
// Example: Delete a book (CRUD - Delete)

function bookDelete(req, res) {
  Book
    .findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.status(500).json(err))
}
```

Create and Delete for reviews, Create only for ratings:

  | CRUD | API Route | HTTP Method |
  |---|---|---|
  | Create | /api/books/:id/review <br> /api/books/:id/rating | POST |
  | Delete | /api/books/:id/review/:reviewId | DELETE |

- _No Read is required as this information is sent with the books_


  ```js
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

##### [Loans](../master/controllers/loans.js)

Complete CRUD cycle for loans:

| CRUD | API Route | HTTP Method |
|---|---|---|
| Create | /api/books/:id/loan | POST |
| Read | /api/loans <br> /api/loans/:id | GET |
| Update | /api/loans/:id | PUT |
| Delete | /api/loans/:id | DELETE |

  ```js
// Example: Update loan information (CRUD - Update)

function loanUpdate(req, res) {
  Loan
    .findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
    .exec()
    .then(loan => res.status(200).json(loan))
    .catch(err => res.status(500).json(err))
}
  ```


#### Configuration
##### [Environment](../master/config/environment.js)
Set up for the environment, port, database URI and secret

##### [Routes](../master/config/routes.js)

Pathways to the controller functions for the CRUD cycle

 ```js
// Example: Routes for /books and /books/:id
// Note that some routes are secure and some are not

router.route('/books')
 .get(books.booksAll)
 .post(secureRoute, books.bookCreate)

router.route('/books/:id')
 .get(books.bookShow)
 .put(secureRoute, books.bookUpdate)
 .delete(secureRoute, books.bookDelete)
 ```

#### Library

##### [Error handler](../master/lib/errorHandler.js)

For custom error messages and response statuses

```js
// Example 401 Unauthorized:

if (err.message === 'Unauthorized') {
  return res.status(401).json({ message: 'Unauthorized' })
}
```

##### [Secure route](../master/lib/secureRoute.js)

Functionality to restrict access by unregistered and not logged in users

```js
function secureRoute(req, res, next) {
 // Check if the request has an Authorization header
 if (!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' })
 // Remove 'Bearer ' from the Authorization header to just be left with the token
 const token = req.headers.authorization.replace('Bearer ', '')
 // Use jwt verify to check if the token is a valid JSON Web Token
 new Promise((resolve, reject) => {
   jwt.verify(token, secret, (err, payload) => {
     if (err) reject(err)
     resolve(payload)
   })
 })
  // If the token is valid, the promise will be resolved and the payload sub (user id) can be used to find the user associated to the token
   .then(payload => User.findById(payload.sub))
   .then(user => {
     if (!user) return res.status(401).json({ message: 'Unauthorized' })
     req.currentUser = user
     next()
   })
   // If the token is not valid, the promise will be rejected and the catch block will run
   .catch(next)
}
```

#### Database
##### [Seeds](../master/db/seeds.js)

To drop the current database and populate it with:
  - 11 users
  - 11 genres
  - 91 books
  - 24 loan requests


###### Seeds promises
In the seeds file, JavaScript promises were used to ensure that the database is always seeded in the correct order. This is because certain data models require others to exist before they can be created:
  - Books can only be created once users (book owners) and genres have been created
  - Loans can only be created once users and books have been created

```js
// Exmaple of Promise in seeds.js:

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


#### [Testing](../master/test)

Ru...............

## Future Features

## Key Learnings
