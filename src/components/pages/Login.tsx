import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { useAppContext } from "../../context/AppContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Login = () => {
  const { setUsuarioLogueado } = useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navegacion = useNavigate();

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
    if (
      data.email === import.meta.env.VITE_EMAIL &&
      data.password === import.meta.env.VITE_PASSWORD
    ) {
      setUsuarioLogueado(true);
      Swal.fire({
        title: "Bienvenido Administrador",
        text: "Ingresando al sistema",
        icon: "success",
        background: "#18181b",
        color: "#f4f4f5",
        confirmButtonColor: "#3b82f6",
      });
      //redirecciono al admin
      navegacion("/administrador");
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Credenciales incorrectas",
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
            Iniciar Sesión
          </h1>
          <p className="mt-2 text-center text-lg text-zinc-400">
            Accede al panel de control de{" "}
            <span className="text-white font-semibold">HARD STOCK</span>
          </p>
        </div>
        <form className="mt-4 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-zinc-300 mb-1"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-slate-200/30 transition-all`}
                placeholder="Juanperez2026@gmail.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message: "Email no válido",
                  },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.email?.message}
              </p>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-zinc-300 mb-1"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className={`w-full px-4 py-3 bg-zinc-950 border rounded-lg text-zinc-100 focus:outline-none focus:ring-2 focus:ring-slate-200/30 transition-all`}
                placeholder="••••••••"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                    message:
                      "Debe tener 8-16 caracteres, mayúscula, minúscula, número y símbolo.",
                  },
                })}
              />
              <p className="text-red-500 text-xs mt-1 italic">
                {errors.password?.message}
              </p>
            </div>
            <div className="text-center text-lg">
              <p>
                ¿No tienes una cuenta?{" "}
                <Link
                  to="/registro"
                  className="text-slate-900 hover:underline text-center"
                >
                  Regístrate aquí
                </Link>
              </p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-bold rounded-lg text-white bg-neutral-800 hover:bg-neutral-900 cursor-pointer text-lg"
            >
              Ingresar al sistema
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
