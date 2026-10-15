
export interface UserShopCategory {
  id: string;
  title: string;
  imageKey: number;
}

export interface UserShopBanner {
  eyebrow: string;
  title: string;
  discount: string;
  subtitle: string;
  buttonText: string;
}

export const USER_SHOP_CATEGORIES: UserShopCategory[] = [
  { id: "haircut", title: "Hair Cut", imageKey: 1 },
  { id: "beard", title: "Beard", imageKey: 2 },
  { id: "shaving", title: "Shaving", imageKey: 3 },
  { id: "facial", title: "Facial", imageKey: 4 },
  { id: "nail", title: "Nail", imageKey: 5 },
  { id: "hair-styling", title: "Hair Styling", imageKey: 6 },
  { id: "all", title: "All", imageKey: 7 },
];

export const USER_SHOP_BANNER: UserShopBanner = {
  eyebrow: "SPECIAL OFFER",
  title: "Get up to",
  discount: "50% off",
  subtitle: "On all grooming services",
  buttonText: "Book Now",
};
