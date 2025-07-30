export interface Bot {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  features: string;
  oldPrice?: number;
}
