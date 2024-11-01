const accountId = 23225
let accountEmail ="cruzer@google.com"
var accountPassword = "12345"
accountCity  = "Fargo"

let accountState;

// accountId = 2  //not allowed


accountEmail = "as@as.com"
accountPassword = "313131"
accountCity = "Nawalpur"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope

*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

