import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ScrollToTop from "./components/common/ScrollToTop";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


// Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";


// Service Pages
import ServicePage from "./pages/services/ServicePage";


// Resource Template
import ResourcePage from "./pages/resources/ResourcePage";


// Resource Content
import bookkeepingEN from "./content/resources/bookkeeping.en.js";
import bookkeepingFA from "./content/resources/bookkeeping.fa.js";
import bookkeepingAR from "./content/resources/bookkeeping.ar.js";

import corporateTaxEN from "./content/resources/corporate-tax.en.js";
import corporateTaxFA from "./content/resources/corporate-tax.fa.js";
import corporateTaxAR from "./content/resources/corporate-tax.ar.js";

import gstHstEN from "./content/resources/gst-hst.en.js";
import gstHstFA from "./content/resources/gst-hst.fa.js";
import gstHstAR from "./content/resources/gst-hst.ar.js";

import crossBorderEN from "./content/resources/cross-border.en.js";
import crossBorderFA from "./content/resources/cross-border.fa.js";
import crossBorderAR from "./content/resources/cross-border.ar.js";

import personalTaxEN from "./content/resources/personal-tax.en.js";
import personalTaxFA from "./content/resources/personal-tax.fa.js";
import personalTaxAR from "./content/resources/personal-tax.ar.js";

import smallBusinessEN from "./content/resources/small-business.en.js";
import smallBusinessFA from "./content/resources/small-business.fa.js";
import smallBusinessAR from "./content/resources/small-business.ar.js";

import taxPlanningEN from "./content/resources/tax-planning.en.js";
import taxPlanningFA from "./content/resources/tax-planning.fa.js";
import taxPlanningAR from "./content/resources/tax-planning.ar.js";

import payrollEN from "./content/resources/payroll.en.js";
import payrollFA from "./content/resources/payroll.fa.js";
import payrollAR from "./content/resources/payroll.ar.js";



// Legal Pages - Multilingual

import TermsOfServiceEN from "./pages/terms-of-service/TermsOfService.en.jsx";
import TermsOfServiceFA from "./pages/terms-of-service/TermsOfService.fa.jsx";
import TermsOfServiceAR from "./pages/terms-of-service/TermsOfService.ar.jsx";

import PrivacyPolicyEN from "./pages/privacy-policy/PrivacyPolicy.en.jsx";
import PrivacyPolicyFA from "./pages/privacy-policy/PrivacyPolicy.fa.jsx";
import PrivacyPolicyAR from "./pages/privacy-policy/PrivacyPolicy.ar.jsx";




// ===============================
// Content Direction Handler
// ===============================

function LayoutDirection({ children }) {

  const { i18n } = useTranslation();


  const isRTL =
    i18n.language === "fa" ||
    i18n.language === "ar";


  return (

    <div dir={isRTL ? "rtl" : "ltr"}>

      {children}

    </div>

  );

}





// ===============================
// Resource Language Handler
// ===============================

function getResources(language) {


  if (language === "fa") {

    return {

      bookkeeping: bookkeepingFA,
      "corporate-tax": corporateTaxFA,
      "gst-hst": gstHstFA,
      "cross-border": crossBorderFA,
      "personal-tax": personalTaxFA,
      "small-business": smallBusinessFA,
      "tax-planning": taxPlanningFA,
      payroll: payrollFA,

    };

  }



  if (language === "ar") {

    return {

      bookkeeping: bookkeepingAR,
      "corporate-tax": corporateTaxAR,
      "gst-hst": gstHstAR,
      "cross-border": crossBorderAR,
      "personal-tax": personalTaxAR,
      "small-business": smallBusinessAR,
      "tax-planning": taxPlanningAR,
      payroll: payrollAR,

    };

  }



  return {

    bookkeeping: bookkeepingEN,
    "corporate-tax": corporateTaxEN,
    "gst-hst": gstHstEN,
    "cross-border": crossBorderEN,
    "personal-tax": personalTaxEN,
    "small-business": smallBusinessEN,
    "tax-planning": taxPlanningEN,
    payroll: payrollEN,

  };


}





// ===============================
// Legal Pages Language Handler
// ===============================

function getLegalPages(language) {


  if (language === "fa") {

    return {

      Terms: TermsOfServiceFA,
      Privacy: PrivacyPolicyFA,

    };

  }



  if (language === "ar") {

    return {

      Terms: TermsOfServiceAR,
      Privacy: PrivacyPolicyAR,

    };

  }



  return {

    Terms: TermsOfServiceEN,
    Privacy: PrivacyPolicyEN,

  };


}
export default function App() {


  const { i18n } = useTranslation();


  const resources = getResources(i18n.language);


  const { Terms, Privacy } = getLegalPages(i18n.language);



  return (

    <>


      <ScrollToTop />



      {/* ========================= */}
      {/* ALWAYS LTR NAVBAR */}
      {/* ========================= */}

      <div dir="ltr">

        <Navbar />

      </div>





      {/* ========================= */}
      {/* LANGUAGE DEPENDENT CONTENT */}
      {/* ========================= */}


      <LayoutDirection>


        <main className="min-h-screen pt-20">


          <Routes>



            {/* ========================= */}
            {/* MAIN PAGES */}
            {/* ========================= */}


            <Route
              path="/"
              element={<Home />}
            />


            <Route
              path="/about"
              element={<About />}
            />


            <Route
              path="/services"
              element={<Services />}
            />


            <Route
              path="/services/:slug"
              element={<ServicePage />}
            />


            <Route
              path="/resources"
              element={<Resources />}
            />


            <Route
              path="/contact"
              element={<Contact />}
            />




            {/* ========================= */}
            {/* LEGAL PAGES */}
            {/* ========================= */}


            <Route
              path="/privacy"
              element={<Privacy />}
            />


            <Route
              path="/terms"
              element={<Terms />}
            />





            {/* ========================= */}
            {/* RESOURCE PAGES */}
            {/* ========================= */}



            <Route
              path="/resources/bookkeeping"
              element={
                <ResourcePage resource={resources.bookkeeping} />
              }
            />



            <Route
              path="/resources/corporate-tax"
              element={
                <ResourcePage
                  resource={resources["corporate-tax"]}
                />
              }
            />



            <Route
              path="/resources/gst-hst"
              element={
                <ResourcePage
                  resource={resources["gst-hst"]}
                />
              }
            />



            <Route
              path="/resources/cross-border"
              element={
                <ResourcePage
                  resource={resources["cross-border"]}
                />
              }
            />



            <Route
              path="/resources/personal-tax"
              element={
                <ResourcePage
                  resource={resources["personal-tax"]}
                />
              }
            />



            <Route
              path="/resources/small-business"
              element={
                <ResourcePage
                  resource={resources["small-business"]}
                />
              }
            />



            <Route
              path="/resources/tax-planning"
              element={
                <ResourcePage
                  resource={resources["tax-planning"]}
                />
              }
            />



            <Route
              path="/resources/payroll"
              element={
                <ResourcePage
                  resource={resources.payroll}
                />
              }
            />



          </Routes>


        </main>


      </LayoutDirection>







      {/* ========================= */}
      {/* ALWAYS LTR FOOTER */}
      {/* ========================= */}


      <div dir="ltr">

        <Footer />

      </div>



    </>

  );

}