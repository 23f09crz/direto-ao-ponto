import React from "react";
import { View, StyleSheet } from "react-native";
import SupplierCarousel from "@/components/SupplierCarousel";
import Header from "@/components/Header";
import WelcomeMessage from "@/components/WelcomeMessage"; // Importe o novo componente

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho fixo no topo */}
      <Header location="Rua M.M.D.C, 80" notifications={6} />

      {/* Componente de Boas-Vindas */}
      <WelcomeMessage name="Camila" /> 

      {/* Espaço para o conteúdo abaixo do cabeçalho */}
      <SupplierCarousel />
      <SupplierCarousel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingHorizontal: 12,
  },
});
