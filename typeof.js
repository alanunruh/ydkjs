var a;
typeof a;     // "undefinded"

a = "hello world";
typeof a;     //"string"

a = 42;
typeof a;     //"number"

a = true;
typeof a;     // "boolean"

a = null;
typeof a;     // "object" -- weird, bug

a = undefined;
typeof a;     // "undefined"

a = { b: "c" };
typeof a;     // "object"