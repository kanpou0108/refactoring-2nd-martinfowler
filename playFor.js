const plays = require('./plays.json')

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}

module.exports = playFor
