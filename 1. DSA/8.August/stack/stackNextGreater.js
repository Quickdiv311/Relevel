class Node{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.tail = null;
    }

    addAtHead(d)
    {
        let newNode = new Node(d);
        if(this.head == null)
        {
            this.head = newNode;
            this.tail = newNode;
        }

        newNode.next = this.head;
        this.head = newNode;
    } 

    removeAtHead()
    {
        if(this.head == null) return;

        let temp = this.head.next;
        this.head.next = null;
        this.head = temp;

        if(this.head == null) this.tail = null;
    }

    getHead(){
        if(this.head == null) return undefined;

        return this.head.data;
    }

    isEmpty()
    {
        return this.head == null;
    }
}

class Stack
{
    constructor()
    {
        this.ll = new LinkedList();
    }

    addAtTop(d)
    {
        this.ll.addAtHead(d);
    }

    removeFromTop()
    {
        this.ll.removeAtHead();
    }

    getTopElement()
    {
        return this.ll.getHead();
    }

    isEmpty()
    {
        return this.ll.isEmpty();
    }
}

// function nextGreater(arr)
// {
//     let st = new Stack();
//     let output = Array(arr.length);
//     st.addAtTop(0);

//     for(let i=1;i<arr.length;i++)
//     {
//         while(!st.isEmpty() && arr[i] > arr[st.getTopElement()])
//         {
//           output[st.getTopElement()] = arr[i];
//           st.removeFromTop();
//         }
//         st.addAtTop(i);
//     }

//     while(!st.isEmpty())
//     {
//         output[st.getTopElement()] = -1;
//         st.removeFromTop();
//     }

//     return output;
// }


let a = [33,61,23,71,9,13,12,16];
// console.log(nextGreater(a));

function nextSmaller(arr)
{
    let st = new Stack();
    let output = Array(arr.length);

    st.addAtTop(0);
    
    for(let i=1;i<arr.length;i++)
    {
        while(!st.isEmpty() && arr[i] < arr[st.getTopElement()])
        {
            output[st.getTopElement()] = arr[i];
            st.removeFromTop();
        }
        st.addAtTop(i);
    }

    while(!st.isEmpty())
    {
        output[st.getTopElement()] = -1;
        st.removeFromTop();
    }

    return output;
}

console.log(nextSmaller(a));



