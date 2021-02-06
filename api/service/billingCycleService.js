const BillingCycle = require('../model/billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);

module.exports = BillingCycle;