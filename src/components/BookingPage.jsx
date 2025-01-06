import '../stylesheets/BookingPage.css'
import { BookingForm } from './subcomponents/BookingForm'

export function BookingPage() {
  return(
    <main>
      <section className="heading">
        <h1>Book Now</h1>
      </section>
      <section className="body">
        <p>Submit this form to book your table. We hope to see you soon!</p>
        <BookingForm />
      </section>
    </main>
  )
}