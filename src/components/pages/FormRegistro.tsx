import { useForm } from "react-hook-form";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

// Definimos los campos del formulario
interface RegistroFormInputs {
  email: string;
  password:  string;
  confirmPassword:  string;
}

const Registro = () => {
  const { registrarUsuario } = useAppContext();
  const navegacion = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegistroFormInputs>();

  // Observamos el campo password para poder compararlo en tiempo real con la confirmación
  const passwordActual = watch("password");

  const onSubmit = (data: RegistroFormInputs) => {
    // Creamos el objeto del nuevo usuario con un ID único, descartando 'confirmPassword'
    const nuevoUsuario = {
      id: crypto.randomUUID(),
      email: data.email.toLowerCase(), // Guardamos siempre en minúsculas
      password: data.password
    };

    // Intentamos registrar al usuario en nuestro estado global
    const exito = registrarUsuario(nuevoUsuario);

    if (exito) {
      Swal.fire({
        title: "¡Registro Exitoso!",
        text: "Tu cuenta ha sido creada correctamente.",
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
      });
      // Redireccionamos al login para que inicie sesión
      navegacion("/login");
    } else {
      Swal.fire({
        title: "Error al registrar",
        text: "Este correo electrónico ya se encuentra registrado.",
        icon: "error",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <section className="flex grow items-center justify-center py-12 px-4 sm:px-6 md:px-30 lg:px-60 xl:px-100 animate-fadeIn">
      <div className=" w-full space-y-8 bg-neutral-600 p-8 rounded-2xl border border-neutral-800 shadow-2xl backdrop-blur-sm">
        <div className="mb-0">
          <h1 className=" text-center text-3xl font-extrabold text-white">
            Regístrate en HARD STOCK
          </h1>
          <p className="mt-2 text-center text-lg text-zinc-400">
            Accede al panel de control de{" "}
            <span className="text-white font-semibold">HARD STOCK</span>
          </p>
        </div>
        <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* EMAIL */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-zinc-300 mb-1">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-slate-200/30 transition-all"
                placeholder="Juanperez2026@gmail.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Email no válido",
                  },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">{errors.email?.message}</p>
            </div>

            {/* CONTRASEÑA */}
            <div>
              <label htmlFor="password" className="block text-lg font-medium text-zinc-300 mb-1">
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                className="w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-slate-200/30 transition-all"
                placeholder="••••••••"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">{errors.password?.message}</p>
            </div>

            {/* CONFIRMAR CONTRASEÑA */}
            <div>
              <label htmlFor="confirmPassword" className="block text-lg font-medium text-zinc-300 mb-1">
                Confirmar Contraseña
              </label>
              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                className="w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-slate-200/30 transition-all"
                placeholder="••••••••"
                {...register("confirmPassword", {
                  required: "Debes confirmar tu contraseña",
                  validate: (value) =>
                    value === passwordActual || "Las contraseñas no coinciden",
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">{errors.confirmPassword?.message}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-bold rounded-lg text-white bg-neutral-800 hover:bg-neutral-900 cursor-pointer text-lg"
            >
              Registrate en el sistema
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registro;