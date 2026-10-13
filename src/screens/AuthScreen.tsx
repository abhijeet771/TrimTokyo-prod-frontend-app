import React from "react";
import {
  ScrollView,
  View,
} from "react-native";

import HeroLoginSection from "../components/auth/HeroLoginSection";
import AuthLoginSection from "../components/auth/AuthLoginSection";

import { styles } from "./AuthScreen.styles";

export default function AuthScreen() {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <HeroLoginSection />
        <AuthLoginSection />
      </View>
    </ScrollView>
  );
}