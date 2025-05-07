function formatString(input: string, toUpper?: boolean): string {
      return toUpper !== false ? input.toUpperCase()  : input.toLowerCase(); 
}

const p1 =formatString("hello", true)
const p2 = formatString("hello")
const p3 = formatString("hello", false)
console.log(p1)
console.log(p2)
console.log(p3)



const books = [
      { title: "Book A", rating: 4.5 },
      { title: "Book B", rating: 3.2 },
      { title: "Book C", rating: 5.0 }
]

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
      return items.filter(items => items.rating >= 4)
}

const book = filterByRating(books)
console.log(book)



class Vehicle {
      private make: string;
      private year: number;
    
      constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
      }
    
      public setMake(make: string) {
        this.make = make;
      }
    
      public getMake(): string {
        return this.make;
      }
    
      public setYear(year: number) {
        this.year = year;
      }
    
      public getYear(): number {
        return this.year;
      }
    
      public getInfo(): string {
        return `Make: ${this.getMake()}, Year: ${this.getYear()}`;
      }
    }
    
    class Car extends Vehicle {
      private model: string;
    
      constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
      }
    
      public getModel(): string {
        return `Model: ${this.model}`;
      }
    }
    
    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());  
    console.log(myCar.getModel());  


    function processValue(value: string | number) : number {
      if (typeof value === "string") {
            return value.length;
          } else {
            return value * 2;
          }
    }
    
    
     const string1 =   processValue("hello"); 
     const number1 =   processValue(10);
     console.log(string1)
     console.log(number1)


     interface Product {
      name: string;
      price: number;
    }
    
    function getMostExpensiveProduct(products: Product[]): Product | null {
      if (products.length === 0) {
        return null;
      }
    
      let mostProduct = products[0];
    
      for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostProduct.price) {
            mostProduct = products[i];
        }
      }
    
      return mostProduct;
    }
    
    
    const products = [
      { name: "Pen", price: 10 },
      { name: "Notebook", price: 25 },
      { name: "Bag", price: 50 }
    ];
    
    const product = getMostExpensiveProduct(products)
    console.log(product);
    
    
    enum Day {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
    }
    
    function getDayType(day: Day): string {
      if(day === Day.Sunday){
            return "weekend"
      }
      else{
            return "weekday"
      }
    }

    const weekEnd = (getDayType(Day.Sunday))
    const weekday = (getDayType(Day.Thursday))

    console.log(weekEnd)
    console.log(weekday)