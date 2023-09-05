import { AiOutlineCheck } from 'react-icons/ai'
import Aos from 'aos'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import './about.css'

const About = () => {
    useEffect(()=> {
        Aos.init({duration: 2000})
      }, []);
  return (
    <section id="about">
        <div className="container about__content">
            <div className="about__text">
                <h3>Who We Are</h3>
                <h2>Professional Painters</h2>
                <p>There are tons of homeowners who take on painting projects. More often then not- they end up <strong>wasting their time</strong> or never getting the job done due to lack of experience, time constraints, or any other obstacles. It might be tempting to join this mass, but <strong>don't be fooled!</strong> With us, you won't have to worry about any of that- we are a professional painting company who has the tools and knowledge to finish a job that will last. Whether it's a <strong>small business or a residential home</strong>, we'll always finish the job right on time. We serve <strong>Sarasota county, Desoto county, Manatee county, and Charlotte county</strong> with our affordable painting services.</p>
                <div className="check__services" data-aos="fade-up">
                    <article>
                        <label><AiOutlineCheck/></label>
                        <h4><strong>Preparation-</strong> We prep your home for you, and make sure everything is protected.</h4>
                    </article>
                    <article>
                        <label><AiOutlineCheck/></label>
                        <h4><strong>Cleanliness-</strong> Being organized and neat is a top priority.</h4>
                    </article>
                    <article>
                        <label><AiOutlineCheck/></label>
                        <h4><strong>Time-</strong> Save yourself hours or days of struggle and let us do the work for you.</h4>
                    </article>
                    <article>
                        <label><AiOutlineCheck/></label>
                        <h4><strong>Licensed & Insured-</strong> Sit back, relax, and know that the job <strong>will</strong> get done to your satisfaction.</h4>
                    </article>
                </div>
                <button className='btn' aria-label='Submit Form'>Contact Now!</button>
            </div>

        </div>
    </section>
  )
}

export default About