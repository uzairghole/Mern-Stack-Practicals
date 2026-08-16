function calTotal(price,tax){
    const total = price+tax;
    return total;
}
const finalPrice = calTotal(100,15);
console.log(finalPrice);