function checkAB(num) {
    var arg = [];
    var brg = [];
    var rg = [];

    for (i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            arg.push(i);
        } else if (num[i] === 'b') {
            brg.push(i);
        }
    }

    for (i = 0; i < arg.length; i++) {
        for (j = 0; j < brg.length; j++) {
            if (arg[i] > brg[i]) {
                rg.push(arg[i] - brg[j]);
            } else {
                rg.push(brg[j] - arg[i]);
            }
        }
    }


    for (i = 0; i < rg.length; i++) {
        if (rg[i] >= 3) {
            return true;
        }
    }
    return false;
}

/**
 * function tersebut mengembalikan nilai true jika di dalam string tersebut 
 * terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. 
 * Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.
 **/

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false