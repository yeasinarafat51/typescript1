// problem 1

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return !value;
    }
}


// problem2
function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}





//   problem3



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}



// problem4

interface Item {
    title: string;
    rating: number;
}

function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}


// problem5
interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

// problem6

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
}

// problem7

function getUniqueValues(
    arr1: (number | string)[],
    arr2: (number | string)[]
  ): (number | string)[] {
  
    const result: (number | string)[] = [];
  
    function addIfNotExists(value: number | string) {
     
      for (let i = 0; i < result.length; i++) {
        if (result[i] === value) {
          return; 
        }
      }
      result[result.length] = value; 
    }
  
   
    for (let i = 0; i < array1.length; i++) {
      addIfNotExists(array1[i]);
    }
  
   
    for (let i = 0; i < array2.length; i++) {
      addIfNotExists(array2[i]);
    }
  
    return result;
  }
  
//   problem8

  interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const totalPrice = product.price * product.quantity;

            if (product.discount) {
                return totalPrice - (totalPrice * (product.discount / 100));
            }

            return totalPrice;
        })
        .reduce((sum, current) => sum + current, 0);
}

