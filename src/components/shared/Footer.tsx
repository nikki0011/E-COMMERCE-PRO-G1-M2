import { AiOutlineDoubleLeft } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <AiOutlineDoubleLeft className="text-slate-100 text-2xl" />
        <h3 className="text-lg font-bold uppercase">Hard Stocks</h3>
      </div>
      <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      <p className="text-sm mt-2 text-stone-300">
        Develop by{" "}
        <span className="font-bold">
          Funes Gabriel - Paez Nair - Holmquist Ignacio
        </span>
      </p>
    </footer>
  );
};

export default Footer;
