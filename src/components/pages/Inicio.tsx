import { FaSearch } from "react-icons/fa";
import Cards from "../services/Cards";
import { useAppContext } from "../../context/AppContext";

const Inicio = () => {
  const { productos } = useAppContext();
  return (
    <section className="space-y-8 animate-fadeIn container  w-full xs:mx-auto mt-6">
      {/* Encabezado con estilo moderno */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center border-b border-zinc-800 pb-5 gap-4 ">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight uppercase bg-neutral-500 p-2 rounded-xl">
            Hard products
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Que buscas?"
            className=" border-2 border-neutral-600 bg-neutral-400 rounded-2xl p-2 w-60 md:w-90 placeholder:text-start placeholder:text-white"
          />
          <FaSearch className="text-3xl" />
        </div>
      </div>
      <div className="pl-5">
      {productos.length} productos disponibles
      </div>
      {productos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
          {productos.map((producto) => (
            <Cards key={producto.id} producto={producto} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 rounded-xl border border-slate-900 text-slate-600 font-bold tracking-wider uppercase text-2xl">
            No se encontraron productos disponibles
        </div>
      )}
    </section>
  );
};

export default Inicio;
