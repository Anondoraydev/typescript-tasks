## What are some differences between interfaces and types in TypeScript?


In TypeScript, the keyof keyword is used to extract the property names (keys) from a type. It creates a union type consisting of all the property names of the given type. This helps ensure that you only use valid keys of that type, providing type safety and avoiding errors.


### Example:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// keyof User becomes: "id" | "name" | "email"
type UserKeys = keyof User;

function getUserProperty(user: User, key: keyof User) {
  return user[key];
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
};

console.log(getUserProperty(user, "name"));  // Output: "John Doe"
console.log(getUserProperty(user, "email")); // Output: "john@example.com"

```

<br/>

## What is type inference in TypeScript? Why is it helpful?

Type inference is a process where you don't have to explicitly define the type of a variable or expression. The programming language automatically figures it out, usually based on the value assigned. For example, if you store a number in a variable, the language will automatically assume it's a number type. This makes the code easier to write, reduces the need to think about types, and helps catch errors earlier. The program becomes cleaner and easier to work with.
