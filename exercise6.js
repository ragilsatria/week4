function digitPerkalianMinimum(angka) {
    var faktor = [];

    //cari faktor masukin array
    for (var i = 0; i <= angka; i++) {
        for (var j = 0; j <= angka; j++) {
            if (i * j === angka) {
                faktor.push(i.toString() + j.toString());
            }
        }
    }

    var temp = faktor[0].length;

    for (var i = 0; i < faktor.length - 1; i++) {
        if (faktor[i].length < faktor[i + 1].length) {
            temp = faktor[i].length
        }
    }
    return temp;
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2