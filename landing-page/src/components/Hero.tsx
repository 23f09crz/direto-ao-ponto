export function Hero() {
  return (
    <section className="bg-purple1 text-light1 text-center py-20 relative">
      <div className="absolute top-0 left-0 bg-turquoise1 rounded-full w-32 h-32 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 bg-turquoise2 rounded-full w-32 h-32 translate-x-1/2"></div>

      <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-feather-bold)] font-bold">
        Descubra uma nova era de vendas e compras!
      </h1>
      <p className="mt-4 text-xl md:text-2xl font-[family-name:var(--font-feather-bold)]">
        Se busca revender sem complicações ou comprar na palma da mão, o Direto
        ao Ponto foi feito pra você!
      </p>
    </section>
  );
}
