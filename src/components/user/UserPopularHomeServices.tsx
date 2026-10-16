
import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./UserPopularHomeServices.styles";

import {
  USER_POPULAR_HOME_SERVICES,
  USER_POPULAR_HOME_SERVICES_CONTENT,
  type HomeService,
} from "../../constants/user/userPopularHomeServices";

interface UserPopularHomeServicesProps {
  onAddService?: (service: HomeService) => void;
  onServicePress?: (service: HomeService) => void;
  onSeeAllPress?: () => void;
  addedServiceIds?: string[];
}

const SERVICE_IMAGES: Record<number, number> = {
  1: require("../../assets/services/se1.png"),
  2: require("../../assets/services/se2.png"),
  3: require("../../assets/services/se3.png"),
  4: require("../../assets/services/se4.png"),
};

export default function UserPopularHomeServices({
  onAddService,
  onServicePress,
  onSeeAllPress,
  addedServiceIds = [],
}: UserPopularHomeServicesProps) {
  return (
    <View style={styles.container}>
      {/* Section heading */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {USER_POPULAR_HOME_SERVICES_CONTENT.title}
        </Text>

        <Pressable
          style={styles.seeAllButton}
          onPress={onSeeAllPress}
          accessibilityRole="button"
          accessibilityLabel="See all home services"
        >
          <Text style={styles.seeAllText}>
            {USER_POPULAR_HOME_SERVICES_CONTENT.seeAll}
          </Text>

          <Ionicons
            name="arrow-forward"
            size={17}
            color="#1769F5"
          />
        </Pressable>
      </View>

      {/* Service cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.servicesContent}
      >
        {USER_POPULAR_HOME_SERVICES.map((service) => {
          const isAdded = addedServiceIds.includes(service.id);

          return (
            <View key={service.id} style={styles.serviceCard}>
              <Pressable
                style={styles.imagePressable}
                onPress={() => onServicePress?.(service)}
                accessibilityRole="button"
                accessibilityLabel={`View ${service.name}`}
              >
                <Image
                  source={SERVICE_IMAGES[service.imageKey]}
                  style={styles.serviceImage}
                  resizeMode="cover"
                />
              </Pressable>

              <View style={styles.serviceInfo}>
                <Pressable
                  onPress={() => onServicePress?.(service)}
                  accessibilityRole="button"
                  accessibilityLabel={`View ${service.name} details`}
                >
                  <Text
                    style={styles.serviceName}
                    numberOfLines={1}
                  >
                    {service.name}
                  </Text>
                </Pressable>

                <View style={styles.priceRow}>
                  <Text style={styles.servicePrice}>
                    ₹{service.price}
                  </Text>

                  <Pressable
                    style={[
                      styles.addButton,
                      isAdded && styles.addedButton,
                    ]}
                    onPress={() => onAddService?.(service)}
                    accessibilityRole="button"
                    accessibilityLabel={
                      isAdded
                        ? `${service.name} added`
                        : `Add ${service.name}`
                    }
                  >
                    <Ionicons
                      name={isAdded ? "checkmark" : "add"}
                      size={22}
                      color="#FFFFFF"
                    />
                  </Pressable>
                </View>

                <View style={styles.durationRow}>
                  <Ionicons
                    name="time-outline"
                    size={13}
                    color="#8090A8"
                  />

                  <Text style={styles.durationText}>
                    {service.durationMinutes} mins
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
