import React from 'react';

import { useRouter } from 'next/router';

import { MetaData } from '../types/Metadata';
import { generateKey } from '../utils/helper';

export type PaginationProps = {
  paginationData: Pick<MetaData, 'pagination'>;
  currentPage: number;
};

function PaginationClassic({ paginationData, currentPage }: PaginationProps) {
  const router = useRouter();

  const createPageButtons = () => {
    const paginateButtons = [];
    for (let i = 1; i <= paginationData?.pagination?.pageCount; i += 1) {
      paginateButtons.push(
        <li
          key={generateKey('paginate-li')}
          onClick={() => {
            router.push(`${router.pathname}?page=${i}`, undefined, {
              shallow: true,
            });
          }}
        >
          <span
            className={`inline-flex items-center mx-1 justify-center rounded-l leading-5 px-3.5 py-2 ${
              i === currentPage ? 'bg-pink' : 'bg-gray-700'
            } cursor-pointer hover:animate-wiggle  text-white font-bold`}
          >
            {i}
          </span>
        </li>
      );
    }
    return paginateButtons;
  };

  return (
    <div className="flex justify-center">
      <nav className="flex" role="navigation" aria-label="Navigation">
        <div className="mr-2">
          <span className="inline-flex cursor-pointer items-center hover:bg-pink justify-center rounded leading-5 px-2.5 py-2 bg-gray-700 border border-slate-200 text-slate-300">
            <span className="sr-only">Previous</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
            </svg>
          </span>
        </div>
        <ul className="inline-flex text-sm font-medium -space-x-px shadow-sm">
          {createPageButtons()}
        </ul>
        <div className="ml-2">
          <a
            href="#0"
            className="inline-flex cursor-pointer items-center justify-center rounded leading-5 px-2.5 py-2 bg-gray-700 hover:bg-pink border border-slate-200 text-slate-600 hover:text-white shadow-sm"
          >
            <span className="sr-only">Next</span>
            <wbr />
            <svg className="h-4 w-4 fill-current" viewBox="0 0 16 16">
              <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
            </svg>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default PaginationClassic;
