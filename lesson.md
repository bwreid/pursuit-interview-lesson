# Reduce

## Setup

Please complete the following before the lesson begins:

- [ ] Fork and clone this repository on your own computer. You can find the link in Slack.

- [ ] Open and then fork this [Repl.it](https://replit.com/@WReidPlayground/PF-LS-Reduce).

- [ ] With whatever time remains, take a look at the `data/products.js` and `data/quantities.js` files inside the **Repl.it**. With a neighbor or on your own, answer the warmup questions presented there.

---

## Learning Objectives

By the end of this in-person lesson, you will be able to:

- Explain how the `.reduce()` method accumulates values from an array into a single value.
- Solve data aggregation problems using the `.reduce()` method.

---

## Guiding Questions

- In what ways is the `.reduce()` method similar to `.map()`, `.filter()`, `.some()`, and `.every()`?

  > Your answer...

- How does the `.reduce()` method differ from `.map()`, `.filter()`, `.some()`, and `.every()`?

  > Your answer...

- How would you describe what the following code is doing?

  ```js
  let accumulator = 0;
  for (let index = 0; index < prices.length; index++) {
    accumulator += prices[index];
    console.log(`Index: ${index}\tAccumulator value: ${accumulator}.`);
  }
  console.log(accumulator);
  ```

  > Your answer...

- The following code uses the `.reduce()` method to achieve the same result as the code above. The `.reduce()` method accepts two arguments. What are these arguments?

  ```js
  let result = prices.reduce((accumulator, price) => {
    return accumulator + price;
  }, 0);
  ```

  > Your answer...

- In the code above, why must you `return` the value of `accumulator + price`?

  > Your answer...

- The second argument of `.reduce()` is optional. In the code above, what happens if you remove it? Why?

  > Your answer...

- Take a look at the following code which makes use of the `.reduce()` function. At the end of each iteration, what is the value of `accumulator`?

  ```js
  let result = prices.reduce((accumulator, price, index) => {
    const numerical = index + 1;
    return accumulator + `${numerical}. ${price}\n`;
  }, "Prices In Cents:\n");
  ```

  > Your answer...

- Take a moment to read through the following code that iterates over the `products` array and anticipate what `result` will be. Pay close attention to the initial value, what is getting returned, and how the accumulator is changing.

  Once you've finished, run the code to check your answer. Was it what you expected? If not, what did you miss?

  ```js
  let result = products.reduce((accumulator, product) => {
    if (product.priceInCents < 2500) accumulator.push(product.name);
    return accumulator;
  }, []);
  ```

  > Your answer...

- Use the `.reduce()` method to create the following result. What data type did you choose to be the accumulator and why?

  ```js
  ["8xBfKJ", "HOwror", "Ihn6~B"];
  ```

  > Your answer...

## Next Steps

With a classmate, complete the following challenges. Once you are done, you may move on to complete the Checkpoint for this lesson.

- [ ] Mentally evaluate the following code before running it. How would you describe what this code is doing?

  ```js
  let result = products.reduce((accumulator, product) => {
    const { name, priceInCents } = product;
    accumulator[name] = priceInCents;
    return accumulator;
  }, {});
  ```

- [ ] Mentally evaluate the following code before running it. How would you describe what this code is doing?

  ```js
  let result = products.reduce(
    (accumulator, product) => {
      const { name, priceInCents } = product;
      if (priceInCents < 2500) {
        accumulator.affordable.push(product);
      } else {
        accumulator.tooExpensive.push(product);
      }
      return accumulator;
    },
    { affordable: [], tooExpensive: [] }
  );
  ```

- [ ] Using the `.reduce()` method, write code that returns a boolean as to whether or not any product's `priceInCents` is less than `1500`. The end result should be `true`.

- [ ] Using the `.reduce()` method, write code that returns an object where the keys are IDs and the value is an object with the product's `name` and `priceInCents`. The end result should look like the following:
  ```js
  {
    "8xBfKJ": {
      name: "Black Chelsea Boots",
      priceInCents: 5000,
    },
    "HOwror": {
      name: "Shoulder Bag in Black Nylon",
      priceInCents: 2000,
    },
    "Ihn6~B": {
      name: "Cat Eye Sunglasses",
      priceInCents: 1450,
    }
  }
  ```
