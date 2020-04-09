function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnopqrstuvwxyz';
    var sTemp = [];
    var kTemp = '';

    //konversi string to array
    for (i = 0; i < kata.length; i++) {
        sTemp[i] = kata[i]
    }

    //mengubah data 
    for (i = 0; i < sTemp.length; i++) {
        for (j = 0; j < kamus.length; j++) {

            if (sTemp[i] === kamus[j]) {
                sTemp[i] = kamus[j + 1];
                break;
            } else if (sTemp[i] === 'z') {
                sTemp[i] = 'a';
            }
        }
    }

    //konversi array to string
    for (i = 0; i < sTemp.length; i++) {
        kTemp += sTemp[i];
    }

    return kTemp;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu