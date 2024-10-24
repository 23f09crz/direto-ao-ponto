import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons"; 

interface HeaderProps {
  location: string;
  notifications: number;
}

const Header: React.FC<HeaderProps> = ({ location, notifications }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Localização do Cliente */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{location}</Text>
        <TouchableOpacity style={styles.changeLocationButton}>
          <Feather name="chevron-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Ícone de Notificação no canto direito */}
      <View style={styles.notificationContainer}>
        <Feather name="bell" size={24} color="black" />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>{notifications}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 4,
    backgroundColor: "#fff",
  },
  notificationContainer: {
    position: "relative",
  },
  notificationBadge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "red",
    borderRadius: 12,
    width: 15,
    height: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 16,
    color: "#333",
    fontFamily: "FeatherBold",
    marginRight: 4,
  },
  changeLocationButton: {
    paddingLeft: 4,
  },
});

export default Header;
