/* eslint-env mocha */

const expect = require('chai').expect

const { doubleNumber } = require('../../routes/numbers')

let req = {
  params: {
    number: 2
  },
  body: {}
}

let reqWithError = {
  params: {
    number: 'hello'
  },
  body: {}
}

let res = {
  sendCalledWith: '',
  send: function (arg) {
    this.sendCalledWith = arg
  },
  status: function (s) { this.statusCode = s; return this }
}

describe('Double Number route', function () {
  describe('doubleNumber() function', function () {
    it('Should return the double of provided number', function () {
      doubleNumber(req, res)
      console.log(res)
      expect(res.statusCode).to.equals(200)
      expect(res.sendCalledWith.result).to.equals(4)
    })
  })
})

describe('Double Number route', function () {
  describe('doubleNumber() function', function () {
    it('Should return error 500 when provided param is NaN', function () {
      doubleNumber(reqWithError, res)
      console.log(res)
      expect(res.statusCode).to.equals(500)
    })
  })
})
