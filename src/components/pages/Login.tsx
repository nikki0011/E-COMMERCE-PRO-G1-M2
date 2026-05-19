
const Login = () => {
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
        <form className="mt-4 space-y-6">
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
                placeholder="Juanperez2026@gmail.com"/>
              <p className="text-red-500 text-xs mt-1 italic">
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
                placeholder="••••••••"/>
              <p className="text-red-500 text-xs mt-1 italic">
              </p>
            </div>
            <div className="text-center text-lg">
            <p>¿No tienes una cuenta? <a href="/register" className="text-slate-900 hover:underline text-center">Regístrate aquí</a></p>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent font-bold rounded-lg text-white bg-neutral-800 hover:bg-neutral-900 cursor-pointer text-lg">
              Ingresar al sistema
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
