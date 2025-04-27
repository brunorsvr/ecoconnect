import Button from "../Button/Button"

const Hero = () => {
    return (
        <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r relative text-center">
          <div className="absolute inset-0 bg-cover opacity-20" />
          <div className="relative z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-15">
              Deixe o sol pagar suas contas!
            </h1>
            <Button href="#benefits" className="bg-white text-orange-500 font-semibold py-3 px-6 rounded-[10px] text-lg hover:bg-orange-100 transition">
              Conheça os Benefícios!
            </Button>
          </div>
          <div className="relative z-10 mt-10">
        <Button href="#testimonials" className="border border-white text-white rounded-[30px] px-6 py-2 hover:bg-white hover:text-orange-500 transition">
          Depoimentos
        </Button>
      </div>
        </main>
      );
  };
  
  export default Hero;