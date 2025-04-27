import Button from "../Button/Button"

const Header = () => {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-black/30 backdrop-blur-md fixed w-full z-10">
          <Button href="#" className="text-white font-bold text-2xl">EcoConnect</Button>
          <nav className="flex gap-4">
            <Button href="#benefits" className="border border-white text-white rounded-full px-4 py-1 hover:bg-white hover:text-orange-500 transition">Benefícios</Button>
            <Button href="#form" className="border border-white text-white rounded-full px-4 py-1 hover:bg-white hover:text-orange-500 transition">Contate-nos</Button>
          </nav>
        </header>
      );
}

export default Header