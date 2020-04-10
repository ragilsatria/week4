/**
 * Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array
 * tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . 
 * Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. 
 * Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. 
 * Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang 
 * maka age akan berisi 'Invalid Birth Year'
 */

function changeMe(arr) {
    var data = ['firstName', 'lastName', 'gender', 'age'];
    var temp = {};

    for (var i = 0; i < arr.length; i++) {
        temp = {};

        for (var x = 0; x < data.length; x++) {
            temp[data[x]] = data[x];
        }

        for (var j = 0; j < arr[i].length; j++) {
            for (var key in temp) {
                temp[data[j]] = arr[i][j];

                if (key === 'age') {
                    if (temp.age > 2020 || isNaN(temp.age) || temp.age == '') {
                        temp.age = 'Invalid Birth Year';
                    } else {
                        temp.age = 2020 - arr[i][j];
                    }
                }
            }
        }
        console.log(`${i+1}. ${arr[i][0]} ${arr[i][1]}`)
        console.log(temp);
    }
}



// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1983],
    ['Robert', 'Downey', 'Male', ]
]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""