
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import HeroLoginSection from "../components/auth/HeroLoginSection";
import AuthLoginSection from "../components/auth/AuthLoginSection";

if (Platform.OS === "web") {
  require("./AuthScreen.css");
}

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

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#F4F8FF",
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#F4F8FF",
  },
});
