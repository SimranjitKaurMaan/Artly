import { Response } from "miragejs";

/**
 * All the routes related to Product are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/products
 * */

export const getAllProductsHandler = function () {
  return new Response(200, {}, { products: this.db.products });
};

/**
 * This handler handles gets all products in the db.
 * send GET Request at /api/user/products/:productId
 * */

export const getProductHandler = function (schema, request) {
  const productId = request.params.productId;
  try {
    const product = schema.products.findBy({ _id: productId });
    return new Response(200, {}, { product });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all products in a category in the db.
 * send GET Request at /api/user/category/:categoryName/products
 * */

 export const getProductCategoryHandler = function (schema, request) {
  const categoryName = request.params.categoryName;
  console.log(categoryName)
  try {
    console.log(schema);
    const products = this.db.products.where({categoryName: categoryName});
    return new Response(200, {}, { products });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
