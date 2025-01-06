import './App.css';
import { AboutPage } from './components/AboutPage';
import { BookingPage } from './components/BookingPage';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { HomePage } from './components/HomePage';
import { BrowserRouter, Route, Routes} from 'react-router'
import { MenuPage } from './components/MenuPage';
import { OrdersPage } from './components/OrdersPage';
import { LoginPage } from './components/LoginPage';
import { createContext, useEffect, useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from './fetchFunctions';
import { ConfirmedBooking } from './components/ConfirmedBooking';

export const FormContext = createContext(null)

export function updateTimes(state, action) {
  if (action) {
    return action;
  }
  throw Error('Unknown action.');
}

export function initializeTimes(action, date) {
  let times = fetchAPI(new Date())
  action(times)
  localStorage.setItem(date, JSON.stringify(times))
}

function App() {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState('1')
  const [occasion, setOccasion] = useState('Birthday')

  const [availableTimes, dispathAvailableTimes] = useReducer(updateTimes, []);

  function submitForm(e) {
    e.preventDefault()

    let data = [
      date,
      time,
      guests,
      occasion
    ]

    let res = submitAPI(data)
    console.log(res)

    let curr = JSON.parse(localStorage.getItem(date)).filter(t => t !== time)
    localStorage.setItem(date, JSON.stringify(curr))

    dispathAvailableTimes(curr, date)
    setTime(curr[0])
  }

  useEffect(() => {
    console.log(date)
    if (!localStorage.getItem(date)) {
      initializeTimes(dispathAvailableTimes, date)
    } else {
      dispathAvailableTimes(JSON.parse(localStorage.getItem(date)))
    }
  }, [date])

  return (
    <BrowserRouter>
      <Header />
      <FormContext.Provider value={{date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispathAvailableTimes, submitForm}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/order" element={<OrdersPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </FormContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
