import { BrowserRouter } from "react-router";
import Navbar from "./components/shared/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        </BrowserRouter>
    </>
  );
}

export default App;
