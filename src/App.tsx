import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Inicio from "./components/pages/Inicio";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import FormularioABM from "./components/pages/FormularioABM";
import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import { useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import type { Producto, ProductoFormData } from "./interfaces/productos";
import About from "./components/pages/About";
import Registro from "./components/pages/FormRegistro";
import ProtectorRutas from "./components/routes/ProtectorRutas";

function App() {
  const usuarioSessionStorage = JSON.parse(
    sessionStorage.getItem("usuarioKey") || "false",
  );
  const [usuarioLogueado, setUsuarioLogueado] = useState<boolean>(usuarioSessionStorage);

  const productosLocalStorage = JSON.parse(
    localStorage.getItem("productosKey") || "[]",
  );

  const [productos, setProductos] = useState<Producto[]>(productosLocalStorage);

  useEffect(() => {
    sessionStorage.setItem("usuarioKey", JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  useEffect(() => {
    localStorage.setItem("productosKey", JSON.stringify(productos));
  }, [productos]);

  const crearProducto = (dataProducto: ProductoFormData) => {
    const productoNuevo: Producto = {
      ...dataProducto,
      id: crypto.randomUUID(),
    };
    setProductos([...productos, productoNuevo]);
  };

  const borrarProducto = (idProducto: string) => {
    const ProductosFiltrados = productos.filter(
      (itemProducto) => itemProducto.id !== idProducto,
    );
    setProductos(ProductosFiltrados);
  };

  const editarProducto = (
    idProducto: string,
    productoEditar: ProductoFormData,
  ) => {
    const ProductosEditados = productos.map((itemProducto) => {
      if (itemProducto.id === idProducto) {
        return { ...itemProducto, ...productoEditar };
      }
      return itemProducto;
    });
    setProductos(ProductosEditados);
  };

  const buscarProducto = (idProducto: string): Producto | undefined => {
    return productos.find((item) => item.id === idProducto);
  };

  return (
    <AppContext.Provider
      value={{
        usuarioLogueado,
        setUsuarioLogueado,
        productos,
        crearProducto,
        borrarProducto,
        editarProducto,
        buscarProducto,
      }}
    >
      <BrowserRouter>
        <div className="bg-linear-to-br from-[#d6d3d1] to-[#a8a6a4] min-h-screen flex flex-col">
          <Navbar />
          <main className="grow container mx-auto flex  ">
            <Routes>
              <Route path="/" element={<Inicio></Inicio>} />
              <Route path="/login" element={<Login></Login>} />
               <Route path="/administrador" element={<ProtectorRutas />}>
                <Route index element={<Administrador />} />
                <Route
                  path="crear"
                  element={
                    <FormularioABM
                      titulo={"Crear Producto"}
                    ></FormularioABM>
                  }
                />
                <Route
                  path="editar/:id"
                  element={
                    <FormularioABM
                      titulo={"Editar Producto"}
                    ></FormularioABM>
                  }
                />
              </Route>
              <Route
                path="/DetalleProducto/:id"
                element={<DetalleProducto></DetalleProducto>}
              />
              <Route path="/nosotros" element={<About></About>} />
              <Route path="/registro" element={<Registro></Registro>} />
              <Route path="*" element={<Error404></Error404>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
