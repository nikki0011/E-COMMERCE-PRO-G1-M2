import PanelAdmin from "../services/PanelAdmin";
import { Link } from "react-router";
import { LuCirclePlus } from "react-icons/lu";
import { useAppContext } from "../../context/AppContext";


const Administrador = () => {
  const {productos} = useAppContext();
    return (
        <section className="container animate-fadeIn space-y-6 mt-8">
      {/* Header de la sección */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-stone-800/70 p-6 rounded-2xl border border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold text-stone-50">
            Panel de Administración
          </h1>
          <p className="text-neutral-200 text-sm">
            Gestiona el catálogo de productos disponibles.
          </p>
        </div>
        <Link
          className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center gap-2"
          to="/formularioabm"
        >
          <LuCirclePlus/>
          Crear Producto
        </Link>
      </div>

      {/* Contenedor de la Tabla con Scroll Horizontal para móviles */}
      <div className="overflow-x-auto  rounded-2xl border border-zinc-800 bg-zinc-900/20">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-900/60 border-b border-zinc-800">
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-stone-200 font-bold">
                #
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-stone-200 font-bold">
                Producto
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-stone-200  font-bold">
                Precio
              </th>
              <th className="px-6 py-4 text-xs uppercase tracking-wider text-stone-200  font-bold text-center">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-800/50">
            {productos.length > 0 ? (
              productos.map((producto, indice) => (
                <PanelAdmin
                  key={producto.id}
                  producto={producto}
                  fila={indice + 1}
                />
              ))
            ) : (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-12 text-center text-slate-900 font-semibold"
                >
                  No hay productos registrados para administrar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default Administrador;