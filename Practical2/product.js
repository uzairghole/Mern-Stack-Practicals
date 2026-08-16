const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Monitor", price: 300 },
  { name: "Cable", price: 15 },
  { name: "Headphones", price: 150 }
];

// 1. FILTER: Keep only products that cost more than $100
const expensiveProducts = products.filter(product => product.price > 100);

// 2. MAP: Add a 10% tax to the price of each filtered product
const productsWithTax = expensiveProducts.map(product => {
  return {
    name: product.name,
    price: product.price * 1.1 // Adds 10% tax
  };
});

// 3. REDUCE: Sum up the total price of these taxed products
const totalCost = productsWithTax.reduce((accumulator, product) => {
  return accumulator + product.price;
}, 0); // 0 is the initial value for the accumulator

// --- Method Chaining (The clean, functional approach) ---
const targetedTotal = products
  .filter(p => p.price > 100)
  .map(p => p.price * 1.1)
  .reduce((sum, price) => sum + price, 0);

// --- Output Results ---
console.log("1. Filtered (Price > 100):", expensiveProducts);
console.log("2. Mapped (with 10% Tax):", productsWithTax);
console.log("3. Reduced Total Cost:", totalCost);
console.log("Chained Execution Total:", targetedTotal)