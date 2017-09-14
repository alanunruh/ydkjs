function printAmount() {
  console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount();    // "99.99"

amount = amount * 2;

printAmount();    // "199.98"


// Function that takes an argument

function printAmount(amt) {
  console.log( amt.toFixed( 2 ) );
}

function formatAmount() {
  return "$" + amount.toFixed( 2 );
}

var amount = 99.99;

printAmount( amount * 2 );    // "199.98"

amount = formatAmount();
console.log( amount );    // "$99.99"


// Functions into a Collection

const TAX_RATE = 0.08;

function calculateFinalPuchaseAmount(amt) {
  // Calculate the new amount with the tax
  amt = amt + (amt * TAX_RATE);

  // Return the new amount
  return amt;
}

var amount = 99.99;

amount = calculateFinalPuchaseAmount( amount );

console.log( amount.toFixed( 2 ) );     // "$107.99"