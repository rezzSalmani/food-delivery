import React from 'react';
const CATEGORY_ITEMS = [
  {
    display: 'Fastfood',
    imgUrl: 'images/category-01.png',
    category: 'BURGER',
  },
  {
    display: 'Pizza',
    imgUrl: 'images/category-02.png',
    category: 'PIZZA',
  },
  {
    display: 'Bread',
    imgUrl: 'images/category-03.png',
    category: 'BREAD',
  },
  {
    display: 'Row Meat',
    imgUrl: 'images/category-04.png',
    category: 'ALL',
  },
];

const Category = ({ onCategoryClick }) => {
  const handleCategoryClick = category => {
    onCategoryClick(category);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-5 mb-10. md:mb-20 ">
      {CATEGORY_ITEMS.map((item, index) => (
        <div
          className="flex items-center gap-1 xs:gap-4 p-3 xs:p-5 bg-third rounded-md hover:-translate-y-3 transition-all duration-200 ease-linear group cursor-pointer overflow-hidden"
          key={index}
          onClick={() => handleCategoryClick(`${item.category}`)}
        >
          <img
            className="w-7 h-7 xs:w-10 xs:h-10 md:w-auto md:h-auto group-hover:scale-105 transition-all duration-200"
            src={item.imgUrl}
            alt={item.display}
          />
          <p className="font-RocknRoll text-sm sm:text-lg">{item.display}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
