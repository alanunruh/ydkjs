const ACCESSORY_PRICE = 9.99;

var bank_balance = 302.13;
var amount = 99.99;

// Can we afford the extra puchase?
if ( amount < bank_balance) {
  console.log( "I'll take the accessory!" );
  amount = amount + ACCESSORY_PRICE;
}

// Otherwise
else {
  console.log( "No, thanks." );
}