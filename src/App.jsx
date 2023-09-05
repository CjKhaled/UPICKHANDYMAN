import About from "./sections/about/About"
import Contact from "./sections/contact/Contact"
import Footer from "./sections/footer/Footer"
import Home from "./sections/home/Home"
import Navbar from "./sections/navbar/Navbar"
import Portfolio from "./sections/portfolio/Portfolio"
import Services from "./sections/services/Services"


const App = () => {
  return (
    <main>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </main>
  )
}

export default App