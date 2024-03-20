'use client';
import React, { useState } from 'react';
import ProductItem from './ProductItem';
import Filters from './Filters';
import PaginationFilter from '../PaginationFilter';
import { GetAllProductsResponse } from '@/models/ProductModel';
import { CustomPaginationResults } from '@/models/BaseModel';
import { OptionsModel } from '@/models/CategoryModel';

type Props = {
  productList: CustomPaginationResults<GetAllProductsResponse[]>;
  setPageSize: (size: number) => void;
  pageSize: number;
  pageNumber: number;
  setPageNumber: (pageNumber: number) => void;
  brand: string;
  setBrand: (brandId: string) => void;
  category: OptionsModel[];
  setCategory: (categoryId: OptionsModel[]) => void;
};

const ProductList = ({
  productList,
  setPageSize,
  pageSize,
  pageNumber,
  setPageNumber,
  setBrand,
  category,
  brand,
  setCategory,
}: Props) => {
  return (
    <div>
      <Filters
        setPageSize={setPageSize}
        pageSize={pageSize}
        setBrand={setBrand}
        category={category}
        setCategory={setCategory}
        brand={brand}
      />
      {!productList.result && !productList.pageCount ? (
        <h3>Loading</h3>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-5 mt-5">
            {productList.result &&
              productList.result.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </div>
          <div className="my-10">
            {productList.pageCount > 1 ? (
              <PaginationFilter
                pageCount={productList.pageCount}
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
              />
            ) : (
              ''
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
