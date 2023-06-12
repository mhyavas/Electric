goog.provide('missionary.impl.Heap');
missionary.impl.Heap.create = (function missionary$impl$Heap$create(cap){
var G__39983 = (new Array((cap + (1))));
(G__39983[(0)] = (0));

return G__39983;
});
missionary.impl.Heap.size = (function missionary$impl$Heap$size(heap){
return (heap[(0)]);
});
missionary.impl.Heap.enqueue = (function missionary$impl$Heap$enqueue(heap,i){
var j = ((heap[(0)]) + (1));
(heap[(0)] = j);

(heap[j] = i);

var j__$1 = j;
while(true){
if(((1) === j__$1)){
return null;
} else {
var p = (j__$1 >> (1));
var x = (heap[j__$1]);
var y = (heap[p]);
if((y < x)){
return null;
} else {
(heap[p] = x);

(heap[j__$1] = y);

var G__39989 = p;
j__$1 = G__39989;
continue;
}
}
break;
}
});
missionary.impl.Heap.dequeue = (function missionary$impl$Heap$dequeue(heap){
var s = (heap[(0)]);
var i = (heap[(1)]);
(heap[(0)] = (s - (1)));

(heap[(1)] = (heap[s]));

var j_39990 = (1);
while(true){
var l_39991 = (j_39990 << (1));
if((l_39991 < s)){
var x_39992 = (heap[j_39990]);
var y_39993 = (heap[l_39991]);
var r_39994 = (l_39991 + (1));
if((r_39994 < s)){
var z_39996 = (heap[r_39994]);
if((y_39993 < z_39996)){
if((z_39996 < x_39992)){
(heap[r_39994] = x_39992);

(heap[j_39990] = z_39996);

var G__39997 = r_39994;
j_39990 = G__39997;
continue;
} else {
}
} else {
if((y_39993 < x_39992)){
(heap[l_39991] = x_39992);

(heap[j_39990] = y_39993);

var G__39998 = l_39991;
j_39990 = G__39998;
continue;
} else {
}
}
} else {
if((y_39993 < x_39992)){
(heap[l_39991] = x_39992);

(heap[j_39990] = y_39993);

var G__39999 = l_39991;
j_39990 = G__39999;
continue;
} else {
}
}
} else {
}
break;
}

return i;
});

//# sourceMappingURL=missionary.impl.Heap.js.map
