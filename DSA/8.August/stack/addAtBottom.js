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
    }

    addAtHead(d)
    {
        let newNode = new Node(d);
        if(this.head == null)
        {
            this.head = newNode;
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
    }

    getHead(){
        if(this.head == null) return undefined;

        return this.head.data;
    }

    isEmpty()
    {
        return this.head == null;
    }

    display()
    {
        let temp = this.head;
        let result = [];

        while(temp != null)
        {
            result.push(temp.data);
            temp = temp.next;
        }

        return result;
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

    display()
    {
        return this.ll.display();
    }
}

let st = new Stack();
let st2 = new Stack();
st.addAtTop(2);
st.addAtTop(3);
st.addAtTop(4);
st.addAtTop(5);

    while(!st.isEmpty())
    {
        let top = st.getTopElement();
        st2.addAtTop(top);
        st.removeFromTop();
    }

    st.addAtTop(12);

    while(!st2.isEmpty())
    {
        let top = st2.getTopElement();
        st.addAtTop(top);
        st2.removeFromTop();
    }

    

