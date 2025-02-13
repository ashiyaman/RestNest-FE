import Hotels from "./components/Hotels"
import HotelByName from "./components/HotelByName"
import AddHotelForm from "./components/AddHotelForm"

const App = () => {
  return (
    <main>
      <AddHotelForm/>
      <Hotels/>
      <HotelByName hotelName={'New Hotel 1'}/>
    </main>
  )
}

export default App