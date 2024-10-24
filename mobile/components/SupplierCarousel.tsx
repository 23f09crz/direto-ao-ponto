import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Para navegação
import { useRouter } from "expo-router";

const suppliers = [
  { id: 1, name: "Avon", image: require("../assets/avon.png") },
  { id: 2, name: "Jequiti", image: require("../assets/jequiti.png") },
  { id: 3, name: "Cacau Show", image: require("../assets/cacau.png") },
  { id: 4, name: "Mary Kay", image: require("../assets/mary.png") },
  { id: 5, name: "Natura", image: require("../assets/natura.png") },
  { id: 6, name: "Polishop", image: require("../assets/polishop.png") },
  { id: 7, name: "Yakult", image: require("../assets/yakult.png") },
];

const SupplierCarousel = () => {
  const router = useRouter();

  const renderSupplier = ({
    item,
  }: {
    item: { id: number; name: string; image: any };
  }) => (
    <View style={styles.supplierContainer}>
      <View style={styles.logoContainer}>
        <Image source={item.image} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Fornecedores</Text>
        <TouchableOpacity onPress={() => router.push("/screens/client/(tabs)/search")}>
          <Text style={styles.viewMoreText}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <FlatList
          data={suppliers}
          renderItem={renderSupplier}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 24,
    fontFamily: "FeatherBold",
    color: "#7400B8",
    marginVertical: 10,
  },
  viewMoreText: {
    fontSize: 12,
    color: "#2B2B2B",
    fontFamily: "FeatherBold",
  },
  carouselContainer: {
    borderRadius: 50,
    overflow: "hidden",
    paddingVertical: 0,
  },
  carousel: {
    paddingHorizontal: 10,
  },
  supplierContainer: {
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 50,
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 45,
  },
  logo: {
    width: "80%",
    height: "80%",
  },
  supplierName: {
    marginTop: 8,
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
});

export default SupplierCarousel;
