//Diberikan function naikAngkot(listPenumpang) 
//yang akan menerima satu parameter berupa array dua dimensi. 
//Function akan me-return array of object.
//Diberikan sebuah rute, dari A - F.
//Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var a = 0;
    var b = 0;
    var biaya = 0;
    var final = [];

    for (i = 0; i < arrPenumpang.length; i++) {
        for (k = 0; k < rute.length; k++) {
            if (rute[k] === arrPenumpang[i][1]) {
                a = k;
                // console.log(a);
            } else if (rute[k] === arrPenumpang[i][2]) {
                b = k;
                // console.log(b);
            }
        }
        final.push({
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: (b - a) * 2000
        })
    }
    return final;
}

//TEST CASE
console.log(naikAngkot([
    ['Dimitri', 'B', 'F'],
    ['Icha', 'A', 'B']
]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]