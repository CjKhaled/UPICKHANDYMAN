import Logo from '../assets/upick-logo.webp'
import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article className='footer__column'>
            <a href="#" aria-label='Go to home page'><img className='nav__logo-footer' src={Logo} aria-hidden="true" loading="lazy" decoding="async" width='125px' height='85px' alt="upick handyman llc"/></a>
                {/* Icons here as well */}
            </article>
            <article className='footer__column'>
                <h4>Links</h4>
                <a href="#" aria-label='Go to home page'>Home</a>
                <a href="#about" aria-label='Go to about page'>About</a>
                <a href="#services" aria-label='Go to services page'>Services</a>
                <a href="#portfolio" aria-label='Go to portfolio page'>Portfolio</a>
            </article>
            <article className='footer__column'>
                <h4>Locations We Serve</h4>
                <p>Sarasota County</p>
                <p>Desoto County</p>
                <p>Charlotte County</p>
                <p>Manatee County</p>
            </article>
            <article className='footer__column'>
                <h4>Get In Touch</h4>
                <p>upickhandymanllc@gmail.com</p>
                <p>239-298-0604</p>
                <p>North Port, FL</p>
            </article>
        </div>
        <div className="container line-above">
          <hr className='copy-line'/>
        </div>
        <div className="footer__copywright">
        <small>
          Copyright &copy; 2023 | UPICK HANDYMAN LLC | All Rights Reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer