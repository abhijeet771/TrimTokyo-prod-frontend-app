export type EventCategoryId =
  | "wedding"
  | "party"
  | "mundan"
  | "upanayanam";

export interface PopularEvent {
  id: EventCategoryId;
  title: string;
  description: string;
  imageKey: "event1" | "event2" | "event3" | "event4";
  services: {
    id: string;
    label: string;
    icon: string;
    color: string;
    backgroundColor: string;
  }[];
}

export const USER_POPULAR_EVENTS_CONTENT = {
  title: "Popular Events",
  seeAll: "See All",
  explore: "Explore Event",
};

export const USER_POPULAR_EVENTS: PopularEvent[] = [
  {
    id: "wedding",
    title: "Wedding",
    description:
      "Bridal and groom grooming, makeup, venue setup and more.",
    imageKey: "event1",
    services: [
      {
        id: "makeup",
        label: "Makeup",
        icon: "color-palette-outline",
        color: "#E64980",
        backgroundColor: "#FDE7EF",
      },
      {
        id: "grooming",
        label: "Grooming",
        icon: "cut-outline",
        color: "#1769F5",
        backgroundColor: "#E4F1FF",
      },
      {
        id: "venue",
        label: "Venue",
        icon: "business-outline",
        color: "#D97706",
        backgroundColor: "#FFF0D9",
      },
      {
        id: "photography",
        label: "Photo",
        icon: "camera-outline",
        color: "#6D5BD0",
        backgroundColor: "#EEE9FF",
      },
    ],
  },
  {
    id: "party",
    title: "Party",
    description:
      "Birthday, anniversary, corporate and private parties.",
    imageKey: "event2",
    services: [
      {
        id: "makeup",
        label: "Makeup",
        icon: "color-palette-outline",
        color: "#E64980",
        backgroundColor: "#FDE7EF",
      },
      {
        id: "styling",
        label: "Styling",
        icon: "cut-outline",
        color: "#1769F5",
        backgroundColor: "#E4F1FF",
      },
      {
        id: "decoration",
        label: "Decor",
        icon: "balloon-outline",
        color: "#6D5BD0",
        backgroundColor: "#EEE9FF",
      },
      {
        id: "catering",
        label: "Catering",
        icon: "restaurant-outline",
        color: "#D97706",
        backgroundColor: "#FFF0D9",
      },
    ],
  },
  {
    id: "mundan",
    title: "Mundan",
    description:
      "Traditional grooming and event arrangements for your ceremony.",
    imageKey: "event3",
    services: [
      {
        id: "grooming",
        label: "Grooming",
        icon: "cut-outline",
        color: "#1769F5",
        backgroundColor: "#E4F1FF",
      },
      {
        id: "photography",
        label: "Photo",
        icon: "camera-outline",
        color: "#6D5BD0",
        backgroundColor: "#EEE9FF",
      },
      {
        id: "venue",
        label: "Venue",
        icon: "business-outline",
        color: "#D97706",
        backgroundColor: "#FFF0D9",
      },
      {
        id: "catering",
        label: "Catering",
        icon: "restaurant-outline",
        color: "#E64980",
        backgroundColor: "#FDE7EF",
      },
    ],
  },
  {
    id: "upanayanam",
    title: "Upanayanam",
    description:
      "Event support for auspicious ceremonies and family gatherings.",
    imageKey: "event4",
    services: [
      {
        id: "grooming",
        label: "Grooming",
        icon: "cut-outline",
        color: "#1769F5",
        backgroundColor: "#E4F1FF",
      },
      {
        id: "makeup",
        label: "Makeup",
        icon: "color-palette-outline",
        color: "#E64980",
        backgroundColor: "#FDE7EF",
      },
      {
        id: "venue",
        label: "Venue",
        icon: "business-outline",
        color: "#D97706",
        backgroundColor: "#FFF0D9",
      },
      {
        id: "video",
        label: "Video",
        icon: "videocam-outline",
        color: "#6D5BD0",
        backgroundColor: "#EEE9FF",
      },
    ],
  },
];