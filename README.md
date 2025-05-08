## What is the use of the keyof keyword in TypeScript?

In TypeScript, the keyof keyword is used to extract the property names (keys)
from a type. It creates a union type consisting of all the property names of the
given type. This helps ensure that you only use valid keys of that type,
ensuring type safety.

```ts
interface Car {
  brand: string;
  model: string;
  year: number;
}

type CarKeys = keyof Car; // "brand" | "model" | "year"

function getCarProperty(car: Car, key: keyof Car) {
  return car[key];
}

const myCar: Car = { brand: 'Toyota', model: 'Corolla', year: 2020 };

console.log(getCarProperty(myCar, 'brand')); // "Toyota"
console.log(getCarProperty(myCar, 'model')); // "Corolla"
console.log(getCarProperty(myCar, 'year')); // 2020
```
