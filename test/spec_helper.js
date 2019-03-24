process.env.NODE_ENV = 'test'


const chai = require('chai') //global exists instead of the window if in node
global.should = chai.should()
global.expect = chai.expect

const supertest = require('supertest')
const app = require('../index') //this takes the entire app and adds the global supertest to it
global.api = supertest(app)
