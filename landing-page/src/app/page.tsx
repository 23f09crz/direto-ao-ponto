import Head from "next/head";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Tabs } from "@/components/Tabs";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Direto ao Ponto</title>
      </Head>
      <Header />
      <main className="bg-purple1">
        <Hero />
        <Tabs />
        <CTA />
      </main>
    </>
  );
}
