import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="grow bg-linear-to-br from-[#d6d3d1] to-[#a8a6a4]">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}/>
            <Route path="*" element={<Error404></Error404>}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
