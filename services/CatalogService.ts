'use server';
import { CustomPaginationResults, CustomResults } from '@/models/BaseModel';
import { GetAllBrandResponse } from '@/models/BrandModel';
import { GetAllCategoryResponse, OptionsModel } from '@/models/CategoryModel';
import {
  GetAllProductsRequest,
  GetAllProductsResponse,
} from '@/models/ProductModel';

export async function getProduct(
  model: GetAllProductsRequest
): Promise<CustomPaginationResults<GetAllProductsResponse[]>> {
  const response = await fetch(
    'http://localhost:5139/api/Catalog/GetAllProduct',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(model),
    }
  );

  if (!response.ok) throw new Error('Fail');

  return response.json();
}

export async function getCategories(): Promise<
  CustomResults<GetAllCategoryResponse[]>
> {
  const response = await fetch(
    'http://localhost:5139/api/Catalog/GetAllCategories'
  );

  if (!response.ok) throw new Error('Fail');

  return response.json();
}

export async function getBrands(): Promise<
  CustomResults<GetAllBrandResponse[]>
> {
  const response = await fetch(
    'http://localhost:5139/api/Catalog/GetAllBrands'
  );

  if (!response.ok) throw new Error('Fail');

  return response.json();
}
