'use client';
import ProductList from '@/components/Catalog/ProductList';
import { CustomPaginationResults } from '@/models/BaseModel';
import { OptionsModel } from '@/models/CategoryModel';
import {
  GetAllProductsRequest,
  GetAllProductsResponse,
} from '@/models/ProductModel';
import { getProduct } from '@/services/CatalogService';
import React, { useEffect, useState } from 'react';

const Catalog = () => {
  const [catalog, setCatalog] = useState<
    CustomPaginationResults<GetAllProductsResponse[]>
  >({} as CustomPaginationResults<GetAllProductsResponse[]>);
  const [pageSize, setPageSize] = useState<number>(4);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [brand, setBrand] = useState<string>('');
  const [category, setCategory] = useState<OptionsModel[]>([]);

  useEffect(() => {
    const model: GetAllProductsRequest = {
      categories: category.map((x) => x.value),
      pageNumber,
      pageSize,
      brand: brand === '' ? null : brand,
    };
    getProduct(model).then((res) => {
      setCatalog(res);
    });
  }, [pageSize, pageNumber, category, brand]);

  const setBrandItem = (id: string) => {
    setBrand(id);
    setCategory([]);
  };

  const setCategoryItem = (idList: OptionsModel[]) => {
    setCategory(idList);
    setBrand('');
  };

  return (
    <ProductList
      productList={catalog}
      setPageSize={setPageSize}
      pageSize={pageSize}
      setPageNumber={setPageNumber}
      pageNumber={pageNumber}
      setBrand={setBrandItem}
      category={category}
      setCategory={setCategoryItem}
      brand={brand}
    />
  );
};

export default Catalog;
