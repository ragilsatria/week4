function cariModus(arr) {
    var rep = 0;
    var repG = 0;
    var modus = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            //console.log(arr[i]+ '-' + arr[j]);
            if (arr[i] === arr[j] && i !== j) {
                rep++;
                if (rep > repG) {
                    repG = rep;
                    modus = i;
                }
            }
        }
    }

    if (modus === 0) {
        return -1;
    }

    var sNum = 0;
    for (var k = 0; k < arr.length; k++) {
        sNum += arr[k];
        if (sNum / arr.length === arr[k]) {
            return -1;
        }
    }
    return arr[modus];

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1