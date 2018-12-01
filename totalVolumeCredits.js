const volumeCreditsFor = require('./volumeCreditsFor')

function totalVolumeCredits(invoice) {
  let result = 0;
  for (let perf of invoice.performances) {
    result += volumeCreditsFor(perf);
  }
  return result;
}

module.exports = totalVolumeCredits
