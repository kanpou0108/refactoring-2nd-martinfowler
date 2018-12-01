const plays = require('./plays.json')
const invoices = require('./invoices')
const amountFor = require('./amountFor')
const playFor = require('./playFor')
const usd = require('./usd')
const totalVolumeCredits = require('./totalVolumeCredits')
const totalAmount = require('./totalAmount')

function statement (invoice) {
  let result = `Statement for ${invoice.customer}\n`;
  for (let perf of invoice.performances) {
    // print line for this order
    result += `  ${playFor(perf).name}: ${usd(amountFor(perf))} (${perf.audience} seats)\n`;
  }
  result += `Amount owed is ${usd(totalAmount(invoice))}\n`;
  result += `You earned ${totalVolumeCredits(invoice)} credits\n`;
  return result;
}

const result = statement(invoices[0], plays)
console.log(result);
