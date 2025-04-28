import contaDeLuz from '../../assets/contadeluz.png';
import painelSolar from '../../assets/painel.png';

const Benefits = () => {
  return (
    <section id="benefits" className="flex flex-col px-6 py-16 max-w-5xl mx-auto">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-orange-500 mb-5">
        Benefícios
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-bold text-gray-800 leading-tight">
            Reduza sua conta<br />
            de luz <span className="bg-orange-500 text-white px-3 py-1 rounded">em até 97%</span>
          </h2>
        </div>
        <div className="flex-1 flex justify-center mx-5">
          <img
            src={contaDeLuz}
            alt="Contas de luz"
            className="w-72 md:w-96"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16">
        <div className="flex-1 flex justify-center">
          <img
            src={painelSolar}
            alt="Painel Solar"
            className="rounded-2xl w-80 max-w-md"
          />
        </div>

        <div className="flex-1 flex justify-center">
          <ul className="list-disc list-inside text-gray-700 text-2xl leading-relaxed space-y-4">
            <li>Economia na Conta de Luz</li>
            <li>Redução da Pegada de Carbono</li>
            <li>Valorização do Imóvel</li>
            <li>Baixa Manutenção</li>
            <li>Alta Durabilidade</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
