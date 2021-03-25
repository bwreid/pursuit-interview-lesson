// Product functions
function getAllPrices(products) {
  return products.reduce((accumulator, product) => {
    accumulator.push(product.priceInCents);
    return accumulator;
  }, []);
}

function totalOfAllProductPrices(products) {
  return products.reduce((accumulator, product) => {
    return accumulator + product.priceInCents;
  }, 0);
}

function productNamesById(products) {
  return products.reduce((accumulator, product) => {
    accumulator[product.id] = product.name;
    return accumulator;
  }, {});
}

function productsById(products) {
  return products.reduce((accumulator, product) => {
    const { id, name, priceInCents } = product;
    accumulator[id] = { name, priceInCents };
    return accumulator;
  }, {});
}

// Stock functions
function totalOfAllMediumProducts(stock) {
  return stock.reduce((accumulator, product) => {
    return accumulator + product.inStock.medium;
  }, 0);
}

function getIdsOfProductsWithOneSize(stock) {
  return stock.reduce((accumulator, product) => {
    if (product.inStock.oneSize) accumulator.push(product.product_id);
    return accumulator;
  }, []);
}

function availabilityById(stock) {
  return stock.reduce((accumulator, product) => {
    const { product_id, inStock } = product;
    accumulator[product_id] = { ...inStock };
    return accumulator;
  }, {});
}

// Combined function
function getProductsIncludeInStock(products, stock) {
  const byId = availabilityById(stock);
  return products.reduce((accumulator, product) => {
    const inStock = byId[product.id];
    accumulator.push({ ...product, inStock });
    return accumulator;
  }, []);
}

module.exports = {
  getAllPrices,
  totalOfAllProductPrices,
  productNamesById,
  productsById,
  totalOfAllMediumProducts,
  getIdsOfProductsWithOneSize,
  availabilityById,
  getProductsIncludeInStock,
};
