// get the number in params and return its double
function doubleNumber (req, res) {
  const number = req.params.number
  if (isNaN(number)) {
    res.status(500).send({ error: {
      message: 'input param must be a number'
    } })
  } else {
    const doubledNumber = number * 2
    res.status(200).send({ result: doubledNumber })
  }
}

module.exports = { doubleNumber }
