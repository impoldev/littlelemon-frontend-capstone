import { useContext } from 'react'
import '../../stylesheets/subcomponents/BookingForm.css'
import { FormContext } from '../../App'
import { useNavigate } from 'react-router'

export function BookingForm() {
  const {
    date,
    setDate,
    time,
    setTime,
    guests,
    setGuests,
    occasion,
    setOccasion,
    availableTimes,
    submitForm
  } = useContext(FormContext)

  let navigate = useNavigate()

  return(
  <form onSubmit={(e) => {submitForm(e); navigate('/confirmed-booking')}} style={{display: 'grid', maxWidth: '200px', gap: '10px'}}>
    <label htmlFor="res-date">Choose date</label>
    <input onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().slice(0, 10)} value={date} name='date' type="date" id="res-date" />
    {
      availableTimes.length === 0 &&
      <span style={{backgroundColor: '#c53030', color: 'white', padding: '10px 10px', borderRadius: '16px'}}>No times available for this day</span>
    }
    {
      (availableTimes.length !== 0 && date !== '') &&
      <>
        <table style={{backgroundColor:'white', borderRadius:'16px'}}>
          <thead>
            <tr>
              <th>Available times</th>
            </tr>
          </thead>
          <tbody>
            {
            availableTimes.map(t => <tr key={t}><td style={{borderTop: '1px solid #edefee', padding: '0'}}>{t}</td></tr>)
            }
          </tbody>
        </table>
        <label htmlFor="res-time">Choose time</label>
        <select onChange={(e) => setTime(e.target.value)} value={time} name='time' id="res-time">
          {
            availableTimes.map(t => <option key={t}>{t}</option>)
          }
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input onChange={(e) => setGuests(e.target.value)} value={guests} type="number" name='guests' placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select onChange={(e) => setOccasion(e.target.value)} value={occasion} name='occasion' id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
      </>
    }
    <input className='form-button' disabled={availableTimes.length === 0 || date === ''} type="submit" value="Make your reservation" />
  </form>
  )
}