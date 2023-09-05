import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './contact.css'

const Contact = () => {
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);
  return (
    <section id="contact">
        <div className="container contact__container">
            <div className="contact__content">
                <h3>What Are You Waiting For?</h3>
                <h2>Let's Connect!</h2>
                <p>We respond fast! Let's get in touch.</p>
            </div>
            <form className='contact__form' data-aos="fade-up">
                <label>
                  <p>Name:</p>
                  <input type="text" name="name" placeholder="Your Full Name" className='contact__input' required autoComplete='name'/>
                </label>

                <label>
                  <p>Email Address</p>
                  <input type="email" name="email" placeholder="Enter your Email" className='contact__input' required autoComplete='email'/>
                </label>
                
                <label>
                  <p>Phone Number</p>
                  <input type="number" name="number" placeholder="Enter your Phone Number" className='contact__input' required autoComplete='tel'/>
                </label>

                <label>
                  <p>Message</p>
                  <textarea name="message" rows="10" placeholder="Describe your project" className='contact__textarea' required autoComplete='on'></textarea>
                </label>
            </form>
            <button type='submit' className='btn' aria-label='Submit form'>GET ESTIMATE!</button>
        </div>
    </section>
  )
}

export default Contact