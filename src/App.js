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
import { createContext, useEffect, useReducer, useState } from 'react';

export const FormContext = createContext(null)

export function updateTimes(state, action) {
  if (action) {
    return action;
  }
  throw Error('Unknown action.');
}

export function initializeTimes(action) {
  action(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
}

function App() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState('1')
  const [occasion, setOccasion] = useState('Birthday')
  
  const [availableTimes, dispathAvailableTimes] = useReducer(updateTimes, []);

  useEffect(() => {
    return initializeTimes(dispathAvailableTimes)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <FormContext.Provider value={{date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispathAvailableTimes}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/order" element={<OrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </FormContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
