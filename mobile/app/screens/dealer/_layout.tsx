import { Stack } from "expo-router";
import HomeScreen from "../../index";

export default function Layout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
