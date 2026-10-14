
import React from "react";
import { View } from "react-native";

import BarberHeader from "../components/barber/BarberHeader";
import BarberHomeOverview from "../components/barber/BarberHomeOverview";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import { styles } from "./BarberDashboard.styles";

export default function BarberDashboard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <BarberHeader />

      {/* Dashboard Content */}
      <View style={styles.content}>
        <BarberHomeOverview />
      </View>

      {/* Fixed Bottom Navigation */}
      <BarberBottomNav />
    </View>
  );
}