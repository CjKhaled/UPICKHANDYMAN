import Typewriter from 'typewriter-effect'
import './home.css'

const Home = () => {
  return (
    <header id="header">
        <div className="container header__content">
            <h1>UPICK US FOR YOUR 
              <strong className='quick__edit'>
                <Typewriter 
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: ["PAINTING NEEDS", "PAINTING SERVICES", "INTERIOR PAINING JOBS", "EXTERIOR PAINTING JOBS", "RESIDENTIAL PAINTING", "HOUSE PAINTING JOBS", "COMMERCIAL PAINTING"]
                  }}
                />
              </strong>
            </h1>
            <p>Let us do the hard work for you. Get a free quote today!</p>
            <button className="btn">Contact Now</button>
        </div>
        <div className="container form__box">
            <h1>Free Estimate</h1>
            <p>Get a quick response within 24 hours</p>
            <form className='form__content'>
                <label>Name*</label>
                <input type="text" name="name" placeholder="Enter Your Full Name" required autoComplete='name'/>
                <label>Email*</label>
                <input type="email" name="email" placeholder="Enter Your Email" required autoComplete='email'/>
                <label>Phone Number*</label>
                <input type="number" name="number" placeholder="Enter Your Phone Number" required autoComplete='tel'/>
            </form>
            <button type="submit" className='btn' aria-label='Submit form'>GET ESTIMATE!</button>
        </div>
    </header>
  )
}

export default Home