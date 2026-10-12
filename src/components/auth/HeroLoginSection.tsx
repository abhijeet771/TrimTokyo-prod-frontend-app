
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AUTH_CONTENT, AUTH_THEME, AUTH_CONFIG } from "../../constants/auth";

if (Platform.OS === "web") {
  require("./HeroLoginSection.css");
}

const heroImage = require("../../assets/images/hero.png");

export default function HeroLoginSection() {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: AUTH_CONFIG.heroAnimationDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: AUTH_CONFIG.heroAnimationDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    return () => animation.stop();
  }, [opacity, translateY]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <View style={styles.brandRow}>
        <Text style={styles.brand}>
          <Text style={styles.brandAccent}>Trim</Text>
          Tokyo
        </Text>
        <Text style={styles.scissors}>✂</Text>
      </View>

      <Text style={styles.brandTagline}>
        {AUTH_CONTENT.brandTagline}
      </Text>

      <View style={styles.heroContent}>
        <View style={styles.copy}>
          <View style={styles.accentLine} />

          <Text style={styles.title}>
            {AUTH_CONTENT.heroTitle}{"\n"}
            <Text style={styles.highlight}>
              {AUTH_CONTENT.heroHighlight}
            </Text>
          </Text>

          <Text style={styles.description}>
            {AUTH_CONTENT.heroDescription}
          </Text>
        </View>

        <Image
          source={heroImage}
          style={styles.heroImage}
          resizeMode="cover"
          accessibilityLabel="Stylish barber haircut inspiration"
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: AUTH_THEME.background,
    paddingTop: Platform.OS === "ios" ? 20 : 12,
    paddingHorizontal: 24,
    overflow: "hidden",
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  brand: {
    fontSize: 32,
    fontWeight: "800",
    color: AUTH_THEME.text,
    letterSpacing: -1,
  },
  brandAccent: {
    color: AUTH_THEME.primary,
  },
  scissors: {
    fontSize: 27,
    color: AUTH_THEME.primary,
  },
  brandTagline: {
    fontSize: 9,
    letterSpacing: 3,
    color: AUTH_THEME.secondaryText,
    marginTop: 5,
  },
  heroContent: {
    minHeight: 310,
    marginTop: 28,
    justifyContent: "center",
    position: "relative",
  },
  copy: {
    width: "75%",
    zIndex: 2,
  },
  accentLine: {
    width: 48,
    height: 3,
    backgroundColor: AUTH_THEME.primary,
    borderRadius: 2,
    marginBottom: 22,
  },
  title: {
    fontSize: 31,
    lineHeight: 39,
    fontWeight: "500",
    color: AUTH_THEME.text,
  },
  highlight: {
    color: AUTH_THEME.primary,
    fontWeight: "800",
  },
  description: {
    marginTop: 16,
    maxWidth: 250,
    fontSize: 15,
    lineHeight: 23,
    color: AUTH_THEME.secondaryText,
  },
  heroImage: {
    position: "absolute",
    right: -24,
    bottom: 0,
    width: "57%",
    height: "100%",
    opacity: 0.96,
  },
});
