import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Login from "./components/pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="grow flex justify-center bg-linear-to-br from-[#d6d3d1] to-[#a8a6a4]">
          <Routes>
            <Route path="/login" element={<Login></Login>} />
          </Routes>
        </main>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
