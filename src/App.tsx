import { BrowserRouter } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className="grow min-h-screen"></main>
        <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
