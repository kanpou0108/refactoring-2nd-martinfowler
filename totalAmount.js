const amountFor = require('./amountFor')

function totalAmount(invoice) {
  let totalAmount = 0;
  for (let perf of invoice.performances) {
    totalAmount += amountFor(perf);
  }
  return totalAmount;
}

module.exports = totalAmount
