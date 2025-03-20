import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ParentsInfo } from './pages/info/ParentsInfo';
import { Datacenter } from './pages/info/Datacenter';
import { Payment } from './pages/info/Payment';
import { Infrastructure } from './pages/info/Infrastructure';
import { Reselling } from './pages/info/Reselling';
import { Partners } from './pages/info/Partners';
import { RootServer } from './pages/products/RootServer';
import { Domains } from './pages/products/Domains';
import { GameServer } from './pages/products/GameServer';
import { Webspaces } from './pages/products/Webspaces';
import { Teamspeak } from './pages/products/Teamspeak';
import { Storage } from './pages/products/Storage';
import { DedicatedServer } from './pages/products/DedicatedServer';
import { Imprint } from './pages/legal/Imprint';
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            {/* Info Pages */}
            <Route path="/info/parents" element={<ParentsInfo />} />
            <Route path="/info/datacenter" element={<Datacenter />} />
            <Route path="/info/payment" element={<Payment />} />
            <Route path="/info/infrastructure" element={<Infrastructure />} />
            <Route path="/info/reselling" element={<Reselling />} />
            <Route path="/info/partners" element={<Partners />} />
            
            {/* Product Pages */}
            <Route path="/products/root-server" element={<RootServer />} />
            <Route path="/products/domains" element={<Domains />} />
            <Route path="/products/game-server" element={<GameServer />} />
            <Route path="/products/webspaces" element={<Webspaces />} />
            <Route path="/products/teamspeak" element={<Teamspeak />} />
            <Route path="/products/storage" element={<Storage />} />
            <Route path="/products/dedicated" element={<DedicatedServer />} />
            
            {/* Legal Pages */}
            <Route path="/legal/imprint" element={<Imprint />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;