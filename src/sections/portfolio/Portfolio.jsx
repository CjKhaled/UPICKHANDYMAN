import Portfolio1 from '../assets/portfolio-1.webp'
import Portfolio2 from '../assets/portfolio-2.webp'
import Portfolio3 from '../assets/portfolio-3.webp'
import Portfolio4 from '../assets/portfolio-4.webp'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './portfolio.css'

const Portfolio = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);
  return (
    <section id="portfolio">
        <div className="container portfolio__container">
            <div className="container portfolio__content">
                <h3>Check Out</h3>
                <h2>Our Work In Painting</h2>
                <p>At UPICK we take pride in our work. We want to create a meaningful experience that will have you coming back to us again.</p>
            </div>
            <div className="portfolio__pictures" data-aos="fade-up">
                <img src={Portfolio1} alt="exterior Painting" className='portfolio-picture' aria-hidden="true" loading="lazy" decoding="async"/>
                <img src={Portfolio2} alt="exterior Painting" className='portfolio-picture' aria-hidden="true" loading="lazy" decoding="async"/>
                <img src={Portfolio3} alt="exterior Painting" className='portfolio-picture' aria-hidden="true" loading="lazy" decoding="async"/>
                <img src={Portfolio4} alt="exterior Painting" className='portfolio-picture' aria-hidden="true" loading="lazy" decoding="async"/>
            </div>
        </div>
    </section>
  )
}

export default Portfolio