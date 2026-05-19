import { IoHeartOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { useParams, useNavigate, Link } from "react-router";
import { useAppContext } from "../../context/AppContext";
import { useEffect } from "react";

const DetalleProducto = () => {
  const { id } = useParams<{ id: string }>();
  const { buscarProducto } = useAppContext();
  const navigate = useNavigate();

  // Buscar el servicio por id
  const producto = buscarProducto(id || "");

  useEffect(() => {
    if (!producto) {
      // Si no existe el servicio, redirigir a 404
      navigate("/DetalleProducto");
    }
  }, [producto, navigate]);

  if (!producto) {
    return null;
  }
  return (
    <div className="container mx-auto px-4 py-8 break-words">
      <div>
        <Link
          to="/"
          className="mb-8 text-lg font-semibold flex text-neutral-800 hover:text-slate-500 items-center"
        >
          <IoHome className="inline mr-2" />
          Volver a Inicio
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="rounded overflow-hidden">
          <img src={producto.imagen} alt={producto.nombreProducto} />
        </div>
        <div>
          <h1 className="text-3xl font-bold md-4">{producto.nombreProducto}</h1>
          <p className="text-gray-600 mb-6">{producto.descripcion}</p>
          <div className="mb-6">
            <span className="text-3xl font-bold">${producto.precio}</span>
          </div>
          <div className="mb-6">
            <h3 className="font-semibold mb-2">
              <span className="font-bold">Categoria: </span>
              {producto.categoria}
            </h3>
          </div>
          <button className=" flex items-center gap-2 rounded-lg bg-slate-600 px-3 py-3  text-center text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-300/30 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-300/30 active:scale-95 cursor-pointer">
            Agregar a Wish List <IoHeartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
