// Problem 1

function formatString(input: string, toUpper?: boolean): string {
  if (toUpper == false) {
    return input.toLocaleLowerCase();
  } else {
    return input.toLocaleUpperCase();
  }
}
// console.log(formatString('Hello'));
// console.log(formatString('Hello', true));
// console.log(formatString('Hello', false));

// Problem 2

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));

// Problem 3

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

// console.log(concatenateArrays(['a', 'b'], ['c']));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// Problem 4

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `make: ${this.make},Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel(): string {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car('Toyota', 2020, 'Corolla');

// console.log(myCar.getInfo());
// console.log(myCar.getModel());



//Problem 5

function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else if (typeof value === 'number') {
    return value * 2;
  } else {
    return 0;
  }
}

// console.log(processValue('hello'));
// console.log(processValue(10));

//Problem 6

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((max, current) => {
    return current.price > max.price ? current : max;
  });
}

const products: Product[] = [
  { name: 'Laptop', price: 1000 },
  { name: 'Phone', price: 700 },
  { name: 'Tablet', price: 800 },
];

// console.log(getMostExpensiveProduct(products));
// console.log(getMostExpensiveProduct([]));

//Problem 6

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDaytype(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return 'Weekend';
  }
  return 'Wednesday';
}

// console.log(getDaytype(Day.Monday));
// console.log(getDaytype(Day.Sunday));
