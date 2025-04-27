import Button from "../Button/Button"

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const telefone = e.target.telefone.value;
    const email = e.target.email.value;
    const valorConta = e.target.valorConta.value;
    const tipoCasa = e.target.tipoCasa.value;

    const mensagem = `Olá! Meu nome é ${nome}, meu telefone é ${telefone}, meu email é ${email}. Minha conta de luz é aproximadamente R$${valorConta} e o tipo de imóvel é ${tipoCasa}. Gostaria de saber mais sobre energia solar!`;

    const url = `https://wa.me/5515981330993?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="form" className="flex flex-col items-center py-16 px-6">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-500 mb-5">
        Contate-nos
      </h1>
      <div className="bg-orange-500 text-white p-8 rounded-[30px] max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Quer economizar até 97% na sua conta de energia?</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input name="nome" className="rounded-[10px] bg-white p-3 text-black" placeholder="Nome" required/>
          <input name="telefone" className="rounded-[10px] bg-white p-3 text-black" placeholder="Telefone" />
          <input name="email" type="email" className="rounded-[10px] bg-white p-3 text-black" placeholder="Email" />
          <input name="valorConta" type="number" className="rounded-[10px] bg-white p-3 text-black" placeholder="Valor da conta de luz (R$)" required/>
          <select name="tipoCasa" className="rounded-[10px] bg-white p-3 text-black" required>
            <option value="">Selecione o tipo de imóvel</option>
            <option value="Residencial">Residencial</option>
            <option value="Industrial">Industrial</option>
            <option value="Rural">Rural</option>
          </select>
          <Button type="submit" className="bg-white text-orange-500 font-semibold py-3 mt-4 rounded-[30px] hover:bg-orange-100 transition">
            Enviar mensagem no WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Form;