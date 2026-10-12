
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { INTRO_CONTENT, INTRO_CONFIG } from "../constants/intro";

if (Platform.OS === "web") {
  require("./IntroSection.css");
}

export default function IntroSection() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.85)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: INTRO_CONFIG.logoAnimationDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 7,
        tension: 55,
        useNativeDriver: true,
      }),
    ]);

    animation.start();

    const timer = setTimeout(() => {
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }, INTRO_CONFIG.taglineDelay);

    return () => {
      clearTimeout(timer);
      animation.stop();
    };
  }, [opacity, scale, taglineOpacity]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: INTRO_CONTENT.backgroundColor },
      ]}
    >
      <View style={styles.content}>
        <Animated.Text
          style={[
            styles.brand,
            {
              opacity,
              transform: [{ scale }],
            },
          ]}
        >
          {INTRO_CONTENT.brandName}
        </Animated.Text>

        <View style={styles.accent} />

        <Animated.Text
          style={[styles.tagline, { opacity: taglineOpacity }]}
        >
          {INTRO_CONTENT.tagline}
        </Animated.Text>
      </View>

      <Text style={styles.footer}>
        {INTRO_CONTENT.footer}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
  },
  brand: {
    fontSize: 42,
    fontWeight: "800",
    letterSpacing: 1.5,
    color: "#FFFFFF",
  },
  accent: {
    width: 54,
    height: 2,
    marginTop: 22,
    marginBottom: 20,
    backgroundColor: "#C8A46A",
    borderRadius: 2,
  },
  tagline: {
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 3,
    color: "#C8A46A",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 42,
    fontSize: 9,
    letterSpacing: 3,
    color: "#77777D",
  },
});
