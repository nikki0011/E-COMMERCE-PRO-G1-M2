import { Link } from "react-router";
import type { Producto } from "../../interfaces/productos";
import Swal from "sweetalert2";
import { useAppContext } from "../../context/AppContext";
import { LuTrash2,LuPencil  } from "react-icons/lu";
interface ItemTablaProps {
  producto: Producto;
  fila: number;
}
const PanelAdmin = ({producto, fila}:ItemTablaProps) => {
  const { borrarProducto } = useAppContext();

  const eliminarProducto = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      background: "#18181b", // zinc-900
      color: "#f4f4f5", // zinc-100
      showCancelButton: true,
      confirmButtonColor: "#3b82f6", // blue-500
      cancelButtonColor: "#ef4444", // red-500
      confirmButtonText: "Sí, borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        borrarProducto(producto.id);
        Swal.fire({
          title: "Eliminado",
          text: `El servicio fue eliminado correctamente`,
          icon: "success",
          background: "#18181b",
          color: "#f4f4f5",
          confirmButtonColor: "#3b82f6",
        });
      }
    });
  };
    return (
        <tr className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-50 font-mono">
        {fila}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-50">
        {producto.nombreProducto}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-50 font-mono">
        ${producto.precio.toLocaleString("es-AR")}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex justify-center gap-3">
          <Link
            to={`/administrador/editar/${producto.id}`}
            className="text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1 text-xl"
          >
            <LuPencil /> Editar
          </Link>
          <button className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 font-bold text-lg"
          onClick={eliminarProducto}>
            <LuTrash2 /> Borrar
          </button>
        </div>
      </td>
    </tr>
    );
};

export default PanelAdmin;