function shoppingTime(memberId, money) {
    // Sepatu brand Stacattu seharga 1500000
    // Baju brand Zoro seharga 500000
    // Baju brand H&N seharga 250000
    // Sweater brand Uniklooh seharga 175000
    // Casing Handphone seharga 50000

    var final = {};
    var changeMoney = money;
    var listPurchased = [];
    items = [{
            barang: 'Sepatu Stacattu',
            harga: 1500000
        },
        {
            barang: 'Baju Zoro',
            harga: 500000
        },
        {
            barang: 'Baju H&N',
            harga: 250000
        },
        {
            barang: 'Sweater Uniklooh',
            harga: 175000
        },
        {
            barang: 'Casing Handphone',
            harga: 50000
        }
    ];

    //sorting mahal > murah
    for (i = 0; i < items.length; i++) {
        for (j = 0; j < items.length - 1; j++) {
            if (items[j].harga < items[j + 1].harga) {
                temp = items[j];
                items[j] = items[j + 1]
                items[j + 1] = temp
            }
        }
    }

    //cek harga
    for (i = 0; i < items.length; i++) {
        if (changeMoney >= items[i].harga) {
            changeMoney -= items[i].harga
            listPurchased.push(items[i].barang);
        }
    }

    //validasi
    if (memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya untuk member saja';
    } else if (money < items[items.length - 1].harga || money === undefined) {
        return 'mohon maaf uang tidak cukup'
    } else {
        final = {
            'memberId': memberId,
            'money': money,
            'listPurchased': listPurchased,
            'changeMoney': changeMoney
        }
    }

    return final;
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(); //space
// //{ memberId: '1820RzKrnWn08',
// // money: 2475000,
// // listPurchased:
// //  [ 'Sepatu Stacattu',
// //    'Baju Zoro',
// //    'Baju H&N',
// //    'Sweater Uniklooh',
// //    'Casing Handphone' ],
// // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(); //space
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(); //space
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(); //space
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja