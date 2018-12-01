const plays = require('./plays.json')
const invoices = require('./invoices')
const amountFor = require('./amountFor')
const playFor = require('./playFor')
const usd = require('./usd')
const totalVolumeCredits = require('./totalVolumeCredits')

function statement (invoice) {
  let totalAmount = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    // print line for this order
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
    totalAmount += amountFor(perf);
  }

  result += `Amount owed is ${usd(totalAmount)}\n`;
  result += `You earned ${totalVolumeCredits(invoice)} credits\n`;
  return result;
}

const result = statement(invoices[0], plays)
console.log(result);
