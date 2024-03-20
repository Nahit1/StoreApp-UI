'use client';

import { Pagination } from 'flowbite-react';

type Props = {
  pageCount: number;
  setPageNumber: (pageNumber: number) => void;
  pageNumber: number;
};

const PaginationFilter = ({ pageCount, pageNumber, setPageNumber }: Props) => {
  const onPageChange = (page: number) => setPageNumber(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={pageNumber}
        totalPages={pageCount}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationFilter;
