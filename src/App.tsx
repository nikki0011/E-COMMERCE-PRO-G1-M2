import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/shared/Navbar" 
import Footer from "./components/shared/Footer" 
import Inicio from "./components/pages/Inicio" 
import Login from "./components/pages/Login"
import  Formulario from "./components/pages/Formulario"
import  Error404 from "./components/pages/Error404"
import  Administrador from "./components/pages/Administrador"
import DetalleProducto from "./components/pages/DetalleProducto"
import WishList from "./components/pages/WishList"



function App() {
return (
    <>
      <BrowserRouter>
     <Navbar/> 

        
        <main className="container grow mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}/>
            <Route path="/detalle-producto" element={<DetalleProducto></DetalleProducto>}/>
            <Route path="/login" element={<Login></Login>}/>
            <Route path="/wishList" element={<WishList></WishList>}/>
            <Route path="/administrador" element={<Administrador></Administrador>}/>
            <Route path="/administrador/nuevo-producto" element={<Formulario titulo={'Nuevo Producto'}></Formulario>}/>
            <Route path="/administrador/editar/:id" element={<Formulario titulo={'Editar Producto'}></Formulario>}/>
            <Route path="*" element={<Error404></Error404>}/>
          </Routes>
        </main>

      <Footer/>
     
      </BrowserRouter>
     
    </>
  )
}

export default App
