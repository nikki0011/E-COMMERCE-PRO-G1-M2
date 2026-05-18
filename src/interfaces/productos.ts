export interface Producto {
  id: string;
  nombreProducto: string;
  precio: number;
  imagen: string;
  categoria: string;
  descripcion: string;
}

export type ProductoFormData = Omit<Producto, 'id'>;