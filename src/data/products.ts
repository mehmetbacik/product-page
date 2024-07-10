export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 100,
    discountPrice: 80,
    images: ["/path/to/image1.jpg", "/path/to/image2.jpg"],
  },
];
