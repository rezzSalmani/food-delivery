import React, { useEffect, useState } from 'react';
import Common from '../../components/UI/Common';
import { json, useLoaderData, useNavigation } from 'react-router-dom';
import ProductItem from '../../components/product/ProductItem';
import { supabase } from '../../supabaseClient';
import { sortProducts } from '../../util/util';
const Foods = () => {
  const [allFoods, setAllFoods] = useState(useLoaderData());
  // pagination state
  const [paginatedFoods, setPaginatedFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  //search state
  const [searchTerm, setSearchTerm] = useState('');
  // sorting state
  const [sortingOption, setSortingOption] = useState('default');

  // handle pagination and searching
  const pageSize = 8;
  const pageCount = Math.ceil(allFoods.length / pageSize);
  const pageNumbers = Array.from(Array(pageCount).keys());

  useEffect(() => {
    sortAndSetPaginatedFoods(sortingOption);
  }, [sortingOption, currentPage, searchTerm]);

  const sortAndSetPaginatedFoods = option => {
    const endIndex = pageSize * currentPage;
    const startIndex = endIndex - pageSize;

    let filteredFoods = allFoods;
    if (searchTerm) {
      filteredFoods = allFoods.filter(food =>
        food.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    const sortedFoods = sortProducts(option, filteredFoods);
    const paginatedFoods = sortedFoods.slice(startIndex, endIndex);

    setPaginatedFoods(paginatedFoods);
  };
  useEffect(() => {
    sortAndSetPaginatedFoods(sortingOption);
  }, [sortingOption, currentPage]);
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage < pageCount) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <>
      <Common title="All Foods" />
      <div className="container">
        {/* input / select box */}
        <div className=" flex items-center justify-between my-10">
          <div className="flex items-center border border-third w-1/2 py-1 xs:py-2 rounded-lg ">
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="outline-none w-full pl-3"
              placeholder="I'm looking for..."
            />
            <span className="cursor-pointer px-1 xs:px-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          <div className="w-1/2 flex justify-end">
            <select
              className="md:w-1/2 border border-third py-1 xs:py-2 rounded-lg outline-none child:text-sm child:sm:text-base cursor-pointer"
              value={sortingOption}
              onChange={e => setSortingOption(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="ascending">Alphabetically, A-Z</option>
              <option value="descending">Alphabetically, Z-A</option>
              <option value="high-price">High price</option>
              <option value="low-price">Low price</option>
            </select>
          </div>
        </div>
        <section>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 ">
            {paginatedFoods &&
              paginatedFoods.map(item => (
                <ProductItem key={item.id} {...item} />
              ))}
          </div>
          <div className="flex-all py-10 items-center gap-2 child:cursor-pointer">
            <button
              className="bg-primary text-zinc-100 text-xs sm:text-sm  py-2 px-2 sm:px-4 rounded-lg hover:bg-secondary transition-all"
              onClick={handlePrevClick}
            >
              Prev
            </button>

            {pageNumbers &&
              pageNumbers.map(item => (
                <li
                  onClick={() => setCurrentPage(item + 1)}
                  key={item + 1}
                  className={` list-none text-xs sm:text-sm  text-zinc-100 py-2  px-3 sm:px-4 rounded-lg hover:bg-secondary transition-all ${
                    item + 1 === currentPage ? 'bg-secondary' : 'bg-primary'
                  }`}
                >
                  {item + 1}
                </li>
              ))}
            <button
              className="bg-primary text-zinc-100 text-xs sm:text-sm py-2  px-2 sm:px-4 rounded-lg hover:bg-secondary transition-all"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Foods;

export const loader = async () => {
  const { data, error } = await supabase.from('deliveryFoodApp').select('*');
  if (error)
    return json({ message: 'Could not fetch Foods!' }, { status: 500 });

  return data;
};
