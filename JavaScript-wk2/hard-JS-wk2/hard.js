//Hard

const massTom = 8;
const heighTom = 9;
const massJerry = 45;
const heightJerry = 10;

const BMITom = massTom / heighTom ** 2;
const BMIJerry = massJerry / (heightJerry * heightJerry);
const TomHigherBMI = BMITom > BMIJerry;

if(BMITom > BMIJerry){
    // const BMITom = true
    console.log (`Tom's BMI (${BMITom}) is higher than Jerry's (${BMIJerry})!`);
console.log(true);

}else{
    // const BMIJerry = false
    console.log(`Jerry's BMI (${BMIJerry}) is higher than Tom's (${BMITom})!`);
console.log(true);
}
