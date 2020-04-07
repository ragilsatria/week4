function fpb(angka1, angka2) {
  var bagi = 0;
  var cek = false;

  if (angka1 > angka2){
    bagi = angka1;
  }else {
    bagi = angka2;
  }

  while(!cek){ 
    if (angka1 % bagi === 0 && angka2 % bagi === 0){
      return bagi;
    }
    // console.log(angka1%bagi, angka2%bagi);
    bagi--;
  }
}

  // TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1