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
  TERMS_CONTENT,
  TERMS_CONFIG,
  TERMS_THEME,
} from "../constants/terms";
import { styles } from "./TermsScreen.styles";

export default function TermsScreen() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    TERMS_CONFIG.initiallyExpanded
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
        backgroundColor={TERMS_THEME.background}
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
              LEGAL INFORMATION
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          {/* Hero */}
          <View style={styles.hero}>
            <View style={styles.heroIcon}>
              <Text style={styles.heroIconText}>§</Text>
            </View>

            <Text style={styles.title}>
              {TERMS_CONTENT.title}
            </Text>

            <Text style={styles.subtitle}>
              {TERMS_CONTENT.subtitle}
            </Text>

            <View style={styles.updatedBadge}>
              <View style={styles.updatedDot} />
              <Text style={styles.updatedText}>
                Last updated: {TERMS_CONTENT.lastUpdated}
              </Text>
            </View>
          </View>

          {/* Introduction */}
          <View style={styles.introCard}>
            <Text style={styles.introHeading}>
              Welcome to TrimTokyo
            </Text>

            <Text style={styles.bodyText}>
              {TERMS_CONTENT.introduction}
            </Text>
          </View>

          {/* Expandable sections */}
          <View style={styles.sectionList}>
            {TERMS_CONTENT.sections.map((section, index) => {
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

          {/* Support footer */}
          <View style={styles.footerCard}>
            <View style={styles.footerIcon}>
              <Text style={styles.footerIconText}>?</Text>
            </View>

            <View style={styles.footerContent}>
              <Text style={styles.footerTitle}>
                Have questions?
              </Text>

              <Text style={styles.footerDescription}>
                Contact our support team for help with these terms.
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