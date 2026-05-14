const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-4 text-center">
        <h3 className="text-lg font-bold uppercase">Hard Stocks</h3>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
        <p className="text-sm mt-2 text-stone-300">Develop by <span className="font-bold">Funes Gabriel - Paez Nair - Holmquist Ignacio</span></p>
    </footer>
  );
};

export default Footer;
