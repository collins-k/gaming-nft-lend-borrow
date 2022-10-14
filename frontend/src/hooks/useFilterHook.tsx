import { useEffect, useState } from 'react';

import { generateKey } from '../utils/helper';

export type FilterObject = {
  label: string;
  searchKey: string;
  searchOp: string;
  key: string;
  isActive: boolean;
};

export interface FilterResult {
  filterUI: JSX.Element;
  queryFilterTags: any[];
}

export const useFilterHook = (initFilterTags: FilterObject[]): FilterResult => {
  const [filteredTags, setFilteredTags] =
    useState<FilterObject[]>(initFilterTags);
  const [strapiFilterTags, setStrapiFilterTags] = useState<any[]>([]);

  const handleFilter = (filterKey: string, isActive: boolean) => {
    const newFilteredTags = filteredTags.map((filter) => {
      if (filter.key === filterKey) {
        return { ...filter, isActive };
      }
      return filter;
    });
    setFilteredTags(newFilteredTags);
  };

  const constructActiveFilteringTags = () => {
    const tempArr = filteredTags
      .filter((f) => f.isActive)
      .map((f) => {
        return {
          [f.searchKey]: {
            [f.searchOp]: f.key,
          },
        };
      });
    setStrapiFilterTags(tempArr);
  };

  useEffect(() => {
    constructActiveFilteringTags();
  }, [filteredTags]);

  const renderFilters = (): JSX.Element => {
    return (
      <div>
        {/* Filters */}
        <ul className="flex flex-wrap -m-1">
          {filteredTags?.map((filterTag) => {
            return (
              <li key={generateKey('filter-tag')} className="m-1">
                <button
                  onClick={() => {
                    handleFilter(filterTag.key, !filterTag.isActive);
                  }}
                  className={`bg-gradient-to-r from-indigo-500  ${
                    filterTag.isActive
                      ? 'font-bold to-pink'
                      : 'font-thin to-purple'
                  } inline-flex hover:scale-105  items-center justify-center text-sm font-medium leading-5 rounded-full px-5 py-2   text-white duration-150 ease-in-out`}
                >
                  {filterTag.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return {
    filterUI: renderFilters(),
    queryFilterTags: strapiFilterTags,
  };
};
