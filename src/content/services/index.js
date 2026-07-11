import accounting from "./accounting";
import bookkeeping from "./bookkeeping";
import businessConsulting from "./business-consulting";
import corporateTax from "./corporate-tax";
import craCompliance from "./cra-compliance";
import crossBorderTax from "./cross-border-tax";
import financialAdvisory from "./financial-advisory";
import payroll from "./payroll";
import personalTax from "./personal-tax";
import taxPlanning from "./tax-planning";

export const services = [
  accounting,
  bookkeeping,
  businessConsulting,
  corporateTax,
  craCompliance,
  crossBorderTax,
  financialAdvisory,
  payroll,
  personalTax,
  taxPlanning,
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);