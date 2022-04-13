
^^^^^^^^^^^^^^^^^^^^^переменные^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

 let n1 = 10,
     n2 = 15,
     a = 5
     b = 'Kate'
 console.log(n1)
 console.log(n2)
 console.log(a)
 console.log(b)

=========================================

^^^^^^^^^^^^^^^^^^^^тип_данных^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let num = typeof  b
 let num2 = typeof n1
 console.log(num)
 console.log(num2)

=========================================

//из цикла моказывает только переменную var

for (let ii = 0; ii<10; ii++) {
    var t1 = 10;
    let t2 = 50;
    console.log(ii);
 }
    console.log(t1)
    console.log(t2)

======================================

^^^^^^^^^^^^^^^^^^^конкантенация^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Конкатена́ция (лат. concatenatio «присоединение цепями; сцепле́ние») — операция склеивания объектов линейной структуры, обычно строк. Например, конкатенация слов «микро» и «мир» даст слово «микромир».

let a = 55;
 let b = 'Kate';
 let c = '100';
 console.log(b + a + c);



let a = 55;
 let b = 'Kate';
 let c = '100';
 let n = 4;
 let s = String(a)+ n;
 console.log(s);
 console.log(typeof(s));

let a = 55;                     //преведение типов parseInt
 let b = 'Kate';
 let c = '100';
 let n = 4;
 let s = parseInt(a + c);
 let s1 = s + n;
 console.log(s1);
 console.log(typeof(s1));            

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^true/false^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

	true = 1
	false = 0

let bool_true = true;
 let bool_false = false;

 console.log(bool_true);
 console.log(bool_false);
 console.log(typeof(bool_true));

 let b_1 = bool_true + bool_false;
 console.log(b_1);
 console.log(typeof(b_1));






let bool_true = true;                     //приводим тип boolean к number
 let bool_false = false;                    // математические операции с типом boolean
                                                // ghb ltktybb = infynity
 let bool_true1 = +bool_true;
 let bool_false1 = +bool_false;

 let a = bool_true1 + bool_true1;

 console.log(bool_true);
 console.log(bool_false);
 console.log(typeof(bool_true));

 let b_1 = bool_true + bool_false;
 console.log(b_1);
 console.log(typeof(b_1));

 console.log(bool_true1);
 console.log(bool_false1);

 console.log(a);








let n1 = 5
let n2 = 10

let result1 = n1 < n2

console.log(result1)
console.log(typeof(result1))            //при сравнении типа number = тип boolean




let n1 = '5'
let n2 = 5

let result1 = n1 === n2

console.log(result1)
console.log(typeof(result1))               // === сравниваются значения и тип данных






^^^^^^^^^^^^^^^^^^^^^^ if/ else ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let condition = true

if (condition) {
    let a = 5;
    let b = 7;
    let result = a + b;
    console.log('IF_RESULT == ' + result)
}                                                 //если condition = false,  то код выполятся не будет






let n1 = 30;
let n2 = 30;
let n3 = '100';
let n4 = 500;

let compare_1 = n1 < n2;
let compare_2 = n1 > n2;
console.log(compare_1);
console.log(compare_2);

if (compare_1)  {
    let a = 5;
    let b = 7;
    let result1 = a + b;
    console.log('IF_RESULT == compare_1 == ' + result1)
} else if (compare_2){
    console.log('RESULT ==  compare_2 == ' + compare_2)
}
else{
    let a = 5;
    let b = 7;
    let result2 = a * b;
    console.log('IF_RESULT == compare_3')
}







