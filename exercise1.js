function angkaPrima(angka) {
  // console.log(angka); 
  if (angka < 2){
    return false;
  } 
 
  for (i = 2; i <= (angka/2); i++){
    if (angka % i === 0){
      // console.log ('ini  ' + i);
      // console.log (angka + ' % ' + i + " = " + angka%i);
      return false;
    }
  }
  
  return true;
}
  
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1));