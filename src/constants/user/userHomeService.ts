
export interface HomeServiceCategory {
  id: string;
  label: string;
  icon: string;
  backgroundColor: string;
  iconColor: string;
}

export const USER_HOME_SERVICE_CATEGORIES: HomeServiceCategory[] = [
  {
    id: "hair-cut",
    label: "Hair Cut",
    icon: "cut-outline",
    backgroundColor: "#E3F0FF",
    iconColor: "#1769B5",
  },
  {
    id: "beard",
    label: "Beard",
    icon: "person-outline",
    backgroundColor: "#EEE9FF",
    iconColor: "#5555A5",
  },
  {
    id: "shaving",
    label: "Shaving",
    icon: "cut-outline",
    backgroundColor: "#FFE6EF",
    iconColor: "#C52D68",
  },
  {
    id: "facial",
    label: "Facial",
    icon: "happy-outline",
    backgroundColor: "#D9FAF0",
    iconColor: "#087E8B",
  },
  {
    id: "manicure",
    label: "Manicure",
    icon: "color-palette-outline",
    backgroundColor: "#FFE5EE",
    iconColor: "#C52D68",
  },
  {
    id: "pedicure",
    label: "Pedicure",
    icon: "footsteps-outline",
    backgroundColor: "#D9FAF0",
    iconColor: "#087E8B",
  },
  {
    id: "makeup",
    label: "Makeup",
    icon: "brush-outline",
    backgroundColor: "#EEE5FF",
    iconColor: "#673AB7",
  },
  {
    id: "hair-color",
    label: "Hair Color",
    icon: "color-wand-outline",
    backgroundColor: "#DFECFF",
    iconColor: "#1859B8",
  },
  {
    id: "hair-styling",
    label: "Hair Styling",
    icon: "flash-outline",
    backgroundColor: "#DDF0FF",
    iconColor: "#1769B5",
  },
  {
    id: "more",
    label: "More",
    icon: "grid-outline",
    backgroundColor: "#E9EEF7",
    iconColor: "#52668C",
  },
];

export const USER_HOME_SERVICE_BANNER = {
  eyebrow: "TRIM TOKYO",
  title: "Salon Service at Your Home",
  subtitle: "Same expert care, now at your doorstep.",
  buttonText: "Book Now",
};
