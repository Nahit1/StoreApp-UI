import { OptionsModel } from './CategoryModel';

export interface GetAllProductsResponse {
  id: string;
  name: string;
  description: string;
  price: number;
  pictureUrl: string;
  category: string;
  brand: string;
  categories: Category[];
}

interface Category {
  categoryName: string;
}

export interface GetAllProductsRequest {
  pageSize?: number;
  pageNumber?: number;
  categories?: string[];
  brand?: string | null;
}
