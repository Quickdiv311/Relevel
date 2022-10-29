const verifyModule = require("./verify");

const action = () => {
    const promise = verifyModule.verify(1996);
    
    promise.then((msg) => {
        console.log(msg);
        throw new Error("Timeout");
        test();  
    },
       (msg) => 
       {
        console.log(msg);
       }
    ).catch((err) => {
        console.log(err);
    });
}

const test = () => {
    console.log("test")
}

action();