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