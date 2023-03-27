import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import useOnScreen from "./components/utils/useOnScreen"
import Home from "./components/Home"
import NavBar2 from "./components/NavBar2"
import MainMenu from "./components/MainMenu"





function App() {

  const [containerRef, isVisible] = useOnScreen({ rootMargin: '-100px' });

  return (
    <div >

      <BrowserRouter >
        {/* <Navbar isVisible={isVisible} /> */}
        <MainMenu isVisible={isVisible} />
        <Home containerRef={containerRef} />
        {/* <Routes>
          <Route path="/" element={<Home containerRef={containerRef} />} />

          <Route path="/aboutus" element={<AboutUs />} />
          
          <Route path="/rooms2" element={<Rooms2 />} />
         
          <Route path="/resturant" element={<Resturant />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/map" element={<Map />} />

        </Routes> */}
        <NavBar2 />
        <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App
