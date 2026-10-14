import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { router } from "expo-router";

import {
  PRIVACY_CONTENT,
  PRIVACY_CONFIG,
  PRIVACY_THEME,
} from "../constants/privacy";
import { styles } from "./PrivacyPolicyScreen.styles";

export default function PrivacyPolicyScreen() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    PRIVACY_CONFIG.initiallyExpanded
  );

  const toggleSection = (sectionId: string) => {
    setExpandedSection((current) =>
      current === sectionId ? null : sectionId
    );
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <View style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={PRIVACY_THEME.background}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Go back"
              onPress={handleBack}
              style={({ pressed }) => [
                styles.backButton,
                pressed && styles.pressed,
              ]}
            >
              <Text style={styles.backIcon}>‹</Text>
            </Pressable>

            <Text style={styles.headerLabel}>
              YOUR PRIVACY
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          {/* Hero */}
          <View style={styles.hero}>
            <View style={styles.heroIcon}>
              <Text style={styles.heroIconText}>✓</Text>
            </View>

            <Text style={styles.title}>
              {PRIVACY_CONTENT.title}
            </Text>

            <Text style={styles.subtitle}>
              {PRIVACY_CONTENT.subtitle}
            </Text>

            <View style={styles.updatedBadge}>
              <View style={styles.updatedDot} />

              <Text style={styles.updatedText}>
                Last updated: {PRIVACY_CONTENT.lastUpdated}
              </Text>
            </View>
          </View>

          {/* Introduction */}
          <View style={styles.introCard}>
            <Text style={styles.introHeading}>
              Your Privacy Matters
            </Text>

            <Text style={styles.bodyText}>
              {PRIVACY_CONTENT.introduction}
            </Text>
          </View>

          {/* Expandable policy sections */}
          <View style={styles.sectionList}>
            {PRIVACY_CONTENT.sections.map((section, index) => {
              const isExpanded = expandedSection === section.id;

              return (
                <View
                  key={section.id}
                  style={styles.sectionCard}
                >
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{
                      expanded: isExpanded,
                    }}
                    onPress={() => toggleSection(section.id)}
                    style={({ pressed }) => [
                      styles.sectionHeader,
                      pressed && styles.pressed,
                    ]}
                  >
                    <View style={styles.sectionIcon}>
                      <Text style={styles.sectionIconText}>
                        {String(index + 1).padStart(2, "0")}
                      </Text>
                    </View>

                    <Text style={styles.sectionTitle}>
                      {section.title}
                    </Text>

                    <View
                      style={[
                        styles.expandButton,
                        isExpanded && styles.expandButtonActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.expandIcon,
                          isExpanded && styles.expandIconActive,
                        ]}
                      >
                        {isExpanded ? "−" : "+"}
                      </Text>
                    </View>
                  </Pressable>

                  {isExpanded && (
                    <View style={styles.sectionBody}>
                      {section.content.map(
                        (paragraph, paragraphIndex) => (
                          <View
                            key={`${section.id}-${paragraphIndex}`}
                            style={styles.paragraphRow}
                          >
                            <View style={styles.bullet} />

                            <Text style={styles.bodyText}>
                              {paragraph}
                            </Text>
                          </View>
                        )
                      )}
                    </View>
                  )}
                </View>
              );
            })}
          </View>

          {/* Privacy support */}
          <View style={styles.footerCard}>
            <View style={styles.footerIcon}>
              <Text style={styles.footerIconText}>?</Text>
            </View>

            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>
                Questions about your data?
              </Text>

              <Text style={styles.footerDescription}>
                Contact our support team for privacy-related requests
                or questions about your information.
              </Text>
            </View>
          </View>

          {/* Branding */}
          <Text style={styles.footerBrand}>
            TRIMTOKYO
          </Text>

          <Text style={styles.footerCaption}>
            YOUR STYLE. YOUR IDENTITY.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}