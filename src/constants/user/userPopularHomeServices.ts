
export interface HomeService {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  imageKey: number;
  description: string;
}

export const USER_POPULAR_HOME_SERVICES: HomeService[] = [
  {
    id: "home-service-1",
    name: "Hair Cut",
    price: 299,
    durationMinutes: 45,
    imageKey: 1,
    description: "Professional haircut at your home.",
  },
  {
    id: "home-service-2",
    name: "Hair Spa",
    price: 499,
    durationMinutes: 60,
    imageKey: 2,
    description: "Relaxing hair spa treatment at home.",
  },
  {
    id: "home-service-3",
    name: "Facial",
    price: 599,
    durationMinutes: 60,
    imageKey: 3,
    description: "Professional facial treatment at home.",
  },
  {
    id: "home-service-4",
    name: "Manicure",
    price: 299,
    durationMinutes: 40,
    imageKey: 4,
    description: "Nail care and manicure at home.",
  },
];

export const USER_POPULAR_HOME_SERVICES_CONTENT = {
  title: "Popular Services",
  seeAll: "See All",
};
