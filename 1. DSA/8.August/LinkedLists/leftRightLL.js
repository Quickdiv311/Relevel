
 var reverseBetween = function(head, left, right) {
    if(left == right) return head;
     
    let c = 1;
    let cur = head;
    let prev;
    let next;
     let preLeft;
     let leftpt;
    
    while(c < left-1)
        {
            cur = cur.next;
            c++;
         }
         
         if(left>1)
         {
         prev = cur;
         preLeft = prev;
         cur = cur.next;
         c++; 
         }
     
     leftPt = cur;
     next = cur.next;
     prev = cur;
     cur = next;
     c++;
     
     while(c < right)
         {
           next = cur.next;
           cur.next = prev;
           prev = cur;
           cur = next;
             c++;
         }
     
     leftPt.next = cur.next;
     cur.next = prev;
     
     if(left>1)
     {
          preLeft.next = cur; 
         return head;
     }    
     
     return cur;
 };