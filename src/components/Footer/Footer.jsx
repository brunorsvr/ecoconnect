import logo from "../../assets/logo_ecoconnect_transparent.png"
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-10 max-w-7xl mx-auto gap-8">
        <div>
          <img
            src={logo}
            alt="EcoConnect Logo"
            className="w-70"
          />
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Rodovia Senador José Ermírio de Moraes, 1425 - Jardim Constantino Matucci, Sorocaba - SP</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✉️</span>
            <span>pereolive25@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <span>(15) 98133-0993</span>
          </div>
        </div>
      </div>

      <div className="bg-orange-500 text-white flex flex-col md:flex-row justify-between items-center px-6 py-4 text-xs">
        <div>© 2025 | EcoConnect Energia Solar - Todos os Direitos Reservados.</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Políticas de Privacidade</a>
          <span>|</span>
          <a href="#" className="hover:underline">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;