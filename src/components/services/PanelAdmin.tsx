const PanelAdmin = () => {
    return (
        <tr className="border-b border-zinc-800 hover:bg-zinc-900/40 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-50 font-mono">
        1
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-50">
        nombreProducto
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-50 font-mono">
        $50
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex justify-center gap-3">
          <a className="text-slate-500 hover:text-amber-400 transition-colors flex items-center gap-1 font-bold text-lg">
            <i className="bi bi-pencil-square"></i> Editar
          </a>
          <button className="text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 font-bold text-lg">
            <i className="bi bi-trash"></i> Borrar
          </button>
        </div>
      </td>
    </tr>
    );
};

export default PanelAdmin;