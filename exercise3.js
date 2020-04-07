function cariMedian(arr) {
    var temp = 0;
    var pem = arr.length/2;

    //sortir ascending
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length-1; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }        
    }
    
    if (arr.length % 2 === 0){
        return (arr[pem-1] + arr[pem]) / 2;;
    }
    else {
        return arr[Math.floor(pem)];
    }

}
  
  // TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5