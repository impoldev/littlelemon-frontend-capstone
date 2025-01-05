import RestaurantFood from '../assets/RestaurantFood.jpg'
import Delivery from '../assets/Delivery.png'
import GreekSalad from '../assets/GreekSalad.jpg'
import Bruschetta from '../assets/Bruschetta.svg'
import LemonDessert from '../assets/LemonDessert.jpg'
import StarFull from '../assets/StarFull.png'
import StarHalf from '../assets/StarHalf.png'
import StarEmpty from '../assets/StarEmpty.png'
import T1 from '../assets/T1.jpg'
import T2 from '../assets/T2.jpg'
import T3 from '../assets/T3.jpg'
import T4 from '../assets/T4.jpg'
import MarioAndAdrianA from '../assets/Mario-and-Adrian-A.jpg'
import MarioAndAdrianB from '../assets/Mario-and-Adrian-B.jpg'
import '../stylesheets/Main.css'

export function Main() {
  return(
    <main>

      <section className='hero'>
        <div>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
            <button>Reserve a table</button>
          </div>
          <img src={RestaurantFood} alt="restaurant food" />
        </div>
      </section>

      <section className='weeks-specials'>
        <h2>This weeks specials!</h2>
        <button>Online menu</button>
      </section>

      <section className='cards'>
        <div>
          <img src={GreekSalad} alt="greek salad" />
          <div className='heading'>
            <h3>Greek salad</h3>
            <span className='price'>$12.99</span>
          </div>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta chese, garnished with crunchy garlic and rosemary croutons.</p>
          <button>
            <span>Order a delivery</span>
            <img src={Delivery} alt="delivery icon" width={20} />
          </button>
        </div>
        <div>
          <img src={Bruschetta} alt="bruschetta" />
          <div className='heading'>
            <h3>Bruschetta</h3>
            <span className='price'>$5.99</span>
          </div>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <button>
            <span>Order a delivery</span>
            <img src={Delivery} alt="delivery icon" width={20} />
          </button>
        </div>
        <div>
          <img src={LemonDessert} alt="lemon dessert" />
          <div className='heading'>
            <h3>Lemon Dessert</h3>
            <span className='price'>$5.00</span>
          </div>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <button>
            <span>Order a delivery</span>
            <img src={Delivery} alt="delivery icon" width={20} />
          </button>
        </div>
      </section>

      <section className='testimonials-container'>
        <h2>Testimonials</h2>
        <div className='testimonials'>
          <div>
            <div className='rating'>
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarEmpty} alt="empty star" width={10} />
            </div>
            <div className='person'>
              <img src={T1} alt="Clare Honey" width={70} />
              <h3>Clare Honey</h3>
            </div>
            <q className='testimonial'>Amazing food, great ambiance, and top-notch service. Highly recommend for restaurant lovers like me!</q>
          </div>
          <div>
            <div className='rating'>
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
            </div>
            <div className='person'>
              <img src={T2} alt="John Smith" width={70} />
              <h3>John Smith</h3>
            </div>
            <q className='testimonial'>Delicious food and impeccable service. The atmosphere was warm and inviting. I loved it</q>
          </div>
          <div>
            <div className='rating'>
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarHalf} alt="half start" width={10} />
            </div>
            <div className='person'>
              <img src={T3} alt="Julia Moon" width={70} />
              <h3>Julia Moon</h3>
            </div>
            <q className='testimonial'>An absolute treat! The menu had so many unique options, and each bite was better than the last.</q>
          </div>
          <div>
            <div className='rating'>
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
              <img src={StarFull} alt="full star" width={10} />
            </div>
            <div className='person'>
              <img src={T4} alt="Susan Spill" width={70} />
              <h3>Susan Spill</h3>
            </div>
            <q className='testimonial'>Fantastic meal and a great food experience. I will surely come back soon for more. Five stars!</q>
          </div>
        </div>
      </section>

      <section className='about'>
        <div className='text'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>At Little Lemon, we believe that food is more than just nourishment—it’s an art form. 
            Our talented chefs bring passion and creativity to every plate, combining fresh, seasonal ingredients with global influences. 
            Whether you’re enjoying a cozy dinner with loved ones or celebrating a special occasion, we aim to make every moment memorable.</p>
        </div>
        <div className='images'>
          <img className='one' src={MarioAndAdrianB} alt="Mario and Adrian B"  />
          <img className='two' src={MarioAndAdrianA} alt="Mario and Adrian A"  />
        </div>
      </section>

    </main>
  )
}