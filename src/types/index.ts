export interface ICartProduct {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface ICartProducts {
  products: ICartProduct[];
}
