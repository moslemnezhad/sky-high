import { Routes, Route } from "react-router-dom";

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

// Resource Pages
import PersonalTax from "./pages/resources/PersonalTax";
import TaxPlanning from "./pages/resources/TaxPlanning";
import CorporateTax from "./pages/resources/CorporateTax";
import Bookkeeping from "./pages/resources/Bookkeeping";
import Payroll from "./pages/resources/Payroll";
import GSTHST from "./pages/resources/GSTHST";
import CrossBorder from "./pages/resources/CrossBorder";
import SmallBusiness from "./pages/resources/SmallBusiness";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <main className="min-h-screen">

        <Routes>

          {/* Main Pages */}

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />



          {/* ========================= */}
          {/* RESOURCE CENTRE */}
          {/* ========================= */}

          <Route
            path="/resources/personal-tax"
            element={<PersonalTax />}
          />

          <Route
            path="/resources/tax-planning"
            element={<TaxPlanning />}
          />

          <Route
            path="/resources/corporate-tax"
            element={<CorporateTax />}
          />

          <Route
            path="/resources/bookkeeping"
            element={<Bookkeeping />}
          />

          <Route
            path="/resources/payroll"
            element={<Payroll />}
          />

          <Route
            path="/resources/gst-hst"
            element={<GSTHST />}
          />

          <Route
            path="/resources/cross-border"
            element={<CrossBorder />}
          />

          <Route
            path="/resources/small-business"
            element={<SmallBusiness />}
          />



          {/* Optional Pages */}

          {/*
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          */}



          {/* 404 */}

          {/* <Route path="*" element={<NotFound />} /> */}

        </Routes>

      </main>

      <Footer />

    </>
  );
}