import Card from "./components/Card"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />
      <Card user="Tamim ahmed" age="19" />
      <Card user="Fahim ahmed" age="29" />
    </div>
  )

}

export default App