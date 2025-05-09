import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ParentsInfo } from './pages/info/ParentsInfo';
import { Datacenter } from './pages/info/Datacenter';
import { Payment } from './pages/info/Payment';
import { Reselling } from './pages/info/Reselling';
import { Partners } from './pages/info/Partners';
import { Cancellation } from './pages/info/Cancellation';
import { RootServer } from './pages/products/RootServer';
import { Domains } from './pages/products/Domains';
import { GameServer } from './pages/products/GameServer';
import { Webspaces } from './pages/products/Webspaces';
import { Teamspeak } from './pages/products/Teamspeak';
import { Storage } from './pages/products/Storage';
import { DedicatedServer } from './pages/products/DedicatedServer';
import { Licenses } from './pages/products/Licenses';
import { Imprint } from './pages/legal/Imprint';
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';
import { OrderPage } from './pages/order/OrderPage';
import { OSSelectPage } from './pages/order/OSSelectPage';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <ScrollToTop />
        <main className="flex-grow pt-16">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
              
              {/* Info Pages */}
              <Route path="/info/parents" element={<PageWrapper><ParentsInfo /></PageWrapper>} />
              <Route path="/info/datacenter" element={<PageWrapper><Datacenter /></PageWrapper>} />
              <Route path="/info/payment" element={<PageWrapper><Payment /></PageWrapper>} />
              <Route path="/info/reselling" element={<PageWrapper><Reselling /></PageWrapper>} />
              <Route path="/info/partners" element={<PageWrapper><Partners /></PageWrapper>} />
              <Route path="/info/cancellation" element={<PageWrapper><Cancellation /></PageWrapper>} />
              
              {/* Product Pages */}
              <Route path="/products/root-server" element={<PageWrapper><RootServer /></PageWrapper>} />
              <Route path="/products/domains" element={<PageWrapper><Domains /></PageWrapper>} />
              <Route path="/products/game-server" element={<PageWrapper><GameServer /></PageWrapper>} />
              <Route path="/products/webspaces" element={<PageWrapper><Webspaces /></PageWrapper>} />
              <Route path="/products/teamspeak" element={<PageWrapper><Teamspeak /></PageWrapper>} />
              <Route path="/products/storage" element={<PageWrapper><Storage /></PageWrapper>} />
              <Route path="/products/dedicated" element={<PageWrapper><DedicatedServer /></PageWrapper>} />
              <Route path="/products/licenses" element={<PageWrapper><Licenses /></PageWrapper>} />
              
              {/* Order Page */}
              <Route path="/order" element={<PageWrapper><OrderPage /></PageWrapper>} />
              <Route path="/order/os-select" element={<PageWrapper><OSSelectPage /></PageWrapper>} />
              
              {/* Legal Pages */}
              <Route path="/legal/imprint" element={<PageWrapper><Imprint /></PageWrapper>} />
              <Route path="/legal/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
              <Route path="/legal/terms" element={<PageWrapper><Terms /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;