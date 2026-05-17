import { IoHeartOutline } from "react-icons/io5";

const DetalleProducto = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div>
                <a className="mb-8 inline-block">Volver a Inicio</a>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="shadow-md p-4 rounded w-150">
                    <img src="" alt="" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold md-4">Producto</h1>
                    <p className="text-gray-600 mb-6">Descripcion</p>
                    <div className="mb-6">
                    <span className="text-3xl font-bold">Precio</span>
                    </div>
                    <div className="mb-6">
                        <h3 className="font-semibold mb-2">Categoria</h3>
                    <span className="font-semibold mb-2">Categoria</span>
                    </div>
                    <button className="rounded-lg bg-cyan-700 px-8 py-3  text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800
        active:scale-95 ">
               Agregar a Wish List <IoHeartOutline />
            </button>
                </div>
                 
            </div>
          </div>
        </div>
    );
};

export default DetalleProducto;