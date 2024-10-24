import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Para a seta de localização

interface WelcomeMessageProps {
  name: string;
}

const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
  return (
    <View style={styles.welcomeContainer}>
      {/* Saudação com o nome */}
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Olá, {name}!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 22,
    fontFamily: "FeatherBold",
    color: "#333",
  },
});

export default WelcomeMessage;
