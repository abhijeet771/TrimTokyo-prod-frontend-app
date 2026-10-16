export interface SlotsShop {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
  openingTime: string;
  closingTime: string;
  imageKey: "shop1" | "shop2" | "shop3" | "shop4";
}

export const USER_SLOTS_SHOPS: SlotsShop[] = [
  {
    id: "shop-1",
    name: "Trim Tokyo - Main Branch",
    rating: 4.8,
    reviewCount: 120,
    location: "Purnea, Bihar",
    openingTime: "9:00 AM",
    closingTime: "9:00 PM",
    imageKey: "shop1",
  },
  {
    id: "shop-2",
    name: "The Barber House",
    rating: 4.6,
    reviewCount: 98,
    location: "Line Bazar, Purnea",
    openingTime: "10:00 AM",
    closingTime: "8:00 PM",
    imageKey: "shop2",
  },
  {
    id: "shop-3",
    name: "Style Studio",
    rating: 4.5,
    reviewCount: 76,
    location: "Bihat Chowk, Purnea",
    openingTime: "9:00 AM",
    closingTime: "9:00 PM",
    imageKey: "shop3",
  },
  {
    id: "shop-4",
    name: "Urban Cuts",
    rating: 4.4,
    reviewCount: 62,
    location: "Khatua, Purnea",
    openingTime: "10:00 AM",
    closingTime: "8:00 PM",
    imageKey: "shop4",
  },
];

export const USER_SLOTS_CONTENT = {
  title: "Barber Slots",
  subtitle: "Choose your preferred barber and book a slot",
  filters: ["All", "Near Me", "Top Rated", "Available Today"],
  addSlot: "Add Slot",
  openLabel: "Open",
};