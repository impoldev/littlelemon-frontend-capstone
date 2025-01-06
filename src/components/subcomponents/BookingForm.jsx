import { useContext } from 'react'
import '../../stylesheets/subcomponents/BookingForm.css'
import { FormContext } from '../../App'
import { submitAPI } from '../../fetchFunctions'

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
    success,
    setSuccess
  } = useContext(FormContext)

  function clearForm() {
    setDate('')
    setTime('17:00')
    setGuests('1')
    setOccasion('Birthday')

    setTimeout(() => {
      setSuccess(false)
    }, 4000);
  }

  function handleSubmit(e) {
    e.preventDefault()

    let data = new FormData()
    data.append('date', date)
    data.append('time', time)
    data.append('guests', guests)
    data.append('occasion', occasion)

    let res = submitAPI(data)
    setSuccess(res)
    clearForm()
  }

  return(
  <form onSubmit={handleSubmit} style={{display: 'grid', maxWidth: '200px', gap: '10px'}}>
    <label htmlFor="res-date">Choose date</label>
    <input onChange={(e) => setDate(e.target.value)} value={date} type="date" id="res-date" />
    <label htmlFor="res-time">Choose time</label>
    <select onChange={(e) => setTime(e.target.value)} value={time} id="res-time">
      {
        availableTimes.map(t => <option key={t}>{t}</option>)
      }
    </select>
    <label htmlFor="guests">Number of guests</label>
    <input onChange={(e) => setGuests(e.target.value)} value={guests} type="number" placeholder="1" min="1" max="10" id="guests" />
    <label htmlFor="occasion">Occasion</label>
    <select onChange={(e) => setOccasion(e.target.value)} value={occasion} id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    <input className='form-button' disabled={date === '' || (date < new Date().toISOString() && new Date().getDate() !== date.slice(date.length - 2) - 0)} type="submit" value="Make your reservation" />
    {
      success &&
      <span style={{color: 'white', backgroundColor: 'green', borderRadius: '16px', padding: '10px 20px', transition: '.3s ease-in-out'}}>Data submitted successfully</span>
    }
  </form>
  )
}