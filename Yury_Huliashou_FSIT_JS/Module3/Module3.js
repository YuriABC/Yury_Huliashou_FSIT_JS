alert("Task 1");
let type;
let item = 0;
const types = ['circle', 'rectangle', 'triangle'];

figure();
figure();
figure();

function figure(){
do{
    if (item === 3)
        item = 0;
    type = types[item];
    item++;
}
while (!confirm(`Calculate square of ${type}?`))
alert(square(type));
}

function enter(mes){
    let i;
    do{
    i =  +prompt('Enter '+ mes);}
    while(!((typeof(i) === 'number')&(!isNaN(i))&(i != 0)))
    return i;
}

function square(type){
    if (type === 'circle'){
        return circ(enter('radius'));
    }
    if (type === 'rectangle'){
        let w = enter('widht');
        let h = enter('height');
        return rect(w, h);
    }
    if (type === 'triangle'){
        let a = enter('1st side');
        let b = enter('2nd side');
        let c = enter('3rd side');
        return triang(a, b, c);
    }
}

function circ(r){
    return (Math.pow(r, 2)*Math.PI);
}
function rect(w, h){
    return (w*h);
}
function triang(a, b, c){
    if ((a+b < c)||(a+c < b)||(b+c < a))
        return ('triangle not exist');
    p = (a + b + c)/2;
    return (Math.sqrt(p * (p-a) * (p-b) * (p-c)));
}



alert("Task 2");
let str = prompt('Является ли палиндромом?');
let i = 0;

if (poly(str, i))
    alert('Yes');
    else alert('No');

function poly(str, i){
if ((str.substr(i, 1) === str.substr(str.length - 1 - i, 1))){
    //console.log(i);
    if (i === Math.floor(str.length/2 - 1))
        return true;
    i++;
    if (poly(str, i))
        return true;
    else return false;
    }
else return false;
}
  


alert("Task 3");
let a = 0;
let b = 1;
let n = 5;
let i = 0;
let arrFib = [a, b];

fib(a, b, n, i);
alert (arrFib); arrFib = [a, b];
fib(a, b, 10, i);
alert (arrFib); arrFib = [a, b];
fib(a, b, 20, i);
alert (arrFib); arrFib = [a, b];
fib(a, b, 30, i);
alert (arrFib);

function fib(a, b, n, i){
    
    let c = 0;
    if (i < n-2){
        c = a + b;
        a = b;
        b = c;
        i++;
        arrFib.push(c);
        fib(a, b, n, i);
    }
   
}