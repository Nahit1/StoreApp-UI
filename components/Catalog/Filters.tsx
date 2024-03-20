'use client';
import { GetAllBrandResponse } from '@/models/BrandModel';
import { OptionsModel } from '@/models/CategoryModel';
import { getBrands, getCategories } from '@/services/CatalogService';
import { Button, Dropdown, Label, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { MultiSelect } from 'react-multi-select-component';

const pageSizeButtons = [4, 8, 12];

type Props = {
  setPageSize: (size: number) => void;
  setBrand: (brandId: string) => void;
  setCategory: (categoryId: OptionsModel[]) => void;
  category: OptionsModel[];
  brand: string;
  pageSize: number;
};

const Filters = ({
  setPageSize,
  pageSize,
  brand,
  setBrand,
  setCategory,
  category,
}: Props) => {
  const [selected, setSelected] = useState([]);
  const [categories, setCategories] = useState<OptionsModel[]>([]);
  const [brands, setBrands] = useState<GetAllBrandResponse[]>([]);

  useEffect(() => {
    getCategories().then((data) => {
      const categories = data.result.map((data) => ({
        label: data.categoryName,
        value: data.id,
      }));
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    getBrands().then((data) => setBrands(data.result));
  }, []);

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center justify-start gap-2 flex-1">
        <MultiSelect
          options={categories}
          value={category}
          onChange={setCategory}
          labelledBy="Select"
          className="w-1/6"
        />
        <Select
          className="w-1/6"
          id="Brands"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value={''}>Select Brand</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.brandName}
            </option>
          ))}
        </Select>
        <div className="max-w-md  ml-5 w-4/6">
          <TextInput
            type="text"
            className="w-full"
            rightIcon={BiSearch}
            placeholder="Search..."
          />
        </div>
      </div>

      <Button.Group>
        {pageSizeButtons.map((value, i) => (
          <Button
            key={i}
            color={`${pageSize === value ? 'red' : 'gray'}`}
            className="focus:ring-0 w-full"
            onClick={() => setPageSize(value)}
          >
            {value}
          </Button>
        ))}
      </Button.Group>
    </div>
  );
};

export default Filters;
