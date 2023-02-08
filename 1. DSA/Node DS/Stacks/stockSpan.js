class Stack
{
    #arr;
    constructor()
    {
      this.#arr = [];
    }

    push(d)
    {
        this.#arr.push(d);
    }

    pop()
    {
        this.#arr.pop();
    }

    top()
    {
        return this.#arr[this.#arr.length-1];
    }

    isEmpty()
    {
        return this.#arr.length==0;
    }
}

function stock(a)
{
    a.reverse();
    let st = new Stack();
    let result = new Array(a.length);
    st.push(0);

    for(let i=1;i<a.length;i++)
    {
        while(!st.isEmpty() &&  a[st.top()] < a[i])
        {
        result[st.top()] = i-st.top();
        st.pop();
        }
        st.push(i);
    }

    while(!st.isEmpty())
    {
        result[st.top()] = 1;
        st.pop();
    }
    return result.reverse();
}

let a = [100,80,60,70,60,75,85];

console.log(stock(a));