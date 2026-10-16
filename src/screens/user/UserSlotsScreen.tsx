import React, { useState } from "react";
import { Alert, View } from "react-native";
import { useRouter } from "expo-router";

import UserSlotsShopCards from "../../components/user/UserSlotsShopCards";
import UserSlotsBookingDialog, {
  type SlotBookingDetails,
} from "../../components/user/UserSlotsBookingDialog";

import type { SlotsShop } from "../../constants/user/userSlotsShops";
import type { UserTab } from "../../components/user/UserBottomNav";

import { styles } from "./UserSlotsScreen.styles";

export default function UserSlotsScreen() {
  const router = useRouter();

  const [selectedShop, setSelectedShop] =
    useState<SlotsShop | null>(null);

  const [bookingDialogVisible, setBookingDialogVisible] =
    useState(false);

  const handleAddSlot = (shop: SlotsShop) => {
    setSelectedShop(shop);
    setBookingDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setBookingDialogVisible(false);
  };

  const handleBookSlot = (details: SlotBookingDetails) => {
    setBookingDialogVisible(false);

    const formattedDate = new Date(
      `${details.date}T12:00:00`
    ).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    console.log("Selected booking details:", {
      shopId: details.shop.id,
      shopName: details.shop.name,
      date: details.date,
      time: details.time,
    });

    Alert.alert(
      "Slot Selected",
      `${details.shop.name}\n\nDate: ${formattedDate}\nTime: ${details.time}\n\nBackend booking confirmation will be integrated next.`,
      [
        {
          text: "OK",
          onPress: () => setSelectedShop(null),
        },
      ]
    );
  };

  const handleTabPress = (tab: UserTab) => {
    switch (tab) {
      case "home":
        router.replace("/user");
        break;

      case "home-service":
        router.push("/user/home-service");
        break;

      case "slots":
        // Already on the Slots screen.
        break;

      case "event":
        router.push("/user/event");
        break;

      case "more":
        router.push("/user/more");
        break;
    }
  };

  return (
    <View style={styles.screen}>
      <UserSlotsShopCards
        onAddSlot={handleAddSlot}
        onLocationPress={() => {
          Alert.alert(
            "Choose Location",
            "Location selection will be available soon."
          );
        }}
        onNotificationsPress={() => {
          Alert.alert(
            "Notifications",
            "Your notifications will appear here."
          );
        }}
        onFilterPress={() => {
          Alert.alert(
            "Filters",
            "Shop filters will be available soon."
          );
        }}
        onCartPress={() => {
          Alert.alert(
            "Cart",
            "Your cart will appear here."
          );
        }}
        onTabPress={handleTabPress}
      />

      <UserSlotsBookingDialog
        visible={bookingDialogVisible}
        shop={selectedShop}
        onClose={handleCloseDialog}
        onBookSlot={handleBookSlot}
      />
    </View>
  );
}