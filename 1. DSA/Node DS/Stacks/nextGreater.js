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

function nextGreater(a)
{
    let st = new Stack();
    let result = new Array(a.length);
    st.push(0);

    for(let i=1;i<a.length;i++)
    {
        while(!st.isEmpty() && a[i] > a[st.top()])
        {
            result[st.top()] = a[i];
            st.pop();
        }
        st.push(i);
    }

    while(!st.isEmpty())
    {
        result[st.top()] = -1;
        st.pop();
    }
    return result;
}

function nextSmaller(a)
{
    let st = new Stack();
    let result = new Array(a.length);
    st.push(0);

    for(let i=1;i<a.length;i++)
    {
        while(!st.isEmpty() && a[st.top()] > a[i])
        {
            result[st.top()] = i;
            st.pop(); 
        }
        st.push(i);
    }
    while(!st.isEmpty())
    {
        result[st.top()] = a.length;
        st.pop();
    }
    return result;
}

console.log(nextSmaller([3,10,7,4,6,3,8,12]));