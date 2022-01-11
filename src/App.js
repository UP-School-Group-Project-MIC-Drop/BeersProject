import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/base/Navbar"
import Detail from "./components/pages/Detail";

import {PaginationContextProvider} from "./context/PaginationContext";

function App() {
  document.body.style.backgroundColor = "black"
  return (
    
    <PaginationContextProvider>
      <Navbar/>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/:beerId" element={<Detail />} />
      </Routes>
    </PaginationContextProvider>
    
  );
}

export default App;
