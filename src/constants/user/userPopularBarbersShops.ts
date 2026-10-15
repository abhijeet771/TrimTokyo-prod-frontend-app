
export interface PopularBarber {
  id: string;
  name: string;
  rating: number;
  bookings: number;
  imageKey: number;
}

export interface NearbyShop {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  distance: string;
  priceLabel: string;
  openingStatus: "OPEN" | "CLOSED";
  closingTime: string;
  services: string[];
  verified: boolean;
  imageKey: number;
}

export const USER_POPULAR_BARBERS: PopularBarber[] = [
  {
    id: "barber-1",
    name: "Arjun Mehta",
    rating: 4.9,
    bookings: 120,
    imageKey: 1,
  },
  {
    id: "barber-2",
    name: "Rohit Sharma",
    rating: 4.8,
    bookings: 98,
    imageKey: 2,
  },
  {
    id: "barber-3",
    name: "Karan Verma",
    rating: 4.7,
    bookings: 65,
    imageKey: 3,
  },
  {
    id: "barber-4",
    name: "Vivaan Nair",
    rating: 4.6,
    bookings: 40,
    imageKey: 4,
  },
];

export const USER_NEARBY_SHOPS: NearbyShop[] = [
  {
    id: "shop-1",
    name: "The Urban Cut",
    rating: 4.8,
    reviewCount: 320,
    distance: "1.2 km away",
    priceLabel: "₹₹",
    openingStatus: "OPEN",
    closingTime: "Closes 9 PM",
    services: ["Hair Cut", "Beard", "Styling"],
    verified: true,
    imageKey: 1,
  },
];

export const USER_SHOP_SECTION_LABELS = {
  popularBarbers: "Popular Barbers",
  nearbyShops: "Nearby Shops",
  seeAll: "See all",
  viewShop: "View Shop",
  open: "Open",
  closed: "Closed",
};
