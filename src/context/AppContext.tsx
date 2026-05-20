import { createContext, useContext } from "react";
import type { Producto, ProductoFormData } from "../interfaces/productos";

export interface AppContextType {
  usuarioLogueado: boolean;
  setUsuarioLogueado: React.Dispatch<React.SetStateAction<boolean>>;
  productos: Producto[];
  crearProducto: (nuevoProducto: ProductoFormData) => void;
  borrarProducto: (idProducto: string) => void;
  editarProducto: (idProducto: string, productoEditar: ProductoFormData) => void;
  buscarProducto: (idProducto: string) => Producto | undefined;
  usuarios: any[];
registrarUsuario: (nuevoUsuario: any) => boolean;
}

export interface Usuario {
  id: string;
  email: string;
  password: string;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
}
