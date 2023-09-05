import Service1 from '../assets/service-1.webp'
import Service2 from '../assets/service-2.webp'
import Service3 from '../assets/service-3.webp'
import { BsArrowRightShort } from 'react-icons/bs'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './services.css'

const Services = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
      }, []);
  return (
    <section id="services">
        <div className="container services__top">
            <h3>What We Offer</h3>
            <h2>A Wide Array of Painting Services</h2>
            <p>At UPICK we believe communication is key. That's why we will walk through every step of our process to make sure you are 100% satisfied.</p>
        </div>
        <div className="container services__cards" data-aos="fade-up">
            <article className='service__card'>
                <img src={Service1} alt="exterior Painting" className='service-image' aria-hidden="true" loading="lazy" decoding="async" width={'120px'} height={'120px'}/>
                <h2>Exterior Painting</h2>
                <p>We work with a wide variety of surfaces and objects, ranging from wood, brick, and garage doors. Make your home stand out among the rest with our custom exterior painting services.</p>
                <a href="#portfolio" aria-label='Go to portfolio page'>
                    <button className='btn'>See Our Work! <BsArrowRightShort className='arrow-icon'/></button>
                </a>
            </article>
            <div className="second-card">
                <article className='service__card'>
                    <img src={Service2} alt="interior Painting" className='service-image' aria-hidden="true" loading="lazy" decoding="async"/>
                    <h2>Interior Painting</h2>
                    <p>We provide high-quality service with an impeccable finish, to make sure you will have a painting service you'll love. No matter what job you throw at us, UPICK will always tackle it with an eye for detail.</p>
                    <a href="#portfolio" aria-label='Go to portfolio page'>
                        <button className='btn'>See Our Work! <BsArrowRightShort className='arrow-icon'/></button>
                    </a>
                </article>
            </div>
            <article className='service__card'>
                <img src={Service3} alt="exterior painting" className='service-image' aria-hidden="true" loading="lazy" decoding="async"/>
                <h2>Other Painting</h2>
                <p>We powerwash and do drywall repair to ensure our jobs are pristine! Whether it's residential painting or commercial painting, we've got you covered!</p>
                <a href="#portfolio" aria-label='Go to portfolio page'>
                    <button className='btn'>See Our Work! <BsArrowRightShort className='arrow-icon'/></button>
                </a>
            </article>
        </div>
    </section>
  )
}

export default Services