export const BARBER_HOME_CONTENT = {
  greeting: "Good morning,",
  barberName: "Arjun",
  subtitle: "Here's your work today.",

  availability: {
    title: "You're Available",
    description: "You're ready to receive bookings.",
  },

  kpis: [
    {
      id: "today",
      title: "Today's Bookings",
      value: 5,
      icon: "calendar-outline",
      color: "#2785FF",
      backgroundColor: "#EAF3FF",
    },
    {
      id: "completed",
      title: "Completed",
      value: 2,
      icon: "checkmark-circle-outline",
      color: "#16B978",
      backgroundColor: "#E7F9F0",
    },
    {
      id: "progress",
      title: "In Progress",
      value: 1,
      icon: "time-outline",
      color: "#FF982F",
      backgroundColor: "#FFF2E4",
    },
    {
      id: "pending",
      title: "Pending",
      value: 2,
      icon: "calendar-clear-outline",
      color: "#71839F",
      backgroundColor: "#EDF2F8",
    },
  ],

  nextAppointment: {
    title: "Next Appointment",
    customerName: "Rahul Sharma",
    time: "11:30 AM",
    service: "Haircut",
    address: "HSR Layout, Bengaluru",
    status: "Upcoming",
    amount: 300,
  },

  quickActions: [
    {
      id: "website",
      title: "Brand Website",
      subtitle: "Open your website",
      icon: "globe-outline",
      color: "#1769FF",
      backgroundColor: "#EAF3FF",
    },
    {
      id: "services",
      title: "Add Services",
      subtitle: "Manage your services",
      icon: "cut-outline",
      color: "#8B42E8",
      backgroundColor: "#F3EBFF",
    },
    {
      id: "profile",
      title: "Update Profile",
      subtitle: "Edit your profile",
      icon: "person-circle-outline",
      color: "#16B978",
      backgroundColor: "#E7F9F0",
    },
  ],
} as const;


export const BARBER_TODAY_SCHEDULE = {
  title: "Today's Schedule",
  viewAll: "View all",

  appointments: [
    {
      id: "booking-1",
      time: "11:30 AM",
      customerName: "Rahul Sharma",
      service: "Haircut",
      amount: 300,
      status: "Upcoming",
      statusColor: "#1769FF",
      statusBackground: "#E5F0FF",
      avatarBackground: "#EAF3FF",
    },
    {
      id: "booking-2",
      time: "02:00 PM",
      customerName: "Priya Mehta",
      service: "Haircut + Beard",
      amount: 500,
      status: "Pending",
      statusColor: "#71839F",
      statusBackground: "#EDF2F8",
      avatarBackground: "#F3EBFF",
    },
  ],
} as const;

export const BARBER_PROFILE_MENU = {
  name: "Arjun Kumar",
  role: "Barber",

  options: [
    {
      id: "profile",
      label: "My Profile",
      icon: "person-outline",
      route: "/barber/profile",
    },
    {
      id: "settings",
      label: "Settings",
      icon: "settings-outline",
      route: "/barber/settings",
    },
    {
      id: "support",
      label: "Help & Support",
      icon: "help-circle-outline",
      route: "/barber/help",
    },
  ],

  logout: {
    label: "Logout",
    icon: "log-out-outline",
    confirmationTitle: "Logout",
    confirmationMessage: "Are you sure you want to log out?",
    cancelLabel: "Cancel",
    confirmLabel: "Logout",
  },
} as const;