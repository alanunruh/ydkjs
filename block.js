var amount = 99.99;

// a general block
{
  amount = amount * 2;
  console.log( amount );    // 199.98
}


// is amount big enough?
if (amount > 10) {
  amount = amount * 2;
  console.log( amount );    // 199.98
}