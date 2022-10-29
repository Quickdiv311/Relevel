

module.exports.verify = () => {
   return new Promise(pass => {
      setTimeout(() => pass('verified'),1000);
   })
}