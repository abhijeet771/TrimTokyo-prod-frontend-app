import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Platform,
  Text,
  View,
} from "react-native";

import {
  AUTH_CONTENT,
  AUTH_CONFIG,
} from "../../constants/auth";

import { styles } from "./HeroLoginSection.styles";

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
      {/* Brand */}
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

      {/* Hero content */}
      <View style={styles.heroContent}>
        <View style={styles.copy}>
          <View style={styles.accentLine} />

          <Text style={styles.title}>
            {AUTH_CONTENT.heroTitle}
            {"\n"}
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