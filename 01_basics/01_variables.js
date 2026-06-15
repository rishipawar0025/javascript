const accountId = 12345
let accountEmail = "rishi@gmail.com"
var accountPassword = "0987"
   accountCity = "Delhi"
let accountState;
//    accountId = 242 not allowed
 
accountEmail = "riri@gmail.com"
accountPassword = "532"
accountCity = "Pune"

   console.log(accountId);
   console.table([accountId, accountPassword, accountCity,accountEmail,accountState])
   
/*/
 prefer not to use var ( because of issue in block and functional scope)
*/
