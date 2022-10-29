

module.exports.verify = (year) => {
   const promise = new Promise((pass,fail) => {

        if(year>1996) 
         pass("verified");
        else
         {
            fail("not verified");
         }
   });

   return promise;
}