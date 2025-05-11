import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import contaDeLuz from "../../assets/contadeluz.png";
import painelSolar from "../../assets/painel.png";
import investimento from "../../assets/investimento.jpg";
import sustentabilidade from "../../assets/sustentabilidade.jpg";
import manutencao from "../../assets/manutencao.jpg";
import valorizacao from "../../assets/valorizacao.jpg";

const Benefits = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const benefits = [
    {
      title: "Economia na Conta",
      text: "Reduza sua fatura em até 95% e evite os reajustes das tarifas.",
      icon: "💰",
      image: contaDeLuz,
      detailsText: (
        <>
          <p className="text-gray-700 mb-2">
            Ao gerar sua própria energia, você reduz drasticamente a fatura mensal — e ainda se protege dos aumentos tarifários.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Redução de até 95% na conta de luz</li>
            <li>Estabilidade financeira contra aumentos</li>
            <li>Economia acumulada de até R$ 100 mil em 25 anos</li>
          </ul>
        </>
      ),
    },
    {
      title: "Valorização do Imóvel",
      text: "Aumente o valor de mercado do seu imóvel com energia solar.",
      icon: "🏡",
      image: valorizacao,
      detailsText: (
        <>
          <p className="text-gray-700 mb-2">
            Imóveis com energia solar são mais atrativos e podem valorizar até 20% a mais no mercado.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Destaque em portais imobiliários</li>
            <li>Mais atratividade em financiamentos</li>
            <li>Maior valor de revenda</li>
          </ul>
        </>
      ),
    },
    {
      title: "Retorno sobre Investimento",
      text: "Recupere o valor investido em 4 a 6 anos.",
      icon: "📈",
      image: investimento,
      detailsText: (
        <>
          <p className="text-gray-700 mb-2">
            Após o payback, você economiza por décadas. O sistema fotovoltaico é um dos investimentos mais rentáveis.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Payback entre 4 a 6 anos</li>
            <li>Mais de 20 anos de economia</li>
            <li>Alta rentabilidade e previsibilidade</li>
          </ul>
        </>
      ),
    },
    {
      title: "Sustentabilidade",
      text: "Ajude o meio ambiente reduzindo sua emissão de CO₂.",
      icon: "🌱",
      image: sustentabilidade,
      detailsText: (
        <>
          <p className="text-gray-700 mb-2">
            A energia solar é limpa, renovável e essencial na luta contra as mudanças climáticas.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Menos CO₂ na atmosfera</li>
            <li>Preservação de recursos naturais</li>
            <li>Contribuição ambiental real</li>
          </ul>
        </>
      ),
    },
    {
      title: "Baixa Manutenção",
      text: "Painéis solares exigem pouca manutenção.",
      icon: "🛠️",
      image: manutencao,
      detailsText: (
        <>
          <p className="text-gray-700 mb-2">
            Os painéis exigem apenas limpezas ocasionais e verificações simples para garantir eficiência.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Longa durabilidade</li>
            <li>Garantia de até 25 anos</li>
            <li>Baixo custo de manutenção</li>
          </ul>
        </>
      ),
    },
    {
      title: "Independência Energética",
      text: "Produza sua própria energia.",
      icon: "⚡",
      image: painelSolar,
      detailsText: (
        <>
          <p className="text-gray-700 mb-2">
            Ao gerar sua energia, você depende menos das concessionárias e evita tarifas abusivas.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
            <li>Autonomia no consumo</li>
            <li>Proteção contra apagões</li>
            <li>Estabilidade em tempos de crise</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section id="benefits" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[300px] flex-shrink-0 space-y-4">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setSelectedIndex(index === selectedIndex ? null : index)
                }
                className={`w-full text-left p-3 rounded-xl border transition shadow-sm hover:shadow-md ${
                  index === selectedIndex
                    ? "bg-orange-200 border-orange-400"
                    : "bg-orange-100 border-transparent"
                }`}
              >
                <div className="text-xl mb-1">{benefit.icon}</div>
                <h3 className="font-medium text-base text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{benefit.text}</p>
              </button>

              {isMobile && (
                <AnimatePresence>
                  {selectedIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-orange-50 p-4 rounded-xl mt-2 overflow-hidden"
                    >
                      <div className="flex gap-4 items-start">
                        <img src={benefit.image} alt={benefit.title} className="w-24 h-auto rounded shadow" />
                        <div className="flex-1">{benefit.detailsText}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {!isMobile && (
          <AnimatePresence mode="wait">
            {selectedIndex !== null && (
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="flex-1 bg-orange-50 p-6 rounded-2xl shadow-md"
              >
                <div className="flex gap-6 items-start">
                  <img
                    src={benefits[selectedIndex].image}
                    alt={benefits[selectedIndex].title}
                    className="w-64 h-auto rounded shadow"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">
                      {benefits[selectedIndex].title}
                    </h2>
                    {benefits[selectedIndex].detailsText}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Benefits;
