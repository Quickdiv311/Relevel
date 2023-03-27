class Node
{
    constructor(k,v)
    {
        this.key = k;
        this.value = v;
        this.next = null;
    }
}

class Hashmap
{
    constructor()
    {
        this.curSize = 2;
        this.arr = [];
        this.lambda = 0.5;
        this.elements = 0;

        for(let i=0;i<this.curSize;i++)
        {
            this.arr.push(null);
        }
    }
     
    hash(key)
    {
        let ans = 0;
        let c = 101;
        let m = this.curSize;
        let x = 1;
        for(let i=0;i<key.length;i++)
        {
            ans =  ((ans%m) + (key.charCodeAt(i)*x)%m) %m;
            x = x *c; 
        }
        return ans;
    }

    insert(k,v)
    {
        let bucketIndex = this.hash(k);

        if(this.search(k) !== undefined)
        {
            let temp = this.arr[bucketIndex];
            while(temp && temp.key !== k)
            {
                temp = temp.next;
            }
            temp.value = v;
            return;
        }

        let newNode = new Node(k,v);
        newNode.next = this.arr[bucketIndex];
        this.arr[bucketIndex] = newNode;
        this.elements++;
        let curLoadFactor = this.elements/this.curSize;
        if(curLoadFactor > this.lambda)
        {
            this.rehash();
        }
    }

    rehash()
    {
        this.elements = 0;
        this.curSize *=2;
        let oldArry = this.arr;
        this.arr= [];

        for(let i=0;i<this.curSize;i++)
        {
            this.arr.push(null);
        }

        for(let i=0;i<oldArry.length;i++)
        {
            let temp = oldArry[i];
            while(temp)
            {
                this.insert(temp.key, temp.value);
                temp = temp.next;
            }
        }
    }

    search(k)
    {
        let bucketIndex = this.hash(k);
        let temp = this.arr[bucketIndex];

        while(temp)
        {
            if(temp.key == k) return temp.value;

            temp = temp.next;
        }

        return undefined;
    }

    display()
    {
        this.arr.forEach(i => console.log(i));
    }
} 

let hm = new Hashmap();
hm.insert("divyansh",1);
hm.insert("sandeepan",2);
hm.display();
