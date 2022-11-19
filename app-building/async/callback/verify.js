module.exports.verify = (id) => {
  const promise = new Promise((pass,fail) => {
       setTimeout(() => {
          console.log(id);
          pass();
       },1000);
  });

  return promise;
}