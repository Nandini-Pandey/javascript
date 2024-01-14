const account=12345 // can't change 
let accountemail="abbb@gmail.com"// no scope problem
var accountpassword="nn" // a lot of scope problem

// account=200 not allowed
console.log(account);
accountemail="hh@yahoo.com"
accountpassword="2222"

/*
prefer not to use var because of issue in block scope and functional scope
*/
let accountstate; // only declared so 
console.table([accountemail,accountpassword,accountstate]);
