import { createContext, useState, useEffect } from "react";

// import PRODUCTS from "../shop-data.json";

// Import data in Firestore
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data-new";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = { products, setProducts };

  // Add data in Firebase
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  //   // console.log(SHOP_DATA);
  // }, []);

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const categoryMap = await getCategoriesAndDocuments();

  //     console.log(categoryMap);
  //   };

  //   getCategoriesMap();
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
