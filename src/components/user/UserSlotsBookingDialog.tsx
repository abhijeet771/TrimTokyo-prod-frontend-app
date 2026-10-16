import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import type { SlotsShop } from "../../constants/user/userSlotsShops";

import {
  BOOKING_DATES,
  BOOKING_TIME_SLOTS,
  USER_SLOT_BOOKING_CONTENT,
} from "../../constants/user/userSlotsBooking";

import { styles } from "./UserSlotsBookingDialog.styles";

const SHOP_IMAGES = {
  shop1: require("../../assets/shop/s1.png"),
  shop2: require("../../assets/shop/s2.png"),
  shop3: require("../../assets/shop/s3.png"),
  shop4: require("../../assets/shop/s4.png"),
};

export interface SlotBookingDetails {
  shop: SlotsShop;
  date: string;
  time: string;
}

interface UserSlotsBookingDialogProps {
  visible: boolean;
  shop: SlotsShop | null;
  onClose: () => void;
  onBookSlot: (details: SlotBookingDetails) => void;
}

export default function UserSlotsBookingDialog({
  visible,
  shop,
  onClose,
  onBookSlot,
}: UserSlotsBookingDialogProps) {
  const [selectedDate, setSelectedDate] = useState(
    BOOKING_DATES[0]?.id ?? ""
  );
  const [selectedTime, setSelectedTime] = useState("4:00 PM");

  useEffect(() => {
    if (visible) {
      setSelectedDate(BOOKING_DATES[0]?.id ?? "");
      setSelectedTime("4:00 PM");
    }
  }, [visible, shop?.id]);

  const handleBookSlot = () => {
    if (!shop) {
      return;
    }

    if (!selectedDate) {
      Alert.alert(
        "Select Date",
        USER_SLOT_BOOKING_CONTENT.noDateMessage
      );
      return;
    }

    if (!selectedTime) {
      Alert.alert(
        "Select Time",
        USER_SLOT_BOOKING_CONTENT.noTimeMessage
      );
      return;
    }

    onBookSlot({
      shop,
      date: selectedDate,
      time: selectedTime,
    });
  };

  if (!shop) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <Pressable
          style={styles.backdrop}
          onPress={onClose}
          accessibilityLabel={USER_SLOT_BOOKING_CONTENT.closeLabel}
        />

        <View style={styles.dialog}>
          <View style={styles.handle} />

          <View style={styles.dialogHeader}>
            <Text style={styles.dialogTitle}>
              {USER_SLOT_BOOKING_CONTENT.title}
            </Text>

            <Pressable
              style={styles.closeButton}
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel={USER_SLOT_BOOKING_CONTENT.closeLabel}
            >
              <Ionicons
                name="close"
                size={23}
                color="#667085"
              />
            </Pressable>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.shopInfo}>
              <Image
                source={SHOP_IMAGES[shop.imageKey]}
                style={styles.shopImage}
                resizeMode="cover"
              />

              <View style={styles.shopDetails}>
                <Text style={styles.shopName}>
                  {shop.name}
                </Text>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="star"
                    size={15}
                    color="#FFA51F"
                  />
                  <Text style={styles.detailText}>
                    {shop.rating.toFixed(1)} ({shop.reviewCount} reviews)
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="location-outline"
                    size={15}
                    color="#7B8798"
                  />
                  <Text style={styles.detailText}>
                    {shop.location}
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Ionicons
                    name="time-outline"
                    size={15}
                    color="#7B8798"
                  />
                  <Text style={styles.detailText}>
                    {shop.openingTime} - {shop.closingTime}
                  </Text>
                </View>
              </View>
            </View>

            <Text style={styles.sectionTitle}>
              {USER_SLOT_BOOKING_CONTENT.selectDate}
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dateList}
            >
              {BOOKING_DATES.map((date) => {
                const selected = selectedDate === date.id;

                return (
                  <Pressable
                    key={date.id}
                    style={[
                      styles.dateCard,
                      selected && styles.dateCardActive,
                    ]}
                    onPress={() => setSelectedDate(date.id)}
                  >
                    <Text
                      style={[
                        styles.dateDay,
                        selected && styles.dateTextActive,
                      ]}
                    >
                      {date.day}
                    </Text>

                    <Text
                      style={[
                        styles.dateNumber,
                        selected && styles.dateTextActive,
                      ]}
                    >
                      {date.date}
                    </Text>

                    <Text
                      style={[
                        styles.dateMonth,
                        selected && styles.dateTextActive,
                      ]}
                    >
                      {date.month}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Text style={styles.sectionTitle}>
              {USER_SLOT_BOOKING_CONTENT.selectTime}
            </Text>

            <View style={styles.timeGrid}>
              {BOOKING_TIME_SLOTS.map((time) => {
                const selected = selectedTime === time;

                return (
                  <Pressable
                    key={time}
                    style={[
                      styles.timeButton,
                      selected && styles.timeButtonActive,
                    ]}
                    onPress={() => setSelectedTime(time)}
                  >
                    <Text
                      style={[
                        styles.timeText,
                        selected && styles.timeTextActive,
                      ]}
                    >
                      {time}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>

          <Pressable
            style={styles.bookButton}
            onPress={handleBookSlot}
            accessibilityRole="button"
          >
            <Ionicons
              name="calendar-outline"
              size={20}
              color="#FFFFFF"
            />
            <Text style={styles.bookButtonText}>
              {USER_SLOT_BOOKING_CONTENT.bookButton}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}