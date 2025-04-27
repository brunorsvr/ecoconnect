import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import bgImage from "./assets/bg.jpg"
import Form from "./components/Form/Form"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"
import Benefits from "./components/Benefits/Benefits"

const App = () => {
  return (
    <div>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${bgImage})`, 
          backgroundAttachment: "fixed"
        }}
      >
        <Header />
        <Hero />
      </div>
      <Benefits />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  )
}
export default App