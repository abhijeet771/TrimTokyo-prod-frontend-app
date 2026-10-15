export type BarberServiceStatus =
  | "APPROVED"
  | "PENDING"
  | "REJECTED";

export type BarberServiceGender =
  | "MALE"
  | "FEMALE"
  | "UNISEX";

export interface BarberService {
  id: string;
  title: string;
  price: number;
  duration: number;
  gender: BarberServiceGender;
  description: string;
  image: any;
  status: BarberServiceStatus;
  createdAt: string;
}

export const BARBER_SERVICES_CONTENT = {
  pageTitle: "Services",
  pageSubtitle: "Add a new service for admin approval",
  formTitle: "Add Service",
  recentServicesTitle: "Recent Services",
  viewAllLabel: "View All",
  submitLabel: "Submit for Approval",
  serviceListTitle: "My Services",
  serviceListSubtitle: "Manage your submitted services",
  searchPlaceholder: "Search services...",
  emptyTitle: "No services found",
  emptyDescription: "Try changing your search or filters.",
};

export const BARBER_SERVICE_GENDERS: {
  label: string;
  value: BarberServiceGender;
}[] = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
  { label: "Unisex", value: "UNISEX" },
];

export const BARBER_SERVICE_STATUSES: {
  label: string;
  value: BarberServiceStatus | "ALL";
}[] = [
  { label: "All", value: "ALL" },
  { label: "Approved", value: "APPROVED" },
  { label: "Pending", value: "PENDING" },
  { label: "Rejected", value: "REJECTED" },
];

export const BARBER_SERVICE_STATUS_COLORS: Record<
  BarberServiceStatus,
  { color: string; backgroundColor: string }
> = {
  APPROVED: {
    color: "#13965B",
    backgroundColor: "#E2F8EC",
  },
  PENDING: {
    color: "#D97706",
    backgroundColor: "#FFF1D6",
  },
  REJECTED: {
    color: "#DC2626",
    backgroundColor: "#FEE8E8",
  },
};

export const BARBER_SERVICE_TABLE_CONTENT = {
  searchPlaceholder: "Search services...",
  rowsPerPage: 5,
  columns: [
    "Service",
    "Price",
    "Duration",
    "Gender",
    "Status",
    "Actions",
  ],
};

export const INITIAL_BARBER_SERVICES: BarberService[] = [
  {
    id: "SRV001",
    title: "Hair Cut",
    price: 65,
    duration: 30,
    gender: "MALE",
    description:
      "Sharp precision haircuts for men. Modern styles, clean finish and perfect shape that suits your face and personality.",
    image: require("../assets/images/h1.png"),
    status: "APPROVED",
    createdAt: "2026-10-12",
  },
  {
    id: "SRV002",
    title: "Beard",
    price: 55,
    duration: 20,
    gender: "MALE",
    description:
      "Expert beard cutting and grooming. Clean lines, stylish trims and sharp edges for the perfect masculine look.",
    image: require("../assets/images/h2.png"),
    status: "APPROVED",
    createdAt: "2026-10-11",
  },
  {
    id: "SRV003",
    title: "Full Body Massage",
    price: 110,
    duration: 30,
    gender: "UNISEX",
    description:
      "Relaxing full body massage to ease muscle tension and refresh your body and mind.",
    image: require("../assets/images/h3.png"),
    status: "APPROVED",
    createdAt: "2026-10-10",
  },
  {
    id: "SRV004",
    title: "Hair Coloring",
    price: 150,
    duration: 45,
    gender: "UNISEX",
    description:
      "Premium hair coloring with quality products and a professional finish.",
    image: require("../assets/images/h1.png"),
    status: "PENDING",
    createdAt: "2026-10-14",
  },
  {
    id: "SRV005",
    title: "Facial",
    price: 80,
    duration: 30,
    gender: "UNISEX",
    description:
      "Deep cleansing facial for healthy, refreshed and glowing skin.",
    image: require("../assets/images/h3.png"),
    status: "REJECTED",
    createdAt: "2026-10-13",
  },
  {
    id: "SRV006",
    title: "Hair Styling",
    price: 100,
    duration: 30,
    gender: "MALE",
    description:
      "Professional hair styling for everyday looks and special occasions.",
    image: require("../assets/images/h1.png"),
    status: "APPROVED",
    createdAt: "2026-10-09",
  },
];

export const RECENT_BARBER_SERVICE_IDS = [
  "SRV001",
  "SRV002",
  "SRV003",
];