import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Navbar from './components/NavBar';
import Signup from './pages/Auth/Signup';
import Login from './pages/Auth/Login';
import LanguagePopup from './components/LanguagePopup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <LanguagePopup setLang={() => { }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
