let sellingPrice = 199;
let listingPrice = 799;

let discount = parseInt(((listingPrice - sellingPrice) / listingPrice) * 100);

discountToBeDisplayed = Math.round(discount);

let result = sellingPrice > listingPrice;

console.log("result is of type " + typeof result);

console.log(`Selling Price > Listing Price ${result}`);