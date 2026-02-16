import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Funding from './pages/Funding';
import CreditOptimization from './pages/CreditOptimization';
import MerchantServices from './pages/MerchantServices';
import LegalServices from './pages/LegalServices';
import Process from './pages/Process';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import ClientLogin from './pages/ClientLogin';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclosures from './pages/Disclosures';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/credit-optimization" element={<CreditOptimization />} />
        <Route path="/merchant-services" element={<MerchantServices />} />
        <Route path="/legal-services" element={<LegalServices />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/client-login" element={<ClientLogin />} />
        
        {/* Legal Routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclosures" element={<Disclosures />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
