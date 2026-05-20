import { useForm, type SubmitHandler } from "react-hook-form";
import type { ProductoFormData } from "../../interfaces/productos";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";
import { Link } from "react-router";
import { GiReturnArrow } from "react-icons/gi";

interface FormularioProductoProps {
  titulo: string;
}

const FormularioProducto: React.FC<FormularioProductoProps> = ({
  titulo,
}: FormularioProductoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductoFormData>();

  // traigo los datos que necesito del contexto
  const { crearProducto, buscarProducto, editarProducto } = useAppContext();
  // traer el id de la ruta
  const { id } = useParams<{ id: string }>();
  const navegacion = useNavigate();

  useEffect(() => {
    if (titulo.includes("Editar") && id && buscarProducto) {
      const productoBuscado = buscarProducto(id);
      if (productoBuscado) {
        setValue("nombreProducto", productoBuscado.nombreProducto);
        setValue("precio", productoBuscado.precio);
        setValue("categoria", productoBuscado.categoria);
        setValue("descripcion", productoBuscado.descripcion);
        setValue("imagen", productoBuscado.imagen);
      }
    }
  }, []);

  const onSubmit: SubmitHandler<ProductoFormData> = (data, e) => {
    console.log(data);
    if (titulo.includes("Crear") && crearProducto) {
      crearProducto(data);
      Swal.fire({
        title: "Producto creado",
        text: `El producto '${data.nombreProducto}' fue creado correctamente`,
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
      });
      if (e) {
        (e.target as HTMLFormElement).reset();
      }
    } else if (id) {
      editarProducto(id, data);
      Swal.fire({
        title: "Producto editado",
        text: `El producto '${data.nombreProducto}' fue editado correctamente`,
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
      });
      navegacion("/administrador");
    }
  };

  // Clase utilitaria para inputs
  const inputClass = (hasError: boolean) => `
    w-full px-4 py-2.5 bg-neutral-900 border rounded-lg text-zinc-100 
    focus:outline-none focus:ring-2 focus:ring-slate-300/30 transition-all
    ${hasError ? "border-red-500" : "border-zinc-700"}
  `;

  return (
    <section className="max-w-4xl mx-auto animate-fadeIn my-6">
      <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-xl">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-zinc-800 pb-4">
          {titulo}
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre del Producto */}
            <div className="md:col-span-2">
              <label className="block text-lg font-medium text-zinc-300 mb-2">
                Nombre del Producto(*)
              </label>
              <input
                type="text"
                placeholder="Ej: Laptop Acer V16"
                className={inputClass(!!errors.nombreProducto)}
                {...register("nombreProducto", {
                  required: "El nombre es obligatorio",
                  minLength: { value: 5, message: "Mínimo 5 caracteres" },
                  maxLength: { value: 100, message: "Máximo 100 caracteres" },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.nombreProducto?.message}
              </p>
            </div>

            {/* Precio */}
            <div>
              <label className="block text-lg font-medium text-zinc-300 mb-2">
                Precio(*)
              </label>
              <input
                type="number"
                placeholder="Ej: 50000"
                className={inputClass(!!errors.precio)}
                {...register("precio", {
                  required: "El precio es obligatorio",
                  min: { value: 50, message: "Mínimo $50" },
                  valueAsNumber: true,
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.precio?.message}
              </p>
            </div>

            {/* Categoría */}
            <div>
              <label className="block text-lg font-medium text-zinc-300 mb-2">
                Categoría(*)
              </label>
              <select
                className={inputClass(!!errors.categoria)}
                {...register("categoria", {
                  required: "Seleccione una categoría",
                })}
              >
                <option value="" className="bg-zinc-900">
                  Seleccione una opción
                </option>
                <option value="Laptops" className="bg-zinc-900">
                  Laptops
                </option>
                <option value="PC's Armadas" className="bg-zinc-900">
                  PC's Armadas
                </option>
                <option value="Componentes" className="bg-zinc-900">
                  Componentes
                </option>
              </select>
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.categoria?.message}
              </p>
            </div>

            {/* URL Imagen */}
            <div className="md:col-span-2">
              <label className="block text-lg font-medium text-zinc-300 mb-2">
                URL de Imagen(*)
              </label>
              <input
                type="text"
                placeholder="https://ejemplo.com/imagen.jpg"
                className={inputClass(!!errors.imagen)}
                {...register("imagen", {
                  required: "La URL es obligatoria",
                  pattern: {
                    value: /\.(jpg|jpeg|png|webp|avif|svg)$/,
                    message:
                      "Debe ser una URL de imagen válida (jpg, png, webp, etc.)",
                  },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.imagen?.message}
              </p>
            </div>

            {/* Descripción */}
            <div className="md:col-span-2">
              <label className="block text-lg font-medium text-zinc-300 mb-2">
                Descripción(*)
              </label>
              <textarea
                rows={4}
                placeholder="Describa el producto detalladamente..."
                className={inputClass(!!errors.descripcion)}
                {...register("descripcion", {
                  required: "La descripción es obligatoria",
                  minLength: { value: 10, message: "Mínimo 10 caracteres" },
                  maxLength: { value: 500, message: "Máximo 500 caracteres" },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.descripcion?.message}
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-slate-900 hover:bg-slate-700 text-white font-bold rounded-lg transition-all active:scale-95 shadow-lg cursor-pointer"
            >
              Guardar Producto
            </button>
          </div>
        </form>
      </div>
      <div className="text-slate-900 hover:underline text-center font-semibold mt-6 flex justify-center items-center gap-2">
        <GiReturnArrow />
        <Link to="/administrador">Volver al Panel de Administración</Link>
      </div>
    </section>
  );
};

export default FormularioProducto;
