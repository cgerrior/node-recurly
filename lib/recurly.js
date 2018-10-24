(function() {
  const js2xmlparser = require('js2xmlparser'),
    Client = require('./client'),
    utils = require('./utils'),
    router = require('./routes/');

  module.exports = function(config) {
    const routes = router.routes(config.API_VERSION ? config.API_VERSION : '2');
    const t = Client.create(config);

    this.lib = {
      core: t,
      utils: utils,
    };
    //https://dev.recurly.com/docs/list-accounts
    this.accounts = {
      list: function(filter, callback) {
        t.request(utils.addQueryParams(routes.accounts.list, filter), callback);
      },
      get: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.accounts.get, { account_code: accountcode }),
          callback,
        );
      },
      create: function(details, callback) {
        t.request(
          routes.accounts.create,
          callback,
          js2xmlparser('account', details),
        );
      },
      update: function(accountcode, details, callback) {
        t.request(
          utils.addParams(routes.accounts.update, {
            account_code: accountcode,
          }),
          callback,
          js2xmlparser('account', details),
        );
      },
      close: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.accounts.close, { account_code: accountcode }),
          callback,
        );
      },
      reopen: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.accounts.reopen, {
            account_code: accountcode,
          }),
          callback,
        );
      },
      notes: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.accounts.notes, { account_code: accountcode }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-an-accounts-adjustments
    this.adjustments = {
      list: function(accountcode, filter, callback) {
        t.request(
          utils.addParams(
            utils.addQueryParams(routes.adjustments.list, filter),
            { account_code: accountcode },
          ),
          callback,
        );
      },
      get: function(uuid, callback) {
        t.request(
          utils.addParams(routes.adjustments.get, { uuid: uuid }),
          callback,
        );
      },
      create: function(accountcode, details, callback) {
        t.request(
          utils.addParams(routes.adjustments.create, {
            account_code: accountcode,
          }),
          callback,
          js2xmlparser('adjustment', details),
        );
      },
      remove: function(uuid, callback) {
        t.request(
          utils.addParams(routes.adjustments.remove, { uuid: uuid }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/lookup-an-accounts-billing-info
    this.billingInfo = {
      update: function(accountcode, details, callback) {
        t.request(
          utils.addParams(routes.billingInfo.update, {
            account_code: accountcode,
          }),
          callback,
          js2xmlparser('billing_info', details),
        );
      },
      create: function(accountcode, details, callback) {
        t.request(
          utils.addParams(routes.billingInfo.update, {
            account_code: accountcode,
          }),
          callback,
          js2xmlparser('billing_info', details),
        );
      },
      get: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.billingInfo.get, {
            account_code: accountcode,
          }),
          callback,
        );
      },
      remove: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.billingInfo.remove, {
            account_code: accountcode,
          }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-active-coupons
    this.coupons = {
      list: function(filter, callback) {
        t.request(utils.addQueryParams(routes.coupons.list, filter), callback);
      },
      get: function(couponcode, callback) {
        t.request(
          utils.addParams(routes.coupons.get, { coupon_code: couponcode }),
          callback,
        );
      },
      create: function(details, callback) {
        t.request(
          routes.coupons.create,
          callback,
          js2xmlparser('coupon', details),
        );
      },
      deactivate: function(couponcode, callback) {
        t.request(
          utils.addParams(routes.coupons.deactivate, {
            coupon_code: couponcode,
          }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/lookup-a-coupon-redemption-on-an-account
    this.couponRedemption = {
      redeem: function(couponcode, details, callback) {
        t.request(
          utils.addParams(routes.couponRedemption.redeem, {
            coupon_code: couponcode,
          }),
          callback,
          js2xmlparser('redemption', details),
        );
      },
      get: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.couponRedemption.get, {
            account_code: accountcode,
          }),
          callback,
        );
      },
      remove: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.couponRedemption.remove, {
            account_code: accountcode,
          }),
          callback,
        );
      },
      getByInvoice: function(invoicenumber, callback) {
        t.request(
          utils.addParams(routes.couponRedemption.getByInvoice, {
            invoice_number: invoicenumber,
          }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-invoices
    this.invoices = {
      list: function(filter, callback) {
        t.request(utils.addQueryParams(routes.invoices.list, filter), callback);
      },
      listByAccount: function(accountcode, filter, callback) {
        t.request(
          utils.addParams(
            utils.addQueryParams(routes.invoices.listByAccount, filter),
            { account_code: accountcode },
          ),
          callback,
        );
      },
      get: function(invoicenumber, callback) {
        t.request(
          utils.addParams(routes.invoices.get, {
            invoice_number: invoicenumber,
          }),
          callback,
        );
      },
      create: function(accountcode, details, callback) {
        t.request(
          utils.addParams(routes.invoices.create, {
            account_code: accountcode,
          }),
          callback,
          js2xmlparser('invoice', details),
        );
      },
      preview: function(accountcode, callback) {
        t.request(
          utils.addParams(routes.invoices.preview, {
            account_code: accountcode,
          }),
          callback,
        );
      },
      refundLineItems: function(invoicenumber, details, callback) {
        t.request(
          utils.addParams(routes.invoices.refundLineItems, {
            invoice_number: invoicenumber,
          }),
          callback,
          js2xmlparser('invoice', details),
        );
      },
      refundOpenAmount: function(invoicenumber, details, callback) {
        t.request(
          utils.addParams(routes.invoices.refundOpenAmount, {
            invoice_number: invoicenumber,
          }),
          callback,
          js2xmlparser('invoice', details),
        );
      },
      markSuccessful: function(invoicenumber, callback) {
        t.request(
          utils.addParams(routes.invoices.markSuccessful, {
            invoice_number: invoicenumber,
          }),
          callback,
        );
      },
      markFailed: function(invoicenumber, callback) {
        t.request(
          utils.addParams(routes.invoices.markFailed, {
            invoice_number: invoicenumber,
          }),
          callback,
        );
      },
      enterOfflinePayment: function(invoicenumber, details, callback) {
        t.request(
          utils.addParams(routes.invoices.enterOfflinePayment, {
            invoice_number: invoicenumber,
          }),
          callback,
          js2xmlparser('transaction', details),
        );
      },
    };

    //https://dev.recurly.com/docs/list-plans
    this.plans = {
      list: function(filter, callback) {
        t.request(utils.addQueryParams(routes.plans.list, filter), callback);
      },
      get: function(plancode, callback) {
        t.request(
          utils.addParams(routes.plans.get, { plan_code: plancode }),
          callback,
        );
      },
      create: function(details, callback) {
        t.request(routes.plans.create, callback, js2xmlparser('plan', details));
      },
      update: function(plancode, details, callback) {
        t.request(
          utils.addParams(routes.plans.update, { plan_code: plancode }),
          callback,
          js2xmlparser('plan', details),
        );
      },
      remove: function(plancode, callback) {
        t.request(
          utils.addParams(routes.plans.remove, { plan_code: plancode }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-add-ons-for-a-plan
    this.planAddons = {
      list: function(plancode, filter, callback) {
        t.request(
          utils.addParams(
            utils.addQueryParams(routes.planAddons.list, filter),
            { plan_code: plancode },
          ),
          callback,
        );
      },
      get: function(plancode, addoncode, callback) {
        t.request(
          utils.addParams(routes.planAddons.get, {
            plan_code: plancode,
            addon_code: addoncode,
          }),
          callback,
        );
      },
      create: function(plancode, details, callback) {
        t.request(
          utils.addParams(routes.planAddons.create, { plan_code: plancode }),
          callback,
          js2xmlparser('add_on', details),
        );
      },
      update: function(plancode, addoncode, details, callback) {
        t.request(
          utils.addParams(routes.planAddons.update, {
            plan_code: plancode,
            add_on_code: addoncode,
          }),
          callback,
          js2xmlparser('add_on', details),
        );
      },
      remove: function(plancode, addoncode, callback) {
        t.request(
          utils.addParams(routes.planAddons.remove, {
            plan_code: plancode,
            add_on_code: addoncode,
          }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-subscriptions
    this.subscriptions = {
      list: function(filter, callback) {
        t.request(
          utils.addQueryParams(routes.subscriptions.list, filter),
          callback,
        );
      },
      listByAccount: function(accountcode, filter, callback) {
        t.request(
          utils.addParams(
            utils.addQueryParams(routes.subscriptions.listByAccount, filter),
            { account_code: accountcode },
          ),
          callback,
        );
      },
      get: function(uuid, callback) {
        t.request(
          utils.addParams(routes.subscriptions.get, { uuid: uuid }),
          callback,
        );
      },
      create: function(details, callback) {
        t.request(
          routes.subscriptions.create,
          callback,
          js2xmlparser('subscription', details),
        );
      },
      preview: function(details, callback) {
        t.request(
          routes.subscriptions.preview,
          callback,
          js2xmlparser('subscription', details),
        );
      },
      update: function(uuid, details, callback) {
        t.request(
          utils.addParams(routes.subscriptions.update, { uuid: uuid }),
          callback,
          js2xmlparser('subscription', details),
        );
      },
      updateNotes: function(uuid, details, callback) {
        t.request(
          utils.addParams(routes.subscriptions.updateNotes, { uuid: uuid }),
          callback,
          js2xmlparser('subscription', details),
        );
      },
      updatePreview: function(uuid, details, callback) {
        t.request(
          utils.addParams(routes.subscriptions.updatePreview, { uuid: uuid }),
          callback,
          js2xmlparser('subscription', details),
        );
      },
      cancel: function(uuid, callback) {
        t.request(
          utils.addParams(routes.subscriptions.cancel, { uuid: uuid }),
          callback,
        );
      },
      reactivate: function(uuid, callback) {
        t.request(
          utils.addParams(routes.subscriptions.reactivate, { uuid: uuid }),
          callback,
        );
      },
      terminate: function(uuid, refundType, callback) {
        t.request(
          utils.addParams(routes.subscriptions.terminate, {
            uuid: uuid,
            refund_type: refundType,
          }),
          callback,
        );
      },
      postpone: function(uuid, nextRenewalDate, callback) {
        t.request(
          utils.addParams(routes.subscriptions.postpone, {
            uuid: uuid,
            next_renewal_date: nextRenewalDate,
          }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-add-ons-usage
    this.usage = {
      list: function(uuid, addOnCode, billingStatus, callback) {
        billingStatus = billingStatus || 'all';
        t.request(
          utils.addParams(routes.usage.list, {
            uuid: uuid,
            add_on_code: addOnCode,
            billing_status: billingStatus,
          }),
          callback,
        );
      },
      log: function(uuid, addOnCode, details, callback) {
        t.request(
          utils.addParams(routes.usage.log, {
            uuid: uuid,
            add_on_code: addOnCode,
          }),
          callback,
          js2xmlparser('usage', details),
        );
      },
      get: function(uuid, addOnCode, usageId, callback) {
        t.request(
          utils.addParams(routes.usage.get, {
            uuid: uuid,
            add_on_code: addOnCode,
            usage_id: usageId,
          }),
          callback,
        );
      },
      update: function(uuid, addOnCode, usageId, details, callback) {
        t.request(
          utils.addParams(routes.usage.update, {
            uuid: uuid,
            add_on_code: addOnCode,
            usage_id: usageId,
          }),
          callback,
          js2xmlparser('usage', details),
        );
      },
      remove: function(uuid, addOnCode, usageId, callback) {
        t.request(
          utils.addParams(routes.usage.remove, {
            uuid: uuid,
            add_on_code: addOnCode,
            usage_id: usageId,
          }),
          callback,
        );
      },
    };

    //https://dev.recurly.com/docs/list-transactions
    this.transactions = {
      list: function(filter, callback) {
        t.request(
          utils.addQueryParams(routes.transactions.list, filter),
          callback,
        );
      },
      listByAccount: function(accountCode, filter, callback) {
        t.request(
          utils.addParams(
            utils.addQueryParams(routes.transactions.listByAccount, filter),
            { account_code: accountCode },
          ),
          callback,
        );
      },
      get: function(id, callback) {
        t.request(
          utils.addParams(routes.transactions.get, { id: id }),
          callback,
        );
      },
      create: function(details, callback) {
        t.request(
          routes.transactions.create,
          callback,
          js2xmlparser('transaction', details),
        );
      },
      refund: function(id, amount, callback) {
        let route = utils.addParams(routes.transactions.refund, { id: id });
        if (amount) {
          route = utils.addQueryParams(route, { amount_in_cents: amount });
        }
        t.request(route, callback);
      },
    };

    //https://dev.recurly.com/docs/list-accounts-shipping-address
    this.shippingAddress = {
      get: (accountCode, shipping_address_id, cb) => {
        t.request(
          utils.addParams(routes.shippingAddress.get, {
            account_code: accountCode,
            shipping_address_id: shipping_address_id,
          }),
          cb,
        );
      },
      listByAccount: (accountCode, filter, cb) => {
        t.request(
          utils.addParams(routes.shippingAddress.listByAccount, {
            account_code: accountCode,
          }),
          cb,
        );
      },
      create: (accountCode, details, cb) => {
        t.request(
          utils.addParams(routes.shippingAddress.create, {
            account_code: accountCode,
          }),
          cb,
          js2xmlparser('shipping_address', details),
        );
      },
      update: (accountCode, shipping_address_id, details, cb) => {
        t.request(
          utils.addParams(routes.shippingAddress.update, {
            account_code: accountCode,
            shipping_address_id: shipping_address_id,
          }),
          cb,
          js2xmlparser('shipping_address', details),
        );
      },
      remove: (accountCode, shipping_address_id, cb) => {
        t.request(
          utils.addParams(routes.shippingAddress.remove, {
            account_code: accountCode,
            shipping_address_id: shipping_address_id,
          }),
          cb,
        );
      },
    };
  }; //end class
})();
