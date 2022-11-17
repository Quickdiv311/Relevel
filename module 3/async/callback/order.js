const verifyId = require("./verify");

function order()
{
  console.log("Place order");
}

function verify()
{
   let promise = verifyId.verify("verify 123");
   promise.then(() => {pay()}, () => {});
}

function pay()
{
  console.log("pay");
}

order();
verify();