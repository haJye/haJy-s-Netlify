//Swap with algorithm
let a=-5;
let b=6;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);
//Swap function
let c=10;
let d=11;
console.log([c,d] = [d,c]);
//3 variable swap
let one = 15;
let two = 16;
let temp = one;
one=two;
two=temp;
console.log(one, two);
console.log();
//Ders 1
let price = 530.90;
let manat=price.slice(0, 3);
let qepik=price.slice(4, 6);
console.log(manat+" Manat "+qepik+" qəpik");
console.log();
//Ders 2 
let salary =1000;
price=Number(salary);
let fee = ((salary*13/100));
salary=salary-fee;
console.log(salary);
