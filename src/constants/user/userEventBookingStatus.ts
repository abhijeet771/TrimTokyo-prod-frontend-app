export type EventBookingStatus =
  | "Pending"
  | "Confirmed"
  | "Completed"
  | "Cancelled";

export interface EventBooking {
  id: string;
  bookingId: string;
  eventName: string;
  eventType: string;
  eventDate: string;
  location: string;
  guestCount: number;
  status: EventBookingStatus;
  imageKey: "event1" | "event2" | "event3" | "event4";
}

export const USER_EVENT_BOOKING_STATUS_CONTENT = {
  title: "Booking Status",
  subtitle: "Track your event bookings and requests",
  filters: ["All", "Pending", "Confirmed", "Completed", "Cancelled"],
  bookingIdLabel: "Booking ID",
  eventDateLabel: "Event Date",
  locationLabel: "Location",
  guestsLabel: "Guests",
  viewDetails: "View Details",
  emptyTitle: "No bookings found",
  emptySubtitle:
    "Your event bookings will appear here once you book an event.",
} as const;

export const USER_EVENT_BOOKINGS: EventBooking[] = [
  {
    id: "booking-001",
    bookingId: "TT-EVT-1001",
    eventName: "Wedding Celebration",
    eventType: "Wedding",
    eventDate: "2026-12-15",
    location: "Purnea, Bihar",
    guestCount: 300,
    status: "Confirmed",
    imageKey: "event1",
  },
  {
    id: "booking-002",
    bookingId: "TT-EVT-1002",
    eventName: "Birthday Party",
    eventType: "Party",
    eventDate: "2026-11-05",
    location: "Purnea, Bihar",
    guestCount: 50,
    status: "Pending",
    imageKey: "event2",
  },
  {
    id: "booking-003",
    bookingId: "TT-EVT-1003",
    eventName: "Mundan Ceremony",
    eventType: "Mundan",
    eventDate: "2026-11-20",
    location: "Purnea, Bihar",
    guestCount: 80,
    status: "Completed",
    imageKey: "event3",
  },
  {
    id: "booking-004",
    bookingId: "TT-EVT-1004",
    eventName: "Upanayanam Ceremony",
    eventType: "Upanayanam",
    eventDate: "2026-12-22",
    location: "Purnea, Bihar",
    guestCount: 120,
    status: "Cancelled",
    imageKey: "event4",
  },
];