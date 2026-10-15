export type BarberSupportPriority =
  | "LOW"
  | "NORMAL"
  | "HIGH"
  | "URGENT";

export interface BarberSupportTicketFormData {
  title: string;
  category: string;
  description: string;
  priority: BarberSupportPriority;
  imageUri: string | null;
}

export const BARBER_SUPPORT_CATEGORIES = [
  "Account",
  "Profile",
  "Services",
  "Orders",
  "Earnings",
  "Payments",
  "Technical Issue",
  "Other",
] as const;

export const BARBER_SUPPORT_PRIORITIES: {
  label: string;
  value: BarberSupportPriority;
}[] = [
  { label: "Low", value: "LOW" },
  { label: "Normal", value: "NORMAL" },
  { label: "High", value: "HIGH" },
  { label: "Urgent", value: "URGENT" },
];

export const INITIAL_SUPPORT_TICKET: BarberSupportTicketFormData = {
  title: "",
  category: "",
  description: "",
  priority: "NORMAL",
  imageUri: null,
};


export type BarberSupportTicketStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "CLOSED";

export interface BarberSupportTicket {
  id: string;
  title: string;
  category: string;
  description: string;
  priority: BarberSupportPriority;
  status: BarberSupportTicketStatus;
  imageUri: string | null;
  createdAt: string;
}

export const BARBER_SUPPORT_TICKET_FILTERS: {
  label: string;
  value: "ALL" | BarberSupportTicketStatus;
}[] = [
  { label: "All", value: "ALL" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Resolved", value: "RESOLVED" },
  { label: "Closed", value: "CLOSED" },
];

export const MOCK_BARBER_SUPPORT_TICKETS: BarberSupportTicket[] = [
  {
    id: "TKT-1001",
    title: "Unable to update profile",
    category: "Profile",
    description: "Profile updates are not being saved.",
    priority: "HIGH",
    status: "IN_PROGRESS",
    imageUri: null,
    createdAt: "2026-10-14T10:30:00",
  },
  {
    id: "TKT-1002",
    title: "Service image upload issue",
    category: "Services",
    description: "Unable to upload an image for a service.",
    priority: "NORMAL",
    status: "OPEN",
    imageUri: null,
    createdAt: "2026-10-13T12:00:00",
  },
  {
    id: "TKT-1003",
    title: "Payment details clarification",
    category: "Payments",
    description: "Need clarification about a payment entry.",
    priority: "LOW",
    status: "RESOLVED",
    imageUri: null,
    createdAt: "2026-10-10T09:15:00",
  },
];
