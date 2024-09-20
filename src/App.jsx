import AskedQuestions from "./components/AskedQuestions"
import Download from "./components/Download"
import Footer from "./components/Footer"
import Form1 from "./components/From1"
import LocalSitters from "./components/LocalSitters"
import Navbar from "./components/Navbar"
import OurServices from "./components/OurServices"
import SignupNow from "./components/SignupNow"
import Walkers from "./components/Walkers"

function App() {

  return (
    <>
      <div className='bg-gray-50'>
        <Navbar/>
        <Form1/>
        <OurServices/>
        <SignupNow/>
        <LocalSitters/>
        <Walkers/>
        <AskedQuestions/>
        <Download/>
        <Footer/>
      </div>
    </>
  )
}

export default App
