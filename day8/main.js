function maxProfit(prices) {
    let maxPrice = Math.max(...prices);
    let maxProfit = null;

    prices.map((price) => {
        if (maxPrice > price) {
            maxPrice = price;
        }

        if (price > maxPrice) {
            const profit = price - maxPrice;

            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    })
  
    return maxProfit || -1;
}

console.log(maxProfit([39, 18, 29, 25, 34, 32, 5])); // 16
console.log(maxProfit([10, 20, 30, 40, 50, 60, 70])); // 60
console.log(maxProfit([18, 15, 12, 11, 9, 7])); // -1
console.log(maxProfit([3, 3, 3, 3, 3])); // -1
