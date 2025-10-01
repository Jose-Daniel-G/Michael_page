export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category_id: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface ProductsResponse {
  products: Product[];       // usa la interfaz Product
  categories: Category[]; // usa la interfaz Category
}
export interface ProductActionResponse {
  success: boolean;
  message: string;
  product: Product;
}
