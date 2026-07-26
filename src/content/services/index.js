import i18n from "../../i18n/i18n";

// English
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


// Persian
import accountingFA from "./accounting.fa";
import bookkeepingFA from "./bookkeeping.fa";
import businessConsultingFA from "./business-consulting.fa";
import corporateTaxFA from "./corporate-tax.fa";
import craComplianceFA from "./cra-compliance.fa";
import crossBorderTaxFA from "./cross-border-tax.fa";
import financialAdvisoryFA from "./financial-advisory.fa";
import payrollFA from "./payroll.fa";
import personalTaxFA from "./personal-tax.fa";
import taxPlanningFA from "./tax-planning.fa";


// Arabic
import accountingAR from "./accounting.ar";
import bookkeepingAR from "./bookkeeping.ar";
import businessConsultingAR from "./business-consulting.ar";
import corporateTaxAR from "./corporate-tax.ar";
import craComplianceAR from "./cra-compliance.ar";
import crossBorderTaxAR from "./cross-border-tax.ar";
import financialAdvisoryAR from "./financial-advisory.ar";
import payrollAR from "./payroll.ar";
import personalTaxAR from "./personal-tax.ar";
import taxPlanningAR from "./tax-planning.ar";



const servicesEN = [
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


const servicesFA = [
  accountingFA,
  bookkeepingFA,
  businessConsultingFA,
  corporateTaxFA,
  craComplianceFA,
  crossBorderTaxFA,
  financialAdvisoryFA,
  payrollFA,
  personalTaxFA,
  taxPlanningFA,
];


const servicesAR = [
  accountingAR,
  bookkeepingAR,
  businessConsultingAR,
  corporateTaxAR,
  craComplianceAR,
  crossBorderTaxAR,
  financialAdvisoryAR,
  payrollAR,
  personalTaxAR,
  taxPlanningAR,
];



export const getServices = () => {

  const language = i18n.language;


  if (language === "fa") {
    return servicesFA;
  }


  if (language === "ar") {
    return servicesAR;
  }


  return servicesEN;

};



export const getServiceBySlug = (slug) => {

  return getServices().find(
    (service) => service.slug === slug
  );

};