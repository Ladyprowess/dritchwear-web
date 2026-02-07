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
    name: "Introvert Zip Hoodie",
    priceNote: "From ₦28,000",
    category: "Hoodies",
    short: "Heavyweight feel. Clean fit.",
    image: "https://github.com/Ladyprowess/store-image/blob/main/images/introvert-zip-hoodie-1.png?raw=true",
  },
  {
    id: "2",
    name: "Plain Polo",
    priceNote: "From ₦…",
    category: "Corporate",
    short: "Premium stitch + clean branding.",
    image: "https://github.com/Ladyprowess/store-image/blob/main/images/polo-1.jpeg?raw=true",
  },
  {
    id: "3",
    name: "Plain T-shirts",
    priceNote: "From ₦…",
    category: "Hoodies",
    short: "Relaxed fit. Built for daily wear.",
    image: "https://github.com/Ladyprowess/store-image/blob/main/images/tshirt-3.jpeg?raw=true",
  },
  {
    id: "4",
    name: "Jogger Pants",
    priceNote: "From ₦…",
    category: "Bottoms",
    short: "Structured, soft, and durable.",
    image: "https://github.com/Ladyprowess/store-image/blob/main/images/jogger-pants-1.jpeg?raw=true",
  },
  {
    id: "5",
    name: "Sleeveless Sweatshirt",
    priceNote: "Bulk pricing",
    category: "Bulk",
    short: "Fast turnaround for teams/events.",
    image: "https://github.com/Ladyprowess/store-image/blob/main/images/Sleeveless%20Sweatshirt-3.PNG?raw=true",
  },
  {
    id: "6",
    name: "Tote Bag",
    priceNote: "From ₦…",
    category: "Merch",
    short: "Clean print. Strong fabric.",
    image: "https://github.com/Ladyprowess/store-image/blob/main/images/tote-bag-3.png?raw=true",
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