const verifyModule = require('./async-verify');

async function action() 
{
   const result = await verifyModule.verify();
   console.log(result);
   console.log("end");
}

action();