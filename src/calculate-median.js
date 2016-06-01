function calculate_median(arr) {
  var newarr = new Array();
    for(var i=1;i<=arr.length;i++)
    {
        if(i % 2 == 0)
            newarr.push(arr[i - 1]);
    }
    if(newarr.length % 2 == 1)
    {
        return newarr[Math.floor(newarr.length/2)];
    }
    if(newarr.length % 2 == 0)
    {
        return (newarr[newarr.length/2-1]+newarr[newarr.length/2])/2;
    }
}

module.exports = calculate_median;
