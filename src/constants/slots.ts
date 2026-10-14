export const UPCOMING_BOOKINGS_CONTENT = {
  title: "Upcoming Bookings",
  viewAll: "View All",
  emptyTitle: "No upcoming bookings",
  emptyDescription:
    "Your confirmed customer bookings will appear here.",

  bookings: [
    {
      id: "booking-001",
      customerName: "Rahul Sharma",
      service: "Haircut",
      date: "14 Oct 2026",
      time: "11:30 AM",
      duration: "30 min",
      amount: 300,
      status: "CONFIRMED",
    },
    {
      id: "booking-002",
      customerName: "Priya Mehta",
      service: "Haircut + Beard",
      date: "14 Oct 2026",
      time: "02:00 PM",
      duration: "45 min",
      amount: 500,
      status: "PENDING",
    },
    {
      id: "booking-003",
      customerName: "Aarav Singh",
      service: "Beard Trim",
      date: "15 Oct 2026",
      time: "10:00 AM",
      duration: "30 min",
      amount: 200,
      status: "CONFIRMED",
    },
  ],
} as const;