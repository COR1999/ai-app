// Single source of truth for every price shown on the site.
//
// Change a number here and it updates automatically wherever it appears:
// the home-page banner, the services page (hero, pricing cards, body copy
// and metadata) and the pricing FAQ. Do not hardcode prices anywhere else.
export const pricing = {
  currency: '€',
  setupFrom: 99, // one-off setup fee, from
  carePlanMonthly: 25, // Care plan, per month
  hostingOnlyMonthly: 10, // Hosting-only, per month
  domainRenewalMin: 15, // yearly domain renewal, low end
  domainRenewalMax: 20, // yearly domain renewal, high end
} as const;

const {
  currency,
  setupFrom,
  carePlanMonthly,
  hostingOnlyMonthly,
  domainRenewalMin,
  domainRenewalMax,
} = pricing;

// Pre-formatted strings so the exact wording lives in one place too.
export const priceLabels = {
  setupFrom: `from ${currency}${setupFrom}`, // "from €99"
  carePlanMonthly: `${currency}${carePlanMonthly}`, // "€25"
  hostingOnlyMonthly: `${currency}${hostingOnlyMonthly}`, // "€10"
  domainRenewalRange: `${currency}${domainRenewalMin} to ${currency}${domainRenewalMax}`, // "€15 to €20"
  setupPlusMonthly: `${currency}${setupFrom} setup + ${currency}${carePlanMonthly}/month`, // "€99 setup + €25/month"
} as const;
