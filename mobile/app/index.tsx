import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Escolha uma opção</Text>

      <TouchableOpacity
        style={[styles.button, styles.clienteButton]}
        onPress={() => router.push("/screens/client")}
      >
        <Text style={styles.buttonText}>Sou Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.dealerButton]}
        onPress={() => router.push("/screens/dealer")}
      >
        <Text style={styles.buttonText}>Sou Revendedor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'FeatherBold',
    color: "#7400B8",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'FeatherBold',
    color: "#7400B8",
    marginBottom: 40,
  },
  button: {
    width: "80%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  clienteButton: {
    backgroundColor: "#48BFE3",
  },
  dealerButton: {
    backgroundColor: "#7400B8",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'FeatherBold',
    color: "#fff",
  },
});
