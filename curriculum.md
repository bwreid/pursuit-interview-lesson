---
id: PF-EX-Reduce
title: Reduce
timeInMinutes: 60
---

# Reduce

At this point, you have learned about the accumulator pattern and used it to solve problems where you needed to aggregate data. You've learned that the accumulator can be any data type. You have also learned different native array methods such as `.map()` and `.filter()` which elegantly implement the accumulator pattern.

In this lesson, you will learn about the `.reduce()` method. It can allow you to accumulate data into any data type, including objects.

By the end of this lesson, you will be able to:

- Explain how the `.reduce()` method accumulates values from an array into a single value.
- Solve data aggregation problems using the `.reduce()` method.

---

## Return types

Recall that the _accumulator_ in the _accumulator pattern_ can be of any data type: number, string, array, object, or even boolean. Many of the higher order array methods you've learned about so far all have their own default way of accumulating data, as shown below.

| Method      | Return data type |
| ----------- | ---------------- |
| `.map()`    | An array.        |
| `.filter()` | An array.        |
| `.some()`   | A boolean.       |
| `.every()`  | A boolean.       |

As seen in the table above, none of these methods allow for the accumulator to be a number, string, or object.

The `.reduce()` method is different in that it can return any data type.

## Method overview

Arrays natively have the `.reduce()` method. Unlike similar native array methods, the `.reduce()` method regularly accepts two arguments:

- A callback function, also called the reducer function.
- (Optional) An initial value.

Most generally, using `.reduce()` will look like the following code block.

```js
array.reduce((accumulator, element) => {}, initialValue);
```

The callback, also called the reducer function, allows for four parameters:

- `accumulator`
- `element`
- (Optional) `index`
- (Optional) `collection`

On the first iteration, the `accumulator` is the `initialValue` if provided. Whatever gets returned from the reducer function on every subsequent iteration becomes the `accumulator`.

To better understand how this works, the example below implements the `.filter()` method with `.reduce()`.

### Recreating `.filter()`

Because you are able to set your own accumulator, the `.reduce()` method can be used to implement all other higher order array methods.

For example, take a look at the code below which includes the `.filter()` method and the `.reduce()` method. The return value of `filterResult` and `reduceResult` are exactly the same.

```js
const pricesInCents = [4400, 1000, 890, 8750];

// Filter
const filterResult = pricesInCents.filter((price) => {
  return price < 5000;
});
//> [4400, 1000, 890];

// Reduce
const initialValue = [];
const reduceResult = pricesInCents.reduce((accumulator, price) => {
  if (price < 5000) accumulator.push(price);
  return accumulator;
}, initialValue);
//> [4400, 1000, 890];
```

Step-by-step, this is what is happening with the `.reduce()` section of the code:

1. `const initialValue = [];`

   The initial value is set to be an empty array.

1. `const reduceResult = ...`

   A new variable of `reduceResult` is declared, and assigned to the return value of the `.reduce()` method.

1. `pricesInCents.reduce((accumulator, price) => { ... }, initialValue);`

   The `.reduce()` method is called on the `pricesInCents` array. The reducer function makes use of the `accumulator` parameter and assigns a sensible name to represent each element of the array, `price`. Finally, the `initialValue` is used as the second argument. For the first iteration, `accumulator` will be `initialValue`, which is an empty array.

1. `if (price < 5000) accumulator.push(price);`

   If the price is less than `5000`, the price will be pushed into the accumulator. Remember, on the first loop the accumulator is an empty array.

1. `return accumulator;`

   Whatever is returned from the reducer function becomes the accumulator on the next iteration. In this case, the `accumulator` is returned, potentially with new contents.

This process results in the following changes to the accumulator at each iteration:

| Index | Accumulator when returned |
| ----- | ------------------------- |
| 0     | `[4400]`                  |
| 1     | `[4400, 1000]`            |
| 2     | `[4400, 1000, 890]`       |
| 3     | `[4400, 1000, 890]`       |

<details>
  <summary>🔷 Try this</summary>

It can be difficult to imagine how `.reduce()` works. Try running the following Repl.it, which will show you at each step of the process how the `accumulator` value is changing.

→ [Example: Reduce with Logs](https://replit.com/@WReidPlayground/PF-EX-Reduce-Reduce-with-Logs?lite=1)

When working with reduce, it can be useful to use logging and debugging tools to better understand what is happening at each step of the process.

</details>

## Accumulating to different types

The `.reduce()` method is useful in situations where the data type you want to return is a number, string, or object. For example, the code below aggregates all of the prices up to a single number using the `.reduce()` method.

```js
const pricesInCents = [4400, 1000, 890, 8750];
const initialValue = 0;
const result = pricesInCents.reduce((accumulator, price) => {
  return accumulator + price;
}, initialValue);
// 15040
```

In the above code, the `accumulator` pattern will start with the value `0`. On each iteration, the current value (i.e. `price`) will be added to it and then returned. That result will become the `accumulator` on subsequent iterations.

<details>
  <summary>🔷 Try this</summary>

Adding up a number of values from an array into a single value should feel familiar from when you first learned about the accumulator pattern. As you learned then, the initial value can be whatever makes sense for the problem at hand.

Try running the following Repl.it which includes two more examples of using the `.reduce()` method. After looking at the output, go through line by line, making sure you understand what is happening at each step. Consider adding additional log statements if needed.

→ [Example: Different Accumulators](https://replit.com/@WReidPlayground/PF-EX-Reduce-Different-Accumulators?lite=1)

</details>

### Omitting the initial value

The initial value is actually an optional value when using the `.reduce()` method. If you omit this value, on the first iteration the `accumulator` will be the value at index `0` while the current value will be the value at index `1`.

When this is the case, you may see the accumulator value referred to as `previous` and the current value referred to as `current`. This can lead to very concise code.

```js
const pricesInCents = [4400, 1000, 890, 8750];
const result = pricesInCents.reduce((previous, current) => previous + current);
// 15040
```

## Complex usage

You can use the `.reduce()` method to aggregate data into any data type, such as an object. While this can feel more difficult, it is exactly the same as the previous examples.

Take the following dataset which is an array of products.

```js
const products = [
  { id: "OsZygR", name: "Green Hoodie", priceInCents: 4700 },
  { id: "6A8aMF", name: "Grey Tapered Jeans", priceInCents: 7900 },
  { id: "MR88fF", name: "Black Reversible Belt", priceInCents: 2800 },
  { id: "MztNUS", name: "Yellow Beanie", priceInCents: 1900 },
];
```

Imagine you would like a different data structure such as an object where each key is the name of the product and each value is the price:

```js
{
  "Green Hoodie": 4700,
  "Grey Tapered Jeans": 7900,
  "Black Reversible Belt": 2800,
  "Yellow Beanie": 1900
}
```

Since the end result is an object, the accumulator should be an object. The code inside of the supplied callback function will build up the object as it is iterating over the array.

```js
const initialValue = {};
const result = products.reduce((accumulator, product) => {
  const { name, priceInCents } = product;
  accumulator[name] = priceInCents;

  return accumulator;
}, initialValue);
```

In the above code, the following occurs:

1. `const initialValue = {};`

   An initial value is determined, an empty object.

1. `const result = ...`

   A new variable of `result` is declared, assigned to the return value of the `.reduce()` method.

1. `products.reduce((accumulator, product) => { ... }, initialValue);`
   The `.reduce()` method is called, and the reducer function makes use of the `accumulator` and a variable to represent the current element, `product`. The initial value is also passed in.

1. `const { name, priceInCents } = product;`

   The variables `name` and `priceInCents` are assigned through destructuring.

1. `accumulator[name] = priceInCents;`

   The accumulator, which is an object, is assigned a key that is the product's name and a value that is the product's price.

1. `return accumulator;`

   The accumulator is returned, allowing for more keys to be added to the object on subsequent iterations.

<details>
  <summary>🔷 Try this</summary>

Your initial value can be whatever you like. With the `.reduce()` method, that means you could even start with an object that already includes keys and values.

Try running the following Repl.it which includes a more complex example of the above code. Pay careful attention to the initial value and the final output. Then, consider the following questions:

- How would you describe what this code does?
- If you were to wrap this code in a function, what name would you give to that function?

→ [Example: Different Accumulators](https://replit.com/@WReidPlayground/PF-EX-Reduce-Different-Accumulators?lite=1)

</details>

---

## Checkpoint

To complete this checkpoint, solve the code challenge in the [./checkpoint](./checkpoint/instructions.md) folder of this repository.

Once you have all your tests passing, create and submit a pull request.
