import { Slot } from "expo-router";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import "../global.css";

export default function Layout() {
  return (
    <View className="flex flex-1 bg-white">
      <StatusBar style="auto" />
      <Slot />
    </View>
  );
}
