import React from 'react';
import Image from 'next/image';
import { FaCartPlus } from 'react-icons/fa6';
import { GetAllProductsResponse } from '@/models/ProductModel';

type Props = {
  product: GetAllProductsResponse;
};

const ProductItem = ({ product }: Props) => {
  return (
    <div>
      <div className="w-full h-72 bg-gray-200 rounded-lg overflow-hidden relative">
        <Image
          src={product.pictureUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority={true}
        />
        <button className=" bg-orange-300 text-xl text-orange-500 absolute px-4 p-2 bottom-3 right-3 rounded-lg hover:text-orange-800">
          <FaCartPlus />
        </button>
      </div>
      <div className="flex items-center mt-2">
        {product.categories.map((category: any, index: number) => (
          <a
            className="text-sm font-normal text-gray-400 hover:text-orange-500"
            key={index}
          >
            {category.categoryName} &nbsp;
          </a>
        ))}
      </div>
      <div className="flex justify-between items-center  text-gray-700">
        <h3>{product.name}</h3>
        <p className="font-bold ">{product.price} ₺</p>
      </div>
    </div>
  );
};

export default ProductItem;
