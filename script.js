// Product 1
const name1 = "Wireless Headphones";
const basePrice1 = 2499;
const discountPercent1 = 20;
const taxRate1 = 18;
const stockStatus1 = "in_stock";

// Product 2
const name2 = "Bluetooth Speaker";
const basePrice2 = 1299;
const discountPercent2 = 15;
const taxRate2 = 18;
const stockStatus2 = "limited";

// Product 3
const name3 = "USB-C Cable";
const basePrice3 = 399;
const discountPercent3 = 10;
const taxRate3 = 12;
const stockStatus3 = "in_stock";

// Product 4
const name4 = "Smart Watch";
const basePrice4 = 4999;
const discountPercent4 = 30;
const taxRate4 = 18;
const stockStatus4 = "out_of_stock";

// Discounted price 
function calculateDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

// Tax amount
function calculateTax(price, taxRate) {
  return (price * taxRate) / 100;
}

// Final price
function calculateFinalPrice(price, discount, taxRate) {
  const discounted = calculateDiscountedPrice(price, discount);
  const tax = calculateTax(discounted, taxRate);
  return discounted + tax;
}

//Shipping 
function isFreeShipping(finalPrice) {
  if (finalPrice >= 500) {
    return "Free Shipping";
  } else {
    return "Shipping: Rs.49";
  }
}

// Stock message
function getStockMessage(status) {
  switch (status) {
    case "in_stock":
      return "In Stock";
    case "limited":
      return "Limited Stock";
    case "out_of_stock":
      return "Out of Stock";
    default:
      return "Unknown Stock Status";
  }
}

//  prints price summary 
function printPriceSummary(name, basePrice, discountPercent, taxRate, stockStatus) {
  const discountedPrice = calculateDiscountedPrice(basePrice, discountPercent);
  const taxAmount = calculateTax(discountedPrice, taxRate);
  const finalPrice = calculateFinalPrice(basePrice, discountPercent, taxRate);
  const shipping = isFreeShipping(finalPrice);
  const stockMessage = getStockMessage(stockStatus);

  console.log("=================================");
  console.log("          PRICE SUMMARY");
  console.log("=================================");
  console.log("Product          : " + name);
  console.log("Base Price       : Rs." + basePrice.toFixed(2));
  console.log("Discount         : " + discountPercent + "%");
  console.log("Discounted Price : Rs." + discountedPrice.toFixed(2));
  console.log("Tax (" + taxRate + "%)       : Rs." + taxAmount.toFixed(2));
  console.log("Final Price      : Rs." + finalPrice.toFixed(2));
  console.log("Shipping         : " + shipping);
  console.log("Stock Status     : " + stockMessage);
  console.log("=================================\n");
}

// Print the summary for all 4 products 
printPriceSummary(name1, basePrice1, discountPercent1, taxRate1, stockStatus1);
printPriceSummary(name2, basePrice2, discountPercent2, taxRate2, stockStatus2);
printPriceSummary(name3, basePrice3, discountPercent3, taxRate3, stockStatus3);
printPriceSummary(name4, basePrice4, discountPercent4, taxRate4, stockStatus4);