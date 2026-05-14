import { BrowserRouter } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="grow min-h-screen bg-linear-to-br from-[#d6d3d1] to-[#a8a6a4]"></main>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
