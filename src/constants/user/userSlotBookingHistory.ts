export type SlotBookingStatus =
  | "Upcoming"
  | "Completed"
  | "Cancelled";

export type SlotBookingHistoryItem = {
  id: string;
  serviceName: string;
  barberName: string;
  barberRole: string;
  location: string;
  date: string;
  time: string;
  price: number;
  status: SlotBookingStatus;
  imageKey: "se1" | "se2" | "se4";
};

export const SLOT_BOOKING_FILTERS = [
  "All",
  "Upcoming",
  "Completed",
  "Cancelled",
] as const;

export type SlotBookingFilter =
  (typeof SLOT_BOOKING_FILTERS)[number];

export const SLOT_BOOKING_HISTORY_CONTENT = {
  title: "Slot Bookings",
  emptyTitle: "No bookings found",
  emptyDescription:
    "Your bookings will appear here once you book a salon service.",
  viewDetails: "View Details",
  reschedule: "Reschedule",
  rebook: "Rebook",
  bookAgain: "Book Again",
  location: "TrimTokyo - Purnea",
} as const;

export const SLOT_BOOKING_HISTORY: SlotBookingHistoryItem[] = [
  {
    id: "SB1001",
    serviceName: "Haircut (Men)",
    barberName: "Rahul",
    barberRole: "Senior Barber",
    location: "TrimTokyo - Purnea",
    date: "18 Oct 2026",
    time: "11:00 AM",
    price: 299,
    status: "Upcoming",
    imageKey: "se1",
  },
  {
    id: "SB1002",
    serviceName: "Beard Trim",
    barberName: "Sameer",
    barberRole: "Barber",
    location: "TrimTokyo - Purnea",
    date: "12 Oct 2026",
    time: "10:30 AM",
    price: 199,
    status: "Completed",
    imageKey: "se2",
  },
  {
    id: "SB1003",
    serviceName: "Hair Colour",
    barberName: "Aditya",
    barberRole: "Hair Specialist",
    location: "TrimTokyo - Purnea",
    date: "29 Sep 2026",
    time: "02:00 PM",
    price: 1499,
    status: "Cancelled",
    imageKey: "se4",
  },
  {
    id: "SB1004",
    serviceName: "Facial Cleanup",
    barberName: "Neha",
    barberRole: "Beauty Specialist",
    location: "TrimTokyo - Purnea",
    date: "15 Sep 2026",
    time: "12:30 PM",
    price: 899,
    status: "Completed",
    imageKey: "se1",
  },
  {
    id: "SB1005",
    serviceName: "Hair Spa",
    barberName: "Neha",
    barberRole: "Beauty Specialist",
    location: "TrimTokyo - Purnea",
    date: "08 Oct 2026",
    time: "01:00 PM",
    price: 1199,
    status: "Upcoming",
    imageKey: "se2",
  },
];
