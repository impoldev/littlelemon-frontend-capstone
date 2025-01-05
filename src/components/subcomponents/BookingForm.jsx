import { useState } from 'react'
import '../../stylesheets/subcomponents/BookingForm.css'

export function BookingForm() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState('1')
  const [occasion, setOccasion] = useState('Birthday')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(date, time, guests, occasion)
  }

  return(
  <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '10px'}}>
    <label htmlFor="res-date">Choose date</label>
    <input onChange={(e) => setDate(e.target.value)} value={date} type="date" id="res-date" />
    <label htmlFor="res-time">Choose time</label>
    <select onChange={(e) => setTime(e.target.value)} value={time} id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input onChange={(e) => setGuests(e.target.value)} value={guests} type="number" placeholder="1" min="1" max="10" id="guests" />
    <label htmlFor="occasion">Occasion</label>
    <select onChange={(e) => setOccasion(e.target.value)} value={occasion} id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    <input className='form-button' disabled={date === ''} type="submit" value="Make Your reservation" />
  </form>
  )
}