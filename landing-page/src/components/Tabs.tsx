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
            <ul className="list-disc mt-4 text-purple1 space-y-2">
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
        {/* Adicionar conteúdo para outras abas (Fornecedor e Cliente) */}
      </div>
    </div>
  );
}
