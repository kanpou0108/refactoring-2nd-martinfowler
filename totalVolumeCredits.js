const volumeCreditsFor = require('./volumeCreditsFor')

function totalVolumeCredits(invoice) {
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    volumeCredits += volumeCreditsFor(perf);
  }
  return volumeCredits;
}

module.exports = totalVolumeCredits
