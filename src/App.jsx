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
import bookkeeping from "./content/resources/bookkeeping.en";
import corporateTax from "./content/resources/corporate-tax.en";
import gstHst from "./content/resources/gst-hst.en";
import crossBorder from "./content/resources/cross-border.en";
import personalTax from "./content/resources/personal-tax.en";
import smallBusiness from "./content/resources/small-business.en";
import taxPlanning from "./content/resources/tax-planning.en";
import payroll from "./content/resources/payroll.en";




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




export default function App() {


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


        <main className="min-h-screen">


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
            {/* RESOURCE PAGES */}
            {/* ========================= */}



            <Route
              path="/resources/bookkeeping"
              element={
                <ResourcePage resource={bookkeeping} />
              }
            />



            <Route
              path="/resources/corporate-tax"
              element={
                <ResourcePage resource={corporateTax} />
              }
            />



            <Route
              path="/resources/gst-hst"
              element={
                <ResourcePage resource={gstHst} />
              }
            />



            <Route
              path="/resources/cross-border"
              element={
                <ResourcePage resource={crossBorder} />
              }
            />



            <Route
              path="/resources/personal-tax"
              element={
                <ResourcePage resource={personalTax} />
              }
            />



            <Route
              path="/resources/small-business"
              element={
                <ResourcePage resource={smallBusiness} />
              }
            />



            <Route
              path="/resources/tax-planning"
              element={
                <ResourcePage resource={taxPlanning} />
              }
            />



            <Route
              path="/resources/payroll"
              element={
                <ResourcePage resource={payroll} />
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