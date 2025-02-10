import Hotels from "./components/Hotels"
import HotelByName from "./components/HotelByName"

const App = () => {
  return (
    <main>
      <Hotels/>
      <HotelByName hotelName={'New Hotel 1'}/>
    </main>
  )
}

export default App