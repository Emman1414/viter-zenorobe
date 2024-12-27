export const getClothByCategory = (categoryId, resultCloth) => {
  let result = [];

  resultCloth?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });

  return result;
};

export const getCategoryPrices = (resultCategory, resultCloth) => {
  let result = [];
  let resultCategoryId = [];

  resultCategory?.data.map((categoryItem) => {
      let isResultCategoryExist = false;

    
      
    resultCloth?.data.map((clothItem) => {
      // BOOLEAN CHECK IF CATEGORY EXIST IN RESULT CATEGORY ARRAY
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.category_aid)
      );

      // GET INDEX OF EXISTING CATEGORY
      const getIndexCategoryItem = resultCategoryId.indexOf(
        clothItem.clothes_category_id
      );

      //IF CATEGORY NOT EXIST ADD CATEGORY WITH PRICE
      if (
        Number(categoryItem.category_aid) ===
          Number(clothItem.clothes_category_id) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.category_aid);
        result.push({
          ...categoryItem,
          item_price: Number(clothItem.clothes_price),
        });
      }

      // IF CATEGORY EXIST ADD MENU PRICE TO CATEGORY
      if (
        Number(categoryItem.category_aid) ===
          Number(clothItem.clothes_category_id) &&
        isResultCategoryExist === true &&
        getIndexCategoryItem >= 0
      ) {
        result[getIndexCategoryItem].item_price += Number(clothItem.clothes_price);
      }
    });

    if (!isResultCategoryExist) {
      result.push({...categoryItem, item_price: 0});
      resultCategoryId.push(categoryItem.category_aid);
    }
  });
  return result;
};
