const {
  getAllPrices,
  totalOfAllProductPrices,
  productNamesById,
  productsById,
  totalOfAllMediumProducts,
  getIdsOfProductsWithOneSize,
  availabilityById,
  getProductsIncludeInStock,
} = require("./index");

const products = require("./data/products");
const stock = require("./data/stock");

describe("Reduce Checkpoint problems", () => {
  describe("getAllPrices()", () => {
    test("it returns an array of all of the prices", () => {
      const actual = getAllPrices(products);
      const expected = [4700, 7900, 2800, 1900];
      expect(actual).toEqual(expected);
    });
  });

  describe("totalOfAllProductPrices()", () => {
    test("it returns a total of all product prices", () => {
      const actual = totalOfAllProductPrices(products);
      const expected = 17300;
      expect(actual).toEqual(expected);
    });
  });

  describe("productNamesById()", () => {
    test("it returns an object where the keys are IDs and the values are the associated product names", () => {
      const actual = productNamesById(products);
      const expected = {
        OsZygR: "Green Hoodie",
        "6A8aMF": "Grey Tapered Jeans",
        MR88fF: "Black Reversible Belt",
        MztNUS: "Yellow Beanie",
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("productsById()", () => {
    test("it returns an object where the keys are IDs and the value is the entire product object, without the ID", () => {
      const actual = productsById(products);
      const expected = {
        OsZygR: {
          name: "Green Hoodie",
          priceInCents: 4700,
        },
        "6A8aMF": {
          name: "Grey Tapered Jeans",
          priceInCents: 7900,
        },
        MR88fF: {
          name: "Black Reversible Belt",
          priceInCents: 2800,
        },
        MztNUS: {
          name: "Yellow Beanie",
          priceInCents: 1900,
        },
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("totalOfAllMediumProducts()", () => {
    test("it returns the total of all inStock medium products", () => {
      const actual = totalOfAllMediumProducts(stock);
      const expected = 25;
      expect(actual).toEqual(expected);
    });
  });

  describe("getIdsOfProductsWithOneSize()", () => {
    test("it returns an array of IDs representing those products that have a positive 'oneSize' value", () => {
      const actual = getIdsOfProductsWithOneSize(stock);
      const expected = ["MR88fF", "MztNUS"];
      expect(actual).toEqual(expected);
    });
  });

  describe("availabilityById()", () => {
    test("it returns an object where the key is the ID and the value is the 'inStock' object", () => {
      const actual = availabilityById(stock);
      const expected = {
        OsZygR: {
          extraSmall: 23,
          small: 11,
          medium: 3,
          large: 0,
          extraLarge: 24,
          oneSize: 0,
        },
        "6A8aMF": {
          extraSmall: 2,
          small: 19,
          medium: 22,
          large: 29,
          extraLarge: 24,
          oneSize: 0,
        },
        MR88fF: {
          extraSmall: 0,
          small: 0,
          medium: 0,
          large: 0,
          extraLarge: 0,
          oneSize: 12,
        },
        MztNUS: {
          extraSmall: 0,
          small: 0,
          medium: 0,
          large: 0,
          extraLarge: 0,
          oneSize: 15,
        },
      };
      expect(actual).toEqual(expected);
    });
  });

  describe("getProductsIncludeInStock()", () => {
    test("it returns an array of products, with each one's associated 'inStock' object inside", () => {
      const actual = getProductsIncludeInStock(products, stock);
      const expected = [
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
        {
          id: "6A8aMF",
          name: "Grey Tapered Jeans",
          priceInCents: 7900,
          inStock: {
            extraSmall: 2,
            small: 19,
            medium: 22,
            large: 29,
            extraLarge: 24,
            oneSize: 0,
          },
        },
        {
          id: "MR88fF",
          name: "Black Reversible Belt",
          priceInCents: 2800,
          inStock: {
            extraSmall: 0,
            small: 0,
            medium: 0,
            large: 0,
            extraLarge: 0,
            oneSize: 12,
          },
        },
        {
          id: "MztNUS",
          name: "Yellow Beanie",
          priceInCents: 1900,
          inStock: {
            extraSmall: 0,
            small: 0,
            medium: 0,
            large: 0,
            extraLarge: 0,
            oneSize: 15,
          },
        },
      ];
      expect(actual).toEqual(expected);
    });
  });
});

describe("Checkpoint constraints", () => {
  test("no function uses the .forEach(), .map(), or .filter() methods", () => {
    const fns = require("./index");
    const names = [
      "getAllPrices",
      "totalOfAllProductPrices",
      "productNamesById",
      "productsById",
      "totalOfAllMediumProducts",
      "getIdsOfProductsWithOneSize",
      "availabilityById",
      "getProductsIncludeInStock",
    ];

    names.forEach((name) => {
      const error = `${name}() may not include .filter(), .map(), or .forEach().`;
      const content = fns[name].toString();
      expect(content, error).not.toMatch(/\.filter\(/g);
      expect(content, error).not.toMatch(/\.map\(/g);
      expect(content, error).not.toMatch(/\.forEach\(/g);
    });
  });

  test("every function uses the .reduce() method", () => {
    const fns = require("./index");
    const names = [
      "getAllPrices",
      "totalOfAllProductPrices",
      "productNamesById",
      "productsById",
      "totalOfAllMediumProducts",
      "getIdsOfProductsWithOneSize",
      "availabilityById",
      "getProductsIncludeInStock",
    ];

    names.forEach((name) => {
      const error = `${name}() must include the .reduce() method.`;
      const content = fns[name].toString();
      expect(content, error).toMatch(/\.reduce\(/g);
    });
  });
});
