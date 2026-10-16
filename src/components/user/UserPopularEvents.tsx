import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  USER_POPULAR_EVENTS,
  USER_POPULAR_EVENTS_CONTENT,
  type PopularEvent,
} from "../../constants/user/userPopularEvents";

import { styles } from "./UserPopularEvents.styles";

const EVENT_IMAGES = {
  event1: require("../../assets/event/e1.png"),
  event2: require("../../assets/event/e2.png"),
  event3: require("../../assets/event/e3.png"),
  event4: require("../../assets/event/e4.png"),
};

interface UserPopularEventsProps {
  onEventPress?: (event: PopularEvent) => void;
  onSeeAllPress?: () => void;
}

export default function UserPopularEvents({
  onEventPress,
  onSeeAllPress,
}: UserPopularEventsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>
          {USER_POPULAR_EVENTS_CONTENT.title}
        </Text>

        <Pressable
          onPress={onSeeAllPress}
          accessibilityRole="button"
        >
          <Text style={styles.seeAllText}>
            {USER_POPULAR_EVENTS_CONTENT.seeAll}
          </Text>
        </Pressable>
      </View>

      <View style={styles.eventsGrid}>
        {USER_POPULAR_EVENTS.map((event) => (
          <View key={event.id} style={styles.eventCard}>
            <Pressable
              style={styles.eventImagePressable}
              onPress={() => onEventPress?.(event)}
              accessibilityRole="button"
              accessibilityLabel={`Explore ${event.title} event`}
            >
              <Image
                source={EVENT_IMAGES[event.imageKey]}
                style={styles.eventImage}
                resizeMode="cover"
              />
            </Pressable>

            <View style={styles.cardContent}>
              <View style={styles.titleRow}>
                <Text
                  style={styles.eventTitle}
                  numberOfLines={1}
                >
                  {event.title}
                </Text>

                <Pressable
                  style={styles.arrowButton}
                  onPress={() => onEventPress?.(event)}
                  accessibilityRole="button"
                  accessibilityLabel={`View ${event.title}`}
                >
                  <Ionicons
                    name="arrow-forward"
                    size={17}
                    color="#1769F5"
                  />
                </Pressable>
              </View>

              <Text
                style={styles.eventDescription}
                numberOfLines={3}
              >
                {event.description}
              </Text>

              <View style={styles.servicesRow}>
                {event.services.map((service) => (
                  <View
                    key={service.id}
                    style={styles.serviceItem}
                  >
                    <View
                      style={[
                        styles.serviceIconContainer,
                        {
                          backgroundColor:
                            service.backgroundColor,
                        },
                      ]}
                    >
                      <Ionicons
                        name={
                          service.icon as keyof typeof Ionicons.glyphMap
                        }
                        size={19}
                        color={service.color}
                      />
                    </View>

                    <Text
                      style={styles.serviceLabel}
                      numberOfLines={1}
                    >
                      {service.label}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
