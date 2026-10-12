let cartItems = [
      { name: "Notebook", price: 5.50, qty: 2 }, //list
      { name: "Pen", price: 1.25, qty: 4 },
       { name: "Sticker's", price: 3.00, qty: 1 }
    ];

    function calculateTotal(items) { //all calcs
    let subtotal = 0;
        for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty;
      }
      return subtotal;
    }

       let totalCost = calculateTotal(cartItems);

    function applyDiscount(total) {
    if (total > 15) {
     return total * 0.9;
        } else {
    return total;
       }
    }
//get finadl price
    let finalPrice = applyDiscount(totalCost);
    console.log("Final Price: $" + finalPrice.toFixed(2));