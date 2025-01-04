import RestaurantFood from '../assets/RestaurantFood.jpg'
import Delivery from '../assets/Delivery.png'
import GreekSalad from '../assets/GreekSalad.jpg'
import Bruschetta from '../assets/Bruschetta.svg'
import LemonDessert from '../assets/LemonDessert.jpg'

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


    </main>
  )
}