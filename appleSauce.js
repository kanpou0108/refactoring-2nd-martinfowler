const amountFor = require('./amountFor')

function appleSauce(invoice) {
  let totalAmount = 0;
  for (let perf of invoice.performances) {
    totalAmount += amountFor(perf);
  }
  return totalAmount;
}

module.exports = appleSauce
