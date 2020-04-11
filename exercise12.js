//Function akan menerima array yang berisikan object pembeli 
//(nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). 
//Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli 
//maka pembeli batal untuk membeli barang tersebut.
//
//Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek 
//barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, 
//sisa stock barang dan total pemasukan untuk barang tersebut

function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    var obj = {};
    var final = [];
    var total = 0;

    for (var i = 0; i < listBarang.length; i++) {
        obj = {
            product: listBarang[i][0],
            shoppers: [],
            leftOver: listBarang[i][2],
            totalProfit: 0
        }

        for (var j = 0; j < shoppers.length; j++) {
            if (shoppers[j].product === obj.product) {
                if (obj.leftOver >= shoppers[j].amount) {
                    obj.shoppers.push(shoppers[j].name);
                    obj.leftOver -= shoppers[j].amount;
                    total = shoppers[j].amount * listBarang[i][1]
                    obj.totalProfit += total
                }
            }
        }

        final.push(obj);
    }

    if (shoppers < 1) {
        final = [];
        return final;
    } else {
        return final;
    }
}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));

// //[ { product: 'Sepatu Stacattu',
// //   shoppers: [ 'Windi', 'Vanessa' ],
// //   leftOver: 5,
// //   totalProfit: 7500000 },
// // { product: 'Baju Zoro',
// //   shoppers: [],
// //   leftOver: 2,
// //   totalProfit: 0 },
// // { product: 'Sweater Uniklooh',
// //   shoppers: [],
// //   leftOver: 1,
// //   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));

// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Naiki',
    amount: 5
}]));

// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]

console.log(countProfit([])); //[]