export type EventBookingStatus =
  | "Upcoming"
  | "Completed"
  | "Cancelled";

export type EventBookingHistoryItem = {
  id: string;
  eventName: string;
  artistName: string;
  artistRole: string;
  location: string;
  date: string;
  time: string;
  price: number;
  status: EventBookingStatus;
  imageKey: "e1" | "e2" | "e3" | "e4";
};

export const EVENT_BOOKING_FILTERS = [
  "All",
  "Upcoming",
  "Completed",
  "Cancelled",
] as const;

export type EventBookingFilter =
  (typeof EVENT_BOOKING_FILTERS)[number];

export const EVENT_BOOKING_HISTORY_CONTENT = {
  title: "Event Bookings",
  emptyTitle: "No event bookings found",
  emptyDescription:
    "Your event bookings will appear here when you book an event service.",
  viewDetails: "View Details",
  reschedule: "Reschedule",
  rebook: "Rebook",
  bookAgain: "Book Again",
} as const;

export const EVENT_BOOKING_HISTORY: EventBookingHistoryItem[] = [
  {
    id: "EB1001",
    eventName: "Bridal Makeup",
    artistName: "Neha",
    artistRole: "Bridal Specialist",
    location: "TrimTokyo - Purnea",
    date: "25 Oct 2026",
    time: "10:00 AM",
    price: 8999,
    status: "Upcoming",
    imageKey: "e1",
  },
  {
    id: "EB1002",
    eventName: "Mehendi Event",
    artistName: "Priya",
    artistRole: "Mehendi Artist",
    location: "TrimTokyo - Purnea",
    date: "15 Oct 2026",
    time: "02:00 PM",
    price: 4999,
    status: "Completed",
    imageKey: "e2",
  },
  {
    id: "EB1003",
    eventName: "Reception Makeup",
    artistName: "Neha",
    artistRole: "Beauty Specialist",
    location: "TrimTokyo - Purnea",
    date: "10 Oct 2026",
    time: "06:00 PM",
    price: 6499,
    status: "Cancelled",
    imageKey: "e3",
  },
  {
    id: "EB1004",
    eventName: "Party Makeup",
    artistName: "Aditi",
    artistRole: "Makeup Artist",
    location: "TrimTokyo - Purnea",
    date: "28 Sep 2026",
    time: "04:00 PM",
    price: 3999,
    status: "Completed",
    imageKey: "e4",
  },
  {
    id: "EB1005",
    eventName: "Groom Makeup",
    artistName: "Sameer",
    artistRole: "Groom Specialist",
    location: "TrimTokyo - Purnea",
    date: "05 Nov 2026",
    time: "11:30 AM",
    price: 5499,
    status: "Upcoming",
    imageKey: "e2",
  },
];