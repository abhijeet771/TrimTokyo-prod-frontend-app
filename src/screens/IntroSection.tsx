import React, { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  Image,
  Text,
  View,
} from "react-native";

import {
  INTRO_CONTENT,
  INTRO_CONFIG,
} from "../constants/intro";

import { styles } from "./IntroSection.styles";

const logoImage = require("../assets/images/logo.png");

export default function IntroSection() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const translateY = useRef(new Animated.Value(18)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineTranslateY = useRef(new Animated.Value(10)).current;

  useEffect(() => {
    const logoAnimation = Animated.parallel([
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

      Animated.timing(translateY, {
        toValue: 0,
        duration: INTRO_CONFIG.logoAnimationDuration,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]);

    logoAnimation.start();

    const taglineTimer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(taglineOpacity, {
          toValue: 1,
          duration: 700,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),

        Animated.timing(taglineTranslateY, {
          toValue: 0,
          duration: 700,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    }, INTRO_CONFIG.taglineDelay);

    return () => {
      clearTimeout(taglineTimer);
      logoAnimation.stop();
      opacity.stopAnimation();
      scale.stopAnimation();
      translateY.stopAnimation();
      taglineOpacity.stopAnimation();
      taglineTranslateY.stopAnimation();
    };
  }, [
    opacity,
    scale,
    translateY,
    taglineOpacity,
    taglineTranslateY,
  ]);

  return (
    <View style={styles.container}>
      {/* Decorative blue background shapes */}
      <View style={styles.topGlow} />
      <View style={styles.bottomGlow} />
      <View style={styles.blueOrb} />

      {/* Main brand content */}
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity,
              transform: [
                { scale },
                { translateY },
              ],
            },
          ]}
        >
          <Image
            source={logoImage}
            style={styles.logo}
            resizeMode="contain"
            accessibilityLabel="TrimTokyo logo"
          />
        </Animated.View>

        <Animated.Text
          style={[
            styles.brand,
            {
              opacity,
              transform: [{ translateY }],
            },
          ]}
        >
          {INTRO_CONTENT.brandName}
        </Animated.Text>

        <View style={styles.accentContainer}>
          <View style={styles.accentLine} />
          <View style={styles.accentDot} />
          <View style={styles.accentLine} />
        </View>

        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity: taglineOpacity,
              transform: [{ translateY: taglineTranslateY }],
            },
          ]}
        >
          {INTRO_CONTENT.tagline}
        </Animated.Text>

        <Animated.View
          style={[
            styles.statusIndicator,
            { opacity: taglineOpacity },
          ]}
        >
          <View style={styles.statusDot} />
          <Text style={styles.statusText}>
            YOUR STYLE STARTS HERE
          </Text>
        </Animated.View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        {INTRO_CONTENT.footer}
      </Text>
    </View>
  );
}