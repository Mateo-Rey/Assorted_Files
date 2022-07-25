function findsqrroot (val) {
   let num = val * val
   return num;
}

console.log(findsqrroot(5))
 function sqrt(arr, n)  {
        if (n <=0) {
            return 1;
        } else {
            return sqrt(arr,n-1) / arr[n -1]
        }
      }

