while (numbOfCustomer > 0) {
  console.log( "How may I help you?" );

  // Help the customer

  numbOfCustomer = numbOfCustomer - 1;
}

// Versus:

do {
  console.log( "How may I help you?" );

  // Help the customer

  numbOfCustomer = numbOfCustomer - 1;
} while (numbOfCustomer > 0);


// For loop
for (var i = 0; i <= 9; i = i + 1) {
  console.log( i );
}

// 0 1 2 3 4 5 6 7 8 9