"use client";

import { useState } from "react";

export function Tabs() {
  const [activeTab, setActiveTab] = useState("Revendedor");

  const tabs = ["Fornecedor", "Revendedor", "Cliente"];

  return (
    <div className="bg-light2 p-8 rounded-lg shadow-lg mx-auto max-w-4xl">
      <div className="flex justify-center space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-xl font-[family-name:var(--font-feather-bold)] font-semibold transition-colors duration-300 ${
              activeTab === tab
                ? "text-purple1 border-b-2 border-purple1"
                : "text-gray-400 hover:text-purple1"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {activeTab === "Revendedor" && (
          <div>
            <p className="text-dark2 font-[family-name:var(--font-feather-bold)]">
              Tudo o que você precisa para vender em um só lugar
            </p>
            <ul className="list-disc mt-4 text-black space-y-2">
              <li>Exiba seu catálogo de produtos</li>
              <li>
                Acompanhe sua jornada de vendas e veja os benefícios que pode
                conquistar
              </li>
              <li>Comunique-se com seus clientes através do chat</li>
              <li>Veja quais novos produtos você pode adquirir</li>
              <li>Organize sua agenda de vendas</li>
            </ul>
          </div>
        )}

        {activeTab === "Fornecedor" && (
          <div>
            <p className="text-dark2 font-[family-name:var(--font-feather-bold)]">
              Ferramentas essenciais para fornecedores
            </p>
            <ul className="list-disc mt-4 text-black space-y-2">
              <li>Gerencie seu inventário e estoque</li>
              <li>Cadastre novos produtos rapidamente</li>
              <li>Monitore o desempenho de vendas</li>
              <li>Receba feedback direto dos revendedores</li>
              <li>Ofereça promoções exclusivas para parceiros</li>
            </ul>
          </div>
        )}

        {activeTab === "Cliente" && (
          <div>
            <p className="text-dark2 font-[family-name:var(--font-feather-bold)]">
              Benefícios exclusivos para clientes
            </p>
            <ul className="list-disc mt-4 text-black space-y-2">
              <li>Acesse uma ampla variedade de produtos</li>
              <li>Compre diretamente de revendedores confiáveis</li>
              <li>Receba suporte personalizado através do chat</li>
              <li>Fique por dentro de novas promoções e ofertas</li>
              <li>Crie listas de desejos para futuras compras</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
