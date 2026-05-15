
const Inicio = () => {
    return (
        <section className="space-y-8 animate-fadeIn container  md:mx-auto mt-6">
      {/* Encabezado con estilo moderno */}
      <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-center border-b border-zinc-800 pb-5 gap-4 ">
        <div>
          <h1 className="text-xl font-bold text-white tracking-tight uppercase bg-neutral-500 p-2 rounded-xl">
            Hard products</h1>
          </div>
          <div>
            <input type="text" placeholder="Que buscas?" className=" border-2 border-neutral-600 bg-neutral-400 rounded-2xl p-2 w-60 md:w-90 placeholder:(text-center,md:text-start) placeholder:text-white" />
          </div>

        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* <CardServicio /> */}
      </div>
    </section>
    );
};

export default Inicio;
