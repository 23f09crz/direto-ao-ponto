import Image from "next/image";

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-light1 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Direto ao Ponto Logo"
          width={144}
          height={200}
        />
      </div>

      {/* Botão */}
      <button className="bg-purple1 text-light1 px-6 py-3 rounded-full hover:bg-purple2 transition transform duration-300 hover:scale-105 font-[family-name:var(--font-feather-bold)]">
        Ir para o app
      </button>
    </header>
  );
}
