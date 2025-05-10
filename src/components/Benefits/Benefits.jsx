import contaDeLuz from '../../assets/contadeluz.png';
import painelSolar from '../../assets/painel.png';

const Benefits = () => {
  const benefits = [
    {
      title: "Economia na Conta",
      text: "Reduza sua fatura em até 95% e evite os reajustes das tarifas.",
      icon: "💰",
    },
    {
      title: "Valorização do Imóvel",
      text: "Aumente o valor de mercado do seu imóvel com energia solar.",
      icon: "🏡",
    },
    {
      title: "Retorno sobre Investimento",
      text: "Recupere o valor investido em 4 a 6 anos e economize por décadas.",
      icon: "📈",
    },
    {
      title: "Sustentabilidade",
      text: "Ajude o meio ambiente reduzindo sua emissão de CO₂.",
      icon: "🌱",
    },
    {
      title: "Baixa Manutenção",
      text: "Painéis solares exigem pouca manutenção e têm vida útil de 25 anos.",
      icon: "🛠️",
    },
    {
      title: "Independência Energética",
      text: "Produza sua própria energia e dependa menos das concessionárias.",
      icon: "⚡",
    },
  ];

  return (
    <section id="benefits" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Benefícios da Energia Solar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-orange-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;