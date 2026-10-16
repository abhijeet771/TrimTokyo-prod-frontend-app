export type EventSectionTab = "events" | "booking-status";

export const USER_EVENT_HEADER_CONTENT = {
  title: "Event Bookings",
  subtitle: "Make your special moments more beautiful",
  searchPlaceholder: "Search event services, venues or packages...",
  tabs: {
    events: "Events",
    bookingStatus: "Booking Status",
  },
  banner: {
    title: "Weddings & Special Events",
    description:
      "Complete event services with salon, grooming and venue support.",
    button: "Book Your Event",
  },
} as const;

export const USER_EVENT_CATEGORIES = [
  "All",
  "Wedding",
  "Party",
  "Mundan",
  "Upanayanam",
  "Corporate",
] as const;