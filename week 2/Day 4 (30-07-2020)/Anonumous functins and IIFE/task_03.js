a=[34,1,26,7,9,66,21,19,5];
var sum = function(d){
    let i,s=0;
    for(i=0;i<d.length;i++)
    s+=d[i];
    return s;
};
console.log(sum(a));

var sum2 = (function(){
    let i,s=0;
    for(i=0;i<a.length;i++)
    s+=a[i];
    return s;
})();
console.log(sum2);
