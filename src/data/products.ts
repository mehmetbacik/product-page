export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  brand: string; // Yeni alan eklendi
}

export const products: Product[] = [
  {
    id: 1,
    title: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.0,
    discountPercentage: 50,
    brand: "Sneaker Company",
  },
];
