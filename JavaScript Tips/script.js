console.log('110' + 70); //11070 - String
console.log('990' + 45 + 9 + '75'); //99045975 - String

/*
If any of the value is of string type and it's added to other values
JS will first automatically convert the  other values to a string 
And then they are altogether concatenated giving an entire string as output
*/
const javascript = 'fun';
console.log(`JavaScript is indeed ${javascript}`);

const haveMoney = true;
if(haveMoney){
    console.log(`Buy a Lamborghini !!... And that's how you should live!!`);
} else{
    console.log(`Go by train ;(`);
}