a=[34,1,26,7,9,66,21,19,5];
var odd = function(d){  //anonymous function
    let i,o=[];
    for(i=0;i<d.length;i++)
    if(d[i]%2===1)
    o.push(d[i]);
    return o;
};
console.log(odd(a));

var odd2 = (function(){   //IIFE
    let i,o=[];
    for(i=0;i<a.length;i++)
    if(a[i]%2===1)
    o.push(a[i]);
    return o;
})();
console.log(odd2);
