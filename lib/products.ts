export type Product = {
  id: string;
  name: string;
  priceNote: string;
  category: string;
  short: string;
  image: string; // 👈 new
};
  
export const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Oversized Tee (Custom)",
    priceNote: "From ₦…",
    category: "Tops",
    short: "Heavyweight feel. Clean fit.",
    image: "/images/products/oversized-tee.jpg",
  },
  {
    id: "2",
    name: "Branded Polo",
    priceNote: "From ₦…",
    category: "Corporate",
    short: "Premium stitch + clean branding.",
    image: "/images/products/branded-polo.jpg",
  },
  {
    id: "3",
    name: "Hoodie (Streetwear)",
    priceNote: "From ₦…",
    category: "Hoodies",
    short: "Relaxed fit. Built for daily wear.",
    image: "/images/products/hoodie.jpg",
  },
  {
    id: "4",
    name: "Joggers",
    priceNote: "From ₦…",
    category: "Bottoms",
    short: "Structured, soft, and durable.",
    image: "/images/products/joggers.jpg",
  },
  {
    id: "5",
    name: "Event Tees (Bulk)",
    priceNote: "Bulk pricing",
    category: "Bulk",
    short: "Fast turnaround for teams/events.",
    image: "/images/products/event-tees.jpg",
  },
  {
    id: "6",
    name: "Branded Tote Bag",
    priceNote: "From ₦…",
    category: "Merch",
    short: "Clean print. Strong fabric.",
    image: "/images/products/tote-bag.jpg",
  },
  {
    id: "7",
    name: "Caps",
    priceNote: "From ₦…",
    category: "Merch",
    short: "Minimal embroidery options.",
    image: "/images/products/cap.jpg",
  },
  {
    id: "8",
    name: "Branded Water Bottle",
    priceNote: "From ₦…",
    category: "Merch",
    short: "Premium look for gifting.",
    image: "/images/products/water-bottle.jpg",
  },
];