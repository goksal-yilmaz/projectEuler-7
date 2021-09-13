/* İlk altı asal sayıyı listeleyerek: 2, 3, 5, 7, 11 ve 13, 6. asal sayının 13 olduğunu görebiliriz. 10001. asal sayı kaçtır? */


function nthPrimes() {
    let primes = [2];
    let num = 3;

    while(primes.length < 10001){
        let bool = true;
        for (let i = 0; i < primes.length; i++){
            if(num % primes[i] === 0){
                bool = false;
            }
        }
        if(bool){
            primes.push(num);
        }
        num+=2;
    }
    return primes[10000];
}
const start = Date.now();
console.log("Result :", nthPrimes());
const end = Date.now();
console.log("Hesaplama Süresi :", (end - start)/1000);
