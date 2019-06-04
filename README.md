
# WDI Project 3 - booker

View this project on Heroku: [https://ga-booker.herokuapp.com](https://ga-booker.herokuapp.com)

## Table of Contents

|1. [Overview](#overview)<br>2. [Team](#team) <br> 3. [Technical Acceptance Criteria](#technical-acceptance-criteria) <br> 4. [Project Proposal](#project-proposal) <br> 5. [Technologies](#technologies) <br> 6. [Team Organisation](#team-organisation---loose-agile-framework) <br> 7. [Wins](#wins) <br> 8. [Challenges](#challenges)|9. [Project Roadmap](#project-roadmap) <br> 10. [Project Deliverables](#project-deliverables---front-end) <br> &nbsp;&nbsp;&nbsp; - [Front End](#project-deliverables---front-end) <br> &nbsp;&nbsp;&nbsp; - [Back End](#project-deliverables---back-end) <br> &nbsp;&nbsp;&nbsp; - [Testing](#testing) <br> 11. [Future Features](#future-features) <br> 12. [Key Learnings](#key-learnings)|
|:---|:---|


## Overview

The third WDI project was to work in a team to deliver a fully-functional user-generated CMS (Content Management System) that includes multiple relationships between database models and consumes at least one public API (Application Programming Interface).

### Scripts for Installation, Setup, Development, Testing and Building


| | yarn | npm |
|---:|:---:|:---:|
| Install Dependencies | `$ yarn` | `$ npm install` |
| Run Server Locally | `$ yarn start:server` | `$ npm run start:server` |
| Run Client Locally | `$ yarn start:client` | `$ npm run start:client` |
| Seed Local Database | `$ yarn seed` | `$ npm run seed` |
| Run Tests Locally  | `$ yarn test` | `$ npm run test` |
| Build with Webpack  | `$ yarn build` | `$ npm run build` |


View the full list of scripts and dependencies in the [`package.json`](./package.json)


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
| React | Node.js | Mocha | yarn |
| ReactDOM | MongoDB (NoSQL) | Chai | Webpack |
| React Router DOM | Express | SuperTest | Babel |
| Bulma | Mongoose | | Axios |
| SCSS | mongoose-autopopulate  | | |
| Mapbox GL JS | JSON Web Tokens (JWT) | | |
| | bcrypt | | |
| | dotenv | | &nbsp; |


View the full list of dependencies and dev dependencies in the [`package.json`](./package.json)


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

### User journey

Early in the development stage we broke down all the application's functions into groups that would become the 'pages' of the application. These were sketched out on pieces of paper and the arrangement of these helped us to map out a clear user journey, and separate concerns.

![User journey](./src/assets/readme/planning_wireframe_userflow.jpg)

This was an iterative, sometimes subjective, but ultimately very constructive process. Sketching out the user flows in this way greatly assisted in structuring the code and filing.

### Database Structure

![Database Structure](./src/assets/readme/planning_db_structure.jpg)


## Project Deliverables - Front End

### Pages

| Page | Path | Features <br> _(Logged Out)_ | Additional Features <br> _(Logged In)_ |
|:---:|:---:|---|---|
| [Nav bar](./src/components/common/nav.js) | _On all pages_ | - Navigate to pages that do not require login <br> - Login or register | - Navigate to SecureRoute pages <br> - Logout |
| [Home](./src/components/pages/home.js) | / | View the app name/logo and tagline | |
| [About](./src/components/pages/about.js) | /about | View the value proposition/brief explanation |  |
| [Login](./src/components/auth/login.js) | /login | Login as a returning (registered) users | |
| [Register](./src/components/auth/register.js) | /register | Register as a new user | |
| [Books (All)](./src/components/books/booksAll.js) | /books | View all books in the database | View the distance between the logged in user's library and the libraries that the books are in  |
| [Book Show (Individual books)](./src/components/books/bookShow.js) | /books/:id |  View details of the chosen book: <br> - Book title <br> - Author <br> - Rating and reviews <br> - Owner information <br> - Loan request functionality |  - All users can rate and review the book <br> - Existing reviews can be deleted by the user that created the review <br> - Users that own the book can remove/delete it |
| [Book Add](./src/components/books/bookAdd.js) | /books/add | _Login required to access this page_ | Add a book by filling in a blank [BookForm](./src/components/books/bookForm.js) with the following: <br> - Text fields for title, author, image URL <br> - Select dropdown with options for genre <br> - Checkbox (styled as a toggle button) for non-/fiction <br> - Radio buttons for review <br> - Textarea for description and review |
| [Book Update](./src/components/books/bookUpdate.js) | /books/:id/update | _Login required to access this page_ | Users that own the book can change book information by filling in a pre-populated version of the [BookForm](./src/components/books/bookForm.js) |
| [Book Loan](./src/components/books/bookLoan.js) | /books/:id/loan | _Login required to access this page_ | Users that don't own the book can create loan requests |
| [Libraries](./src/components/books/libraries.js) | /libraries | View all libraries by location, including: <br> - A book count in the marker <br> - Library name, picture and description in a popup |  - View the logged in user's own library location and details <br> - Link to the User Profile page to view and edit user information |
| [Loans](./src/components/loans/loansAll.js) | /loans | _Login required to access this page_ | Loan management page for books loaned out and books borrowed |
| [User Profile](./src/components/users/userprofile.js) | /users | _Login required to access this page_ | Profile page of the user where they can view and delete their profile and library information |
| [Edit Profile](./src/components/users/userEdit.js) | /userEdit | _Login required to access this page_ | Page for users to update their profile and library information |
| [404](./src/components/pages/404.js) | /* | Error 404 page for when users attempt to access a page that does not exist | &nbsp; |

#### Home and About

| Homepage | About Page |
|:--:|:--:|
|![Homepage](./src/assets/readme/frontend_home.png) | ![About page](././src/assets/readme/frontend_about.png) |

#### Login and Register

| Login | Register |
|:--:|:--:|
|![Login](./src/assets/readme/frontend_login.png) | ![Register](././src/assets/readme/frontend_register.png) |

#### Navigation Bar

| Logged Out |
|:--:|
| ![Navbar Logged Out](./src/assets/readme/frontend_nav_loggedout.png) |

| Logged In |
|:--:|
| ![Navbar Logged In](./src/assets/readme/frontend_nav_loggedin.png) |

#### Libraries

| Logged Out | Logged In |
|:--:|:--:|
| ![Libraries Logged Out](./src/assets/readme/frontend_libraries_loggedout.png) | ![Libraries Logged In](./src/assets/readme/frontend_libraries_loggedin.png) |

#### Books

| Viewing all books, filtering by library, searching for a specific book and then rating and reviewing it. |
|:--:|
| ![Books](./src/assets/readme/frontend_books_view_rate_review.gif) |

| Adding a new book from the main Books page |
|:--:|
| ![Adding a book](./src/assets/readme/frontend_books_add.gif) |


#### Book Loans - Borrowed

| Borrowing a book and managing loan requests for books that the logged in user has borrow |
|:--:|
| ![Books Borrowed](./src/assets/readme/frontend_loans_borrowed.gif) |


#### Book Loans - Loaned Out

| Managing loan requests for loans from the logged in user |
|:--:|
| ![Books Loaned Out](./src/assets/readme/frontend_loans_loanedout.gif) |


---
### Forms

| Form | Description |
|---|---|
| [Book Form](./src/components/books/bookForm.js) | Used for creating and updating book information: <br> - Text fields for title, author, image URL <br> - Select dropdown with options for genre <br> - Checkbox (styled as a toggle button) for non-/fiction <br> - Radio buttons for review <br> - Textarea for description and review |
| [Loan Form](./src/components/books/bookLoan.js) | Used for creating loan requests: <br> - Loan start date <br> - Loan end date <br> Loan updating is not handled by this form |
| [User Form](./src/components/users/userform.js) | Used for creating and updating user information: <br> - Text fields for username, email, password, password confirmation and profile picture <br> and library information: <br> - Mapbox map for library location

---
### Loan Management

Loan status changes were handled on the front end - there was no 'status' field stored in the database for each loan request.

To do this, functions were created to filter loans based on requirements that determined their status.

```js
// Example: Some functions used to determine the status of a loan request

isPending(loan) {
  const { approved, declined, returned, end } = loan
  return !approved && !declined && !returned && new Date() < new Date(end)
}

isAwaitingCollection(loan) {
  const { approved, collected, returned } = loan
  return approved && !collected && !returned
}

isOnLoan(loan) {
  const { approved, collected, returned, end } = loan
  return approved && !!collected && !returned && new Date() < new Date(end)
}

isReturned(loan) {
  return !!loan.returned
}

isOverdue(loan) {
  const { end, approved, collected, returned } = loan
  return approved && !!collected && !returned && new Date() > new Date(end)
}
```

This then allowed a certain status to be displayed, as well as a corresponding user action, if one was required.

```js
// Example: If the loan is pending, display the LoanedPending component

{isPending(loan) &&
  <LoanedPending
    className="loan-border-bottom"
    loan={loan}
    approveLoanRequest={approveLoanRequest}
    declineLoanRequest={declineLoanRequest}
  />
}
```

_View the LoanedPending component [here](./src/components/loans/statusButtons/loanedPending.js)_

Functions were also written to handle a PUT axios request to update the loan request in the database

```js
// Example: Function to allow a user to approve a loan request:

approveLoanRequest(e) {
  axios({
    method: 'PUT',
    url: `/api/loans/${e.target.value}`,
    headers: {
      'Authorization': `Bearer ${Auth.getToken()}`
    },
    data: {
      // Here the request is to change 'approved' to true
      approved: true
    }
  })
    .then(() => this.getLoans())
    .catch(err => console.log(err))
}
```

---
### Styling

#### Concept
Of primary styling concern was to keep the interface very simple and intuitive to use.


This begins with the about page which clearly states the purpose of the application.

![About Page](./src/assets/readme/frontend_about.jpg)

#### Bulma Framework

Styling was implemented using the [Bulma CSS framework](https://bulma.io/). Bulma has classes which are structured greatly speed up the process of creating grid layouts in particular, such as we used for the Books (All) page.

![Books All Page](./src/assets/readme/frontend_booksall.jpg)

There are several different sets of information that need to be displayed on the various pages of the site - the aim was to keep these as uniformed as possible. To help visually tie the pages together a colour-coded styling language was developed for the buttons.

| |Buttons|
|:----:|:----|
|Large|![Buttons large](./src/assets/readme/buttons_large.png)|
|Small|![Buttons small](./src/assets/readme/buttons_small.png)|

View the style SCSS file [here](./src/style.scss)

## Project Deliverables - Back End

### Models

#### [User](./models/user.js)

Login/authentication credentials, as well as profile and library information

```js
const userSchema = new mongoose.Schema({
 username: { type: String, required: true, unique: true },
 profilePicture: { type: String },
 email: { type: String, required: true, unique: true },
 password: { type: String, required: true, unique: true },
 libraryName: { type: String, required: true, unique: true },
 location: {
   lat: { type: Number, required: true },
   lng: { type: Number, required: true }
 },
 libraryPicture: { type: String },
 libraryDescription: { type: String },
 userRating: [ userRatingSchema ]
}, {
 timestamps: true
})
```
 - Virtual fields were also included for books, loans and password confirmation

---
#### [Genre](./models/bookGenre.js)

A simple Mongoose Schema containing one string for the genre name/title

```js
const bookGenreSchema = new mongoose.Schema({
 genre: { type: String, required: true }
})
```
 - Genres were created separately from books so that the list could be scaled up as required

---
#### [Book](./models/book.js)

Book information with references to the BookGenre and User schemas, as well as information for book ratings and reviews

```js
const ratingSchema = new mongoose.Schema({
 rating: { type: Number, min: 1, max: 5 },
 user: { type: mongoose.Schema.ObjectId, ref: 'User',  autopopulate: true }
})
```
```js
const reviewSchema = new mongoose.Schema({
 review: { type: String },
 user: { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true }
})
```
```js
const bookSchema = new mongoose.Schema({
 title: { type: String, required: true },
 authors: { type: String },
 image: { type: String },
 fiction: { type: Boolean, required: true},
 genre: { type: mongoose.Schema.ObjectId, ref: 'BookGenre' },
 description: { type: String },
 rating: [ratingSchema],
 review: [reviewSchema],
 owner: { type: mongoose.Schema.ObjectId, ref: 'User', autopopulate: true }
})
```
- Virtual fields were also used for book loans
- Where `autopopulate: true` can be seen, mongoose-autopopulate has been used to autopopulate the local field (e.g. owner) with information from the referenced model (e.g. User)

---
#### [Loan](./models/loan.js)

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
 returned: { type: Date }
}, {
 timestamps: true
})
```

---
### Controllers

#### [Authentication](./controllers/auth.js)

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

---
#### [Users](./controllers/users.js)

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

---
#### [Genres](./controllers/genres.js)

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

---
#### [Books](./controllers/books.js), _including reviews and ratings_

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

---
#### [Loans](./controllers/loans.js)

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

---
### Configuration
#### [Environment](./config/environment.js)
Set up for the environment, port, database URI and secret

---
#### [Routes](./config/routes.js)

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

---
### Library

#### [Error handler](./lib/errorHandler.js)

For custom error messages and response statuses

```js
// Example: 401 Unauthorized

if (err.message === 'Unauthorized') {
  return res.status(401).json({ message: 'Unauthorized' })
}
```

---
#### [Secure route](./lib/secureRoute.js)

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
  // If the token is valid, the promise will be resolved and the payload sub (user id)
  // can be used to find the user associated to the token
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

---
### Database
#### [Seeds](./db/seeds.js)

To drop the current database and populate it with:
  - 11 users
  - 11 genres
  - 91 books
  - 24 loan requests


#### Seeds promises
In the seeds file, JavaScript promises were used to ensure that the database is always seeded in the correct order. This is because certain data models require others to exist before they can be created:
  - Books can only be created once users (book owners) and genres have been created
  - Loans can only be created once users and books have been created

```js
// Example: Promise in seeds.js

// Create users and genres inside a promise array
const promiseArray = [
  User.create([...]),
  BookGenre.create([...])
]

// Wait for all promises to resolve before continuing
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

---
### [Testing](./test)

A test resource was created for the books using Chai and Mocha. SuperTest was also installed to make HTTP calls within the test environment. This meant that a local test environment could be created in the test file with 'dummy data'.

The dummy book data used for the test was stored in a variable called bookData. As defined in the book schema, fields such as title and fiction are required and a test would not pass unless these two fields were filled.

```js
const bookData = {
  title: 'The Hobbit',
  authors: 'J.R.R Tolkien',
  image: 'http://www.orjon.com/dev/booker/images/bookcovers/cover-theHobbit.jpeg',
  fiction: true,
  description: 'In a hole in the ground there lived a hobbit....'
}
```

As some routes (such as posting a book) were secure routes and required user authentication to access them, the user environment and JSON Web Token had to be imported into the test environment.

```js
beforeEach(done => {
  Book.collection.remove()
  Book.create(
    bookData
  )
    .then(() => User.remove({}))
    .then(() => User.create({
      username: 'test',
      email: 'test',
      password: 'test',
      passwordConfirmation: 'test',
      location: {
        lat: 51.4,
        lng: 21
      },
      libraryName: 'test'

    }))
    .then(user => {
      token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' })
      done()
    })

    .catch(done)
})
```

```js
describe('POST /api/books', () => {
  it('should return a 201 response', done => {
    api
      .post('/api/books')
      .set({ 'Accept': 'application/json', 'Authorization': `Bearer ${token}`})
      .send(bookData)
      .end((err, res) => {
        console.log(err)
        expect(res.status).to.eq(201)
        done()
      })
  })
```

#### How to run tests

Tests can be run from the command line using yarn or npm:

```
$ yarn test
```
```
$ npm run test
```

| Running tests in iTerm2 with yarn |
|:--:|
|![Testing](./src/assets/readme/testing.png)|



## Future Features

- Select dropdown to filter loans by status
- Button on the Libraries page that links from a library popup to the books page filtered by books belonging to that library
- Messaging between users
- Book loan notifications (i.e. 'New book loan request', 'Book loan approved', 'Book due to be returned in X days', etc.)


## Key Learnings

- Building a functioning full-stack app where requests can successfully display information on the front end (read) and data can be created/updated/deleted on the back end
- Promises in JavaScript
- Back end testing
- Back end error handling
- Custom SCSS on top of Bulma CSS Framework
