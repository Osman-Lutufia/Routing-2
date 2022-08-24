import { BrowserRouter, Route, Routes } from "react-router-dom;"
import HomeScreen from"./screens/HomeScreen";
import ProducScreen from "./screens/ProductScreen";
import ContactScreen from "./screens/ContactScreen";
import Header from "./component/Header";
import AboutScreen from "./screens/AboutScreen"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route Path="/" element={<HomeScreen />} />
          <Route Path="/contact" element={<ContactScreen />} />
          <Route Path="/about" element={<AboutScreen />} />
          <Route Path="/product" element={<productScreen />} />
        </Routes>
        </div>
    </BrowserRouter>
  )
}


export default App;