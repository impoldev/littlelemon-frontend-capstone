import './App.css';
import { AboutPage } from './components/AboutPage';
import { BookingPage } from './components/BookingPage';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { HomePage } from './components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router'
import { MenuPage } from './components/MenuPage';
import { OrdersPage } from './components/OrdersPage';
import { LoginPage } from './components/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/order" element={<OrdersPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
