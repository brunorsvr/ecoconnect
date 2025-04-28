import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import googleLogo from '../../assets/google-logo.png';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
  const people = [
    { name: "Toro", city: "", text: "Recebi um ótimo atendimento. Instalar as placas foi a melhor decisão.", rating: 5 },
    { name: "Matheus Oliveira", city: "Votorantim, SP", text: "Fui muito bem atendido, esclarecendo todas as dúvidas.", rating: 5 },
    { name: "Bruno Rodrigues", city: "Itu, SP", text: "Empresa diferenciada e muito capacitada. Atendimento excelente.", rating: 5 },
    { name: "Fabio", city: "Sorocaba, SP", text: "Recebi um excelente atendimento, super recomendo.", rating: 5 },
    { name: "Joaquim", city: "Sorocaba, SP", text: "Recebi um excelente atendimento, super recomendo.", rating: 5 }
  ];

  return (
    <section id="testimonials" className="flex flex-col items-center py-16 bg-orange-500">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-5">
        Depoimentos
      </h1>
      <div className="w-full max-w-screen">
        <Swiper
          className="w-full"
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {people.map((person, index) => (
            <SwiperSlide key={index}>
                <div className="bg-white rounded-[30px] p-6 m-4 shadow-md min-h-[260px] flex flex-col justify-between">
                <p className="mb-4">{person.text}</p>
                <div className="flex items-center gap-2">
                    <img src={googleLogo} alt="Google" className="w-6 h-6" />
                    <div>
                    <strong>{person.name}</strong>
                    <div className="text-sm">{person.city}</div>
                    </div>
                </div>
                <div className="flex mt-2">
                    {Array.from({ length: person.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">&#9733;</span>
                    ))}
                </div>
                </div>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
