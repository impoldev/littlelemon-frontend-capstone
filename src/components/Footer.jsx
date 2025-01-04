import FooterLogo from '../assets/FooterLogo.png'

export function Footer() {
  return(
    <footer>
      <div>
        <img src={FooterLogo} alt='Little Lemon' />
        <section>
          <h3 className='headlines-font'>Navigation</h3>
          <nav>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#order-online">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </nav>
        </section>
        <section>
          <h3 className='headlines-font'>Contact</h3>
          <ul>
            <li><a href="#address">Address</a></li>
            <li><a href="#phone-number">Phone number</a></li>
            <li><a href="#email">Email</a></li>
          </ul>
        </section>
        <section>
          <h3 className='headlines-font'>Social Media Links</h3>
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#facebook">Facebook</a></li>
          </ul>
        </section>
      </div>
    </footer>
  )
}