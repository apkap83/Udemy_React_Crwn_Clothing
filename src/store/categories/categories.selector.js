import { createSelector } from "reselect";

/* MEMOIZATION START */
const selectCategoryReducer = (state) => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);

// Applying Memoization in selector
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});
  }
);
/* MEMOIZATION END */

/* Original Example Start */
export const selectCategoriesMap_OLD = (state) => {
  return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

/* Original Example End */

// export const selectCategories = (state) => {
//   const myObj = {};
//   console.log("Current State:", state);
//   return state.categories.categories.map((category) => {
//     const { title, items } = category;
//     console.log("I");
//     myObj[title.toLowerCase()] = items;
//     return myObj;
//   });
// };
