import DigiKalaService from "../digiKalaServic/DigiKalaService"
import Navbar from "../navbar/Navbar"
import Slider from "../slider/Slider"


const Header = () => {
  
  return (
    <div>
      <Navbar />
      <Slider />
      <DigiKalaService />
    </div>
  )
}

export default Header
