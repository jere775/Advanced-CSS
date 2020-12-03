// var coins = [1,2,5]
// var amount = 11

// function change (coins, num, amount){
//     if(amount === 0) return 1;
//     if (num < 0 && amount > 0)return 0;
//     if (amount < 0) return 0;
// return change (coins,num,amount-coins[num]) + change(coins,num -1,amount)
// }

// function rc (coins, amount){
//     var cent =[];
//     for (var i=0; i <= amount; i++){
//         cent[i]=0;
//     }
// cent[0] =1;
// for (var i = 0; i < coins.length; i++){
// var c = coins[i];
// for(var highAmount = c; highAmount <= amount; highAmount++){
// var remainder = highAmount - c;
// cent[highAmount] += cent[remainder];
// }
// }
//     return cent[amount];
// }

// console.log(change(coins, coins.length - 1 ,amount))
// console.log(rc(coins,amount))


// array of coin in my parameter function veryHard(arra, amount){}
// for loop iterate through each on ebut count backwards or (decreent)
// method that can sort my array
// conditional ( taking the largest coin subtracting from the amount)
// if my first conditional is less than 0 move on to next coin to the next coin
//if coin goes into
