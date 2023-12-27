export interface Product {
  id: number;
  brand: string;
  name: string;
  price: number;
  rate: number;
  review: number;
  img: string;
}

export interface Coupon {
  id: number;
  name: string;
  rate: number;
  dueDate: string;
  minimumPayment: number;
}
