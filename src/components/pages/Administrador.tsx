import PanelAdmin from "../services/PanelAdmin";


const Administrador = () => {
    return (
        <section className="container animate-fadeIn space-y-6 mt-8">
      {/* Header de la sección */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-stone-800/70 p-6 rounded-2xl border border-neutral-800">
        <div>
          <h1 className="text-2xl font-bold text-stone-50">
            Panel de Administración
          </h1>
          <p className="text-neutral-200 text-sm">
            Gestiona el catálogo de servicios disponibles.
          </p>
        </div>
        <a
          className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex items-center gap-2"
          
        >
          <i className="bi bi-plus-lg"></i>
          Crear Servicio
        </a>
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
            {<PanelAdmin></PanelAdmin>}
          </tbody>
        </table>
      </div>
    </section>
    );
};

export default Administrador;