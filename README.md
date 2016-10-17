Node-Recurly
===============

node-recurly is a node.js library for using the recurly recurring billing service. This library is intended to follow very closely the recurly documentation found at:
http://dev.recurly.com/

Installation
===============

	git clone https://github.com/cgerrior/node-recurly.git
	
or you can install with NPM

	npm install https://github.com/cgerrior/node-recurly.git --save

add a config file to your project that has contents similar to:

		module.exports = {
			API_KEY: 'secret',
			SUBDOMAIN:    '[your_account]',
			ENVIRONMENT:  'sandbox',
			DEBUG: false
		};


Usage
===============

		var Recurly = require('node-recurly');
		var recurly = new Recurly(require('./config'));

After that, just call the methods below:


Accounts
===============
https://dev.recurly.com/docs/list-accounts

	recurly.accounts.list(filter, callback)

	recurly.accounts.create(details, callback)

	recurly.accounts.update(accountcode, details, callback) 

	recurly.accounts.get(accountcode, callback) 

	recurly.accounts.close(accountcode, callback) 

	recurly.accounts.reopen(accountcode, callback)
  
    recurly.accounts.notes(accountcode, callback)

Adjustments
===============
https://dev.recurly.com/docs/list-an-accounts-adjustments

	recurly.adjustments.list(accountcode, callback)
  
    recurly.adjustments.get(uuid, callback)
  
	recurly.adjustments.create(accountcode, details, callback)

	recurly.adjustments.remove(uuid, callback)

Billing Information
===============
https://dev.recurly.com/docs/lookup-an-accounts-billing-info

	recurly.billingInfo.update(accountcode, details, callback)

	recurly.billingInfo.create(accountcode, details, callback) 

	recurly.billingInfo.get(accountcode, callback) 

	recurly.billingInfo.remove(accountcode, callback) 


Coupons
===============
https://dev.recurly.com/docs/list-active-coupons

	recurly.coupons.list(filter, callback)

	recurly.coupons.get(couponcode, callback)

	recurly.coupons.create(details, callback)

	recurly.coupons.deactivate(couponcode, callback)

Coupon Redemptions
=================
https://dev.recurly.com/docs/lookup-a-coupon-redemption-on-an-account
  
	recurly.couponRedemption.redeem(couponcode, details, callback)

	recurly.couponRedemption.get(accountcode, callback)

	recurly.couponRedemption.remove(accountcode, callback)

	recurly.couponRedemption.getByInvoice(invoicenumber, callback)

Invoices
===============
https://dev.recurly.com/docs/list-invoices

	recurly.invoices.list(filter, callback)

	recurly.invoices.listByAccount(accountcode, filter, callback)

	recurly.invoices.get(invoicenumber, callback)
  
	recurly.invoices.create(accountcode, details, callback)

	recurly.invoices.preview(accountcode, callback)

    recurly.invoices.refundLineItems(invoicenumber, details, callback)

    recurly.invoices.refundOpenAmount(invoicenumber, details, callback)

	recurly.invoices.markSuccessful(invoicenumber, callback)

	recurly.invoices.markFailed(invoicenumber, callback)

    recurly.invoices.enterOfflinePayment(invoicenumber, details, callback)

(Subscription) Plans
==================
https://dev.recurly.com/docs/list-plans

	recurly.plans.list(filter, callback)

	recurly.plans.get(plancode, callback) 

	recurly.plans.create(details, callback)
  
	recurly.plans.update(plancode, details, callback)
  
	recurly.plans.remove(plancode, callback)

Plan Add-ons
==================
https://dev.recurly.com/docs/list-add-ons-for-a-plan

	recurly.planAddons.list(plancode, filter, callback)

	recurly.planAddons.get(plancode, addoncode, callback) 
  
	recurly.planAddons.create(plancode, details, callback)
  
	recurly.planAddons.update(plancode, addoncode, details, callback)
  
	recurly.planAddons.remove(plancode, addoncode, callback)

Subscriptions
===============
https://dev.recurly.com/docs/list-subscriptions

	recurly.subscriptions.list(filter, callback)

	recurly.subscriptions.listByAccount(accountcode, filter, callback) 

	recurly.subscriptions.get(uuid, callback) 

	recurly.subscriptions.create(details, callback) 
  
    recurly.subscriptions.preview(details, callback) 
  
	recurly.subscriptions.update(uuid, details, callback) 
  
    recurly.subscriptions.updateNotes(uuid, details, callback)
  
    recurly.subscriptions.updatePreview(uuid, details, callback)
  
	recurly.subscriptions.cancel(uuid, callback) 
  
	recurly.subscriptions.reactivate(uuid, callback) 
  
	recurly.subscriptions.terminate(uuid, refundType, callback) 

	recurly.subscriptions.postpone(uuid, nextRenewalDate, callback) 

Subscription Usage
===============
https://dev.recurly.com/docs/list-add-ons-usage

	recurly.usage.list(uuid, addOnCode, billingStatus, callback)

	recurly.usage.log(uuid, addOnCode, details, callback)

	recurly.usage.get(uuid, addOnCode, usageId, callback)

	recurly.usage.update(uuid, addOnCode, usageId, details, callback)

    recurly.usage.remove(uuid, addOnCode, usageId, callback)

Transactions
===============
https://dev.recurly.com/docs/list-transactions

	recurly.transactions.list(filter, callback)

	recurly.transactions.listByAccount(accountcode, filter, callback)

	recurly.transactions.get(id, callback) 

	recurly.transactions.create(details, callback) 

	recurly.transactions.refund(id, amount, callback)
