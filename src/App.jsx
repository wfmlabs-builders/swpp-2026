import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Agenda from './pages/Agenda';
import Session from './pages/Session';
import About from './pages/About';
import Newsletter from './pages/Newsletter';
import Book from './pages/Book';

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/session/adaptive" element={<Session />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
