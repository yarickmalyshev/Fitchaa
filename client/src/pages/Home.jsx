import Welcome from '../components/Welcome'
import About from '../components/About'
import Footer from '../components/Footer'
import Marquee from '../components/Marquee'
import TourPlus from '../components/TourPlus'
import AuthBlock from '../components/AuthBlock'

const Home = () => {

  return (
    <>
      <Welcome /> 
      <div className="nav-wrapper">
        <About />
        <Marquee />
        <TourPlus />
        <Marquee />
        <AuthBlock />
        <Footer />
      </div>
    </>
  )
}

export default Home;