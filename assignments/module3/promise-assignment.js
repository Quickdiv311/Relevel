function alarm(name)
{
    const promise = new Promise((ring, silent) => {
           console.log("alarm about to ring");
           setTimeout(() => {
               ring("alarm rings");    
           }, 500);
    });

    promise.then((m) => {console.log(m); wakeup(name)}).catch(e => console.log("alarm error"));
}

function wakeup(name)
{
    console.log(`wake up ${name}`);
}

alarm('div');