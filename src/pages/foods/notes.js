// useEffect(() => {
//   // let filteredFoods = allFoods;
//   // if (searchTerm) {
//   //   filteredFoods = allFoods.filter(food =>
//   //     food.title.toLowerCase().includes(searchTerm.toLowerCase())
//   //   );
//   // }
//   const endIndex = pageSize * currentPage;
//   const startIndex = endIndex - pageSize;
//   // const paginatedFoods = filteredFoods.slice(startIndex, endIndex);
//   const paginatedFoods = async () => {
//     let { data } = await supabase
//       .from('deliveryFoodApp')
//       .select('*')
//       .range(startIndex, endIndex - 1);

//     setPaginatedFoods(data);
//   };
//   paginatedFoods();
// }, [currentPage, searchTerm]);

// handle sorting
// const sortProducts = option => {
//   console.log(option);
//   let sortedProducts = [...paginatedFoods];
//   switch (option) {
//     case 'default':
//       sortedProducts = [...paginatedFoods];
//       break;
//     case 'ascending':
//       sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
//       break;
//     case 'descending':
//       sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
//       break;
//     case 'high-price':
//       sortedProducts.sort((a, b) => b.price - a.price);
//       break;
//     case 'low-price':
//       sortedProducts.sort((a, b) => a.price - b.price);
//       break;
//     default:
//       break;
//   }
//   // allFoods = sortedProducts;
//   console.log(sortedProducts);
//   setPaginatedFoods(sortedProducts);
// };

// useEffect(() => {
//   // setCurrentPage(1);
//   sortProducts(sortingOption);
// }, [sortingOption, currentPage]);
