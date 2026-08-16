const products = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shirt", price: 25, category: "Clothing" },
  { name: "Headphones", price: 150, category: "Electronics" },
  { name: "Shoes", price: 80, category: "Clothing" },
  { name: "Keyboard", price: 50, category: "Electronics" },
];

const electronics = products.filter(
  (product) => product.category == "Electronics",
);
console.log("Electronics Items:", electronics);

const electronicsPrices = electronics.map((product) => product.price);
console.log("Electronics Prices:", electronicsPrices);

const totalElectronicsCost = electronicsPrices.reduce(
  (accumulator, currentPrice) => {
    return accumulator + currentPrice;
  },
  0,
);
console.log("Total Cost of Electronics:", totalElectronicsCost);

const totalCostChained = products.filter((item) => item.category === "Electronics")
  .map((item) => item.price)
  .reduce((sum, price) => sum + price, 0);

console.log("Total Cost (Chained pipeline):", totalCostChained);