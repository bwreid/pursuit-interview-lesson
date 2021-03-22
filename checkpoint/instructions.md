# Checkpoint: Reduce

## Project Setup

Follow the instructions below to get this project up and running on your own machine:

- Fork and clone this repository.
- Run `npm install` in the root directory.

To run the tests, you can run the following command:

```bash
npm test
```

You can also use `npm run test-watch` to use the `--watch` flag for jest.

## Instructions

In order to complete this checkpoint you must write functions to return data formatted in a specific way. While doing so, you must make use of the `.reduce()` method while not using other methods like `.forEach()`, `.map()`, or `.filter()`.

### Datasets

You will be working with two different datasets:

- **Products:** This array of objects in `data/products.js` represents various products available at a clothing store.
- **Stock:** This array of objects in `data/stock.js` represents the remaining sizes available for a particular item.

The `product_id` key in the stock objects references the `id` in the products objects.

### Function instructions

The functions in `index.js` can be completed in whatever order you choose. Follow the instructions below to better understand how to complete each function.

Whenever `products` or `stock` is used as a parameter, you can assume that the entire relevant array will be passed in from the dataset, as described above.

#### getAllPrices()

The `getAllPrices()` function has one parameter:

- A list of all products.

It returns an array of all of the prices in the products array.

**Example:**

```javascript
getAllPrices(products);
/*
  [4700, 7900, 2800, 1900]
*/
```

#### totalOfAllProductPrices()

The `totalOfAllProductPrices()` function has one parameter:

- A list of all products.

It returns the total of all product prices in the products array.

**Example:**

```javascript
totalOfAllProductPrices(products);
/*
  17300
*/
```

#### productNamesById()

The `productNamesById()` function has one parameter:

- A list of all products.

It returns an object where the keys are IDs and the values are the associated product names.

**Example:**

```javascript
productNamesById(products);
/*
  {
    OsZygR: "Green Hoodie",
    "6A8aMF": "Grey Tapered Jeans",
    MR88fF: "Black Reversible Belt",
    MztNUS: "Yellow Beanie",
  }
*/
```

#### productsById()

The `productsById()` function has one parameter:

- A list of all products.

It returns an object where the keys are IDs and the value is the entire product object _without the ID._

**Example:**

```javascript
productsById(products);
/*
  {
    OsZygR: {
      name: "Green Hoodie",
      priceInCents: 4700,
    },
    ...
  };
*/
```

#### totalOfAllMediumProducts()

The `totalOfAllMediumProducts()` function has one parameter:

- A list of all stock quantities.

It returns a number which represents the total of all medium sized products.

**Example:**

```javascript
totalOfAllMediumProducts(stock);
/*
  25
*/
```

#### getIdsOfProductsWithOneSize()

The `getIdsOfProductsWithOneSize()` function has one parameter:

- A list of all stock quantities.

It returns an array of product IDs which represents products that have a positive quantity under `inStock.oneSize`.

**Example:**

```javascript
getIdsOfProductsWithOneSize(stock);
/*
  ["MR88fF", "MztNUS"]
*/
```

#### availabilityById()

The `availabilityById()` function has one parameter:

- A list of all stock quantities.

It returns an object where the key is the ID and the value is the 'inStock' object.

**Example:**

```javascript
availabilityById(stock);
/*
  {
    OsZygR: {
      extraSmall: 23,
      small: 11,
      medium: 3,
      large: 0,
      extraLarge: 24,
      oneSize: 0,
    },
    ...
  }
*/
```

#### getProductsIncludeInStock()

The `getProductsIncludeInStock()` function has two parameters:

- A list of all products.
- A list of all stock quantities.

It returns an array of the products, where each product has a new key: `inStock`. This value represents the associated object from the stock quantities.

**Example:**

```javascript
getProductsIncludeInStock(stock);
/*
  [
    {
      id: "OsZygR",
      name: "Green Hoodie",
      priceInCents: 4700,
      inStock: {
        extraSmall: 23,
        small: 11,
        medium: 3,
        large: 0,
        extraLarge: 24,
        oneSize: 0,
      },
    },
    ...
  ]
*/
```
