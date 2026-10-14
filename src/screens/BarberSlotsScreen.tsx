import React, { useState } from "react";
import {
  View,
  ScrollView,
} from "react-native";

import BarberHeader from "../components/barber/BarberHeader";
import BarberBottomNav from "../components/barber/BarberBottomNav";

import SlotTabs, { SlotTabType,} from "../components/barber/SlotTabs";
import CreateAvailabilityForm, { GeneratedSlot,} from "../components/barber/CreateAvailabilityForm";
import UpcomingBookings from "../components/barber/UpcomingBookings";
import GeneratedSlots from "../components/barber/GeneratedSlots";

import { styles } from "./BarberSlotsScreen.styles";

export default function BarberSlotsScreen() {
  const [activeTab, setActiveTab] =
    useState<SlotTabType>("CREATE");

  const [generatedSlots, setGeneratedSlots] =
    useState<GeneratedSlot[]>([]);

  const handleGenerateSlots = (
    newSlots: GeneratedSlot[]
  ) => {
    setGeneratedSlots((previousSlots) => {
      // Avoid duplicate slots if the same date and time
      // are generated more than once.
      const existingKeys = new Set(
        previousSlots.map(
          (slot) =>
            `${slot.date}|${slot.startTime}|${slot.endTime}`
        )
      );

      const uniqueNewSlots = newSlots.filter((slot) => {
        const key =
          `${slot.date}|${slot.startTime}|${slot.endTime}`;

        return !existingKeys.has(key);
      });

      return [...previousSlots, ...uniqueNewSlots];
    });
  };

  const handleDeleteSlot = (slotId: string) => {
    setGeneratedSlots((previousSlots) =>
      previousSlots.filter((slot) => slot.id !== slotId)
    );
  };

  const handleClearAllSlots = () => {
    setGeneratedSlots([]);
  };

  return (
    <View style={styles.container}>
      <BarberHeader />

      <View style={styles.body}>
        <SlotTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {activeTab === "CREATE" ? (
            <>
              <CreateAvailabilityForm
                onGenerate={handleGenerateSlots}
              />

              <UpcomingBookings />
            </>
          ) : (
            <GeneratedSlots
              slots={generatedSlots}
              onDeleteSlot={handleDeleteSlot}
              onClearAll={handleClearAllSlots}
            />
          )}
        </ScrollView>
      </View>

      <BarberBottomNav />
    </View>
  );
}