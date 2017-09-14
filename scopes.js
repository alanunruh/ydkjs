function one() {
  // This 'a' only belongs to the 'one()' function
  var a = 1;
  console.log( a );
}

function two() {
  // This 'a' only belongs to the 'two()' function
  var a = 2;
  console.log( a );
}

one();    // 1
two();    // 2


// Nested Scope

function outer() {
  var a = 1;

  function inner() {
    var b = 2;

    // We can access both 'a' and 'b' here
    console.log( a + b);    // 3
  }

  inner();

  // We can only access 'a' here
  console.log( a );    // 1 
}

outer();