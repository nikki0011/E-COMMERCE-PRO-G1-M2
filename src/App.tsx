import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
//import Cards from "./components/services/Cards";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-linear-to-br from-[#d6d3d1] to-[#a8a6a4]">
      <Navbar />
        <main className="grow container mx-auto ">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}/>
         
          </Routes>

        </main>
        <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
