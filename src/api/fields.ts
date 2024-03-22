const FIELDS_ABOUT_US_PAGE = `*,cards.CardItem_id.*,coreValues.CardItem_id.*`;
const FIELDS_BANNER = `*`;
const FIELDS_BUTTON = `*`;
const FIELDS_NAVIGATION = `*`;
const FIELDS_CONTACT_FORM = `*,fields.*`;
const FIELDS_CONTACT_PAGE = `*,form.*,form.fields.*`;
const FIELDS_FAQ_SECTION = `*,items.*`;
const FIELDS_FOOTER = `*`;
const FIELDS_HOW_IT_WORK_SECTION = `*,items.HowItWorkItem_id.*`;
const FIELDS_NAVIGATION_MENU = `*`;
const FIELDS_PRICING_SECTION = `*,offers.PricingOffer_id.*.Offer_id.title`;
const FIELDS_SERVICES_SECTION = `*,topServices.ServiceCard_id.*,services.ServiceCard_id.*`;

export {
  FIELDS_ABOUT_US_PAGE,
  FIELDS_BANNER,
  FIELDS_BUTTON,
  FIELDS_NAVIGATION,
  FIELDS_CONTACT_FORM,
  FIELDS_CONTACT_PAGE,
  FIELDS_FAQ_SECTION,
  FIELDS_FOOTER,
  FIELDS_HOW_IT_WORK_SECTION,
  FIELDS_NAVIGATION_MENU,
  FIELDS_PRICING_SECTION,
  FIELDS_SERVICES_SECTION,
};
