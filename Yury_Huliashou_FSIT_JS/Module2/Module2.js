alert("Task 2");
let arr = ['age', 'name', 'gender', 'profession', 'city', 'relationship',
    'favorite season of the year'];
let arr1 = [];
while(confirm('Create object?')){
let obj = new Object();
for (let key of arr){
    let str = 'Enter ' + key;
    obj[key] = prompt(str, key);}
arr1.push(obj);
}

while(confirm('See array of object?'))
for (let item of arr1){
    let str = '';
    for (let key in item)
        str += item[key] + '\n'
    alert(str);
}

alert("Task 3");
let obj = {
    5: 'сидит',
    3: 'знать',
    0: 'каждый',
    4: 'где',
    1: 'охотник',
    6: 'фазан',
    2: 'желает',
}
let colors = ['красный', 'оранжевый', 'желтый', 'зеленый', 'голубой',
    'синий', 'фиолетовый'];
let strOut = '';
for (let item = 0; item < colors.length; item++)
    for (let key in obj){
        //alert(key);
    if (item == key)
        strOut +=obj[key] + ' ';}
alert(strOut);

alert("Task 4");
let cat = {
    name: 'Matroskin',
    age: 5,
    gender: 'male',
    specifications: {
        color: 'white',
      hasTail: true,
      hasPaws: true,
      hasDocuments: false,
      vaccinations: false,
      dimensions: {
         weight: 8,
         height: 15,
         width: 20,
         length: 50
      },
      supply: ['whiskas', 'kitekat', 'friskies', 'felix']
    }
  }
  let str = '';
  let anyCat = {};
  let arrCats = [];

strObj(cat);
alert(str);

function strObj(obj)
{
    if ((obj instanceof Object)&(!Array.isArray(obj))){ 
        
        for (let key in obj){
            str +=key + ': ';
            strObj (obj[key]);
        }
    } else {str += obj + '\n';}
}

cloneObj(cat, anyCat);

anyCat.specifications.dimensions.weight = 1; 
anyCat.specifications.supply[1] = 'blabla';
str = '';
strObj(anyCat);
alert(str);
alert(cat.specifications.dimensions.weight + ' ' + cat.specifications.supply[1]);

while(confirm('Create new cat?')){
    let newCat = {};
    creObj(cat, newCat);
    arrCats.push(newCat);
}

while(confirm('See array of cats?'))
for (let item of arrCats){
    str = '';
    strObj(item);
    alert(str);
}

function cloneObj(orig, clone)
{
    for (let key in orig){
        if ((orig[key] instanceof Object)&(!Array.isArray(orig[key]))){
            clone[key] = {};
            let anyClone = clone[key];
            let anyOrig = orig[key];
            cloneObj(anyOrig, anyClone);
            continue;
        }
        if (Array.isArray(orig[key])){
            let arr = [];
            for (let i of orig[key])
                arr.push(i);
            clone[key] = arr;
            continue;
        }
        clone[key] = orig[key];    
    }
}

function creObj(orig, clone)
{    
    for (let key in orig){
        let mes = 'Enter ' + key;
        if ((orig[key] instanceof Object)&(!Array.isArray(orig[key]))){
            clone[key] = {};
            let anyClone = clone[key];
            let anyOrig = orig[key];
            creObj(anyOrig, anyClone);
            continue;
        }
        if (Array.isArray(orig[key])){
            let arr = [];            
            for (let i of orig[key]){
               mes = 'Like a ' + i +'?';
               if (confirm(mes))
                    arr.push(i);
            }
            clone[key] = arr;
            continue;
        }
        if (typeof(orig[key]) === 'boolean'){
            mes = 'Have a ' + key + '?';
            clone[key] = confirm(mes);
            continue;
        }
        clone[key] = prompt(mes, orig[key]);    
    }
}