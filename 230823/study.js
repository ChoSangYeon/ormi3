//'use strict';

// valueA;
// var valueA;
// var valueA;
// let valueA;
// const my_name; 엄격모드에서 에러를 발생하는 경우들


//----------변수----------
// valueA = 1;
// const my_name = "WADE";

// if(true){

//   let valueB = 'Hello!';
//   const my_name = "WADE";
// }

// valueB = 'nice to meet you!';
// let valueB = 'Hi!';


//----------원시타입----------
let str1 = 'hello';
let str2 = str1;
console.log(str2);

str1 = 'world';
console.log(str2);


//----------문자열----------
let myPassword = "qwer123!@#";
console.log(myPassword.length);

let 불멸자 = "immortal";
불멸자[0] = 'l';
console.log(불멸자);

불멸자.toUpperCase();
console.log(불멸자);

let lryics1 = '광야로 걸어가';
let lryics2 = '알아 네 home ground';
'광야로 걸어가 알아 네 home ground' === lryics1 + lryics2;

//----------문자열 메소드----------

//indexOf()
let text = "Next level 제껴라 제껴라 제껴라";
//console.log(text.indexOf('level'));
//검색할 문자 'level'이 시작하는 인덱스를 반환

console.log(text.indexOf('제껴라'));

console.log(text.indexOf('제껴라', 16));
//인덱스 16은 두번째 '껴', 두번째 '껴'부터 검색을 시작하여 '제껴라'를 찾는데, 이때의 인덱스 번호가 19

console.log(text.indexOf('광야'));
//없으면 -1 반환

//lastIndexOf()
console.log(text.lastIndexOf('level'));
//5: 'level' 이란 단어는 한 개라서

console.log(text.lastIndexOf('제껴라'));
//19: 인덱스 끝에서부터 앞방향으로 탐색

console.log(text.lastIndexOf('제껴라', 16));
// 15: 인덱스 16부터서 앞방향으로 탐색

//match()
console.log("Naevis 우리 ae, ae들을 불러봐.".match(/ae/));

console.log("Naevis 우리 ae, ae들을 불러봐.".match(/ae/g));

console.log("Naevis 우리 ae, ae들을 불러봐.".match(/[a-zA-A]\w+/g));

//replace()
console.log("제껴라 제껴라 제껴라 huh!".replace("제껴라", "check it out"));
//replace(): 재배치, 일치하는 첫번째 문자열을 대체 후 반환

console.log("제껴라 제껴라 제껴라 huh!".replace(/제껴라/g, "check it out"));
//g플래그: 싹 바꿈

//slice()
console.log("중심을 잃고 목소리도 잃고".slice(7));

console.log("중심을 잃고 목소리도 잃고".slice(7, 14));

console.log("중심을 잃고 목소리도 잃고".slice(-3));

console.log("중심을 잃고 목소리도 잃고".slice(-3, 13));

//split()
console.log("La la la la la la".split(" "));

console.log("La la la la la la".split(""));

console.log("La-la-la-la-la-la".split("-", 3));

//toLowerCase(), toUpperCase()
console.log("What's the name? Black mamba".toLowerCase());

console.log("Watch me while I make it out".toUpperCase());

//trim()
console.log("     abc   ".trim());

//단, 문자열 양 끝의 공백만 제거, 공백 이후의 문자열이 공백을 포함한다면, 그 공백은 제거하지 않음
console.log("  a b c  ".trim());

//padStart(): 자릿수 맞추기
let str = '99'
console.log(str.padStart(5, '0'));


//----------숫자형----------

// document.write(9999999999999999999, '<br>');
// document.write(0.1 + 0.2 === 0.3, '<br>');

//연산
//산술연산에 ``으로 묶기, 나머지는 ""

console.log(`10 + 3 = ${10+3}`);  //수식은 이상하게 ; 없어도 인식
console.log(`10 -3 = ${10-3}`)
console.log(`10 / 3 = ${10/3}`)
console.log(`10 * 3 = ${10**3}`)
console.log(`4 ** 0.5 = ${4 ** 0.5}`)
console.log(`10 % 3 = ${10%3}`)

//단항연산
console.log(-2)
console.log(-(-2))  //--는 증감연산자가 되어서, ()처리, 안하면 error남
console.log(+4)
console.log(+"4") //문자열로 된 숫자는 연사자와 만나면 숫자가 된다?

console.log(`+'4' + 4 = ${+'4'+4}`) //숫자 처리되어 값이 8이 나옴

console.log(~~3.14)

//증감연산자
let num = 3
console.log("증감연산 : ", ++num) //4
console.log("증감연산 : ", num++) //5
console.log("증감연산 : ", --num) //4
console.log("증감연산 : ", num--) //3
//출력은 모두 4

//전위연산과 후위연산의 차이
//연산이 앞에 있다면 출력이 후 순위이다
//즉, 후위연산은 출력이 먼저 진행된 후 연산을 진행한다

for (let i=0; i<10; i++) {
  console.log(i)
}

for (let i=0; i<10; ++i) {
  console.log(i)
}

//비교연산자: boolean으로 값을 반환
console.log("비교연산 : ", 2 > 3);
console.log("비교연산 : ", 2 >= 3);
console.log("비교연산 : ", 2 < 3);
console.log("비교연산 : ", 2 <= 3);
console.log("비교연산 : ", 2 == 3); 
console.log("비교연산 : ", 2 === 3);

console.log("비교연산 : ", 2 == '2'); //true, 타언어는 false처리 
console.log("비교연산 : ", 2 === '2')//=== 는 숫자, 문자 다르게 처리


//----------숫자 특수값----------
// document.write("무한대 : ", 1/0,'<br>'); 
//Infinity

// document.write(3e10);
// let num = 9999e10000;
// document.write(num === Infinity ,'<br>');

// document.write( "숫자가 아님" / 2 ); 


//----------숫자형 메소드----------

//parseInt():문자열을 정수로
//parseFloat():문자열을 소수로
//전달인자 진수표현 가능

console.log(`parseInt(false) : ${parseInt('30')}`);
console.log(`parseInt('hello') : ${parseInt('hello')}`);  //NaN: Not a Number
console.log(`parseInt(30b) : ${parseInt('30b')}`);
console.log(`parseInt('33.33') : ${parseInt('33.33')}`)
//console.log()는 ; 없어도 되나봄
console.log(`parseFloat('45.4) : ${parseFloat('45.4')}`)
console.log(`parseInt('10     ') : ${parseInt('10     ')}`)
console.log(`parseInt('    10') : ${parseInt('    10')}`)
console.log(`parseInt('    10    ') : ${parseInt('    10    ')}`)
console.log(`parseInt('11', 2) : ${parseInt('11', 2)}`) //,2는 2진수
//'11'을 2진수로 해석, -> 3
console.log(`parseInt('11', 10) : ${parseInt('11', 10)}`) //,10은 10진수

//toString: 숫자를 문자열로 변환
//전달인자를 통해 원하는 진수로 표현하는 것 가능
let num2 = 5;
console.log(`num2.toString() : ${typeof num2.toString()}`)
console.log(`num2.toString() : ${(3).toString()}`) //3
console.log(`num2.toString() : ${num2.toString()}`) //5
console.log(`num2.toString() : ${typeof (3).toString(2)}`) //3을 전달인자 2를 받아, 3을 2진수로 표현, 2진수로 11, string임

//isNaN()
console.log(`isNaN('5') : ${isNaN('5')}`) //false
console.log(`isNaN(3) : ${isNaN(3)}`) //false
console.log(`isNaN('b3') : ${isNaN('b3')}`) //true
console.log(`isNaN('3b') : ${isNaN('3b')}`)
//ES6에서 추가 도입
console.log(Number.isNaN(undefined)) //false
console.log(Number.isNaN(null)) //false
console.log(Number.isNaN(NaN)) //true

//toLocaleString(): 숫자를 사용자가 사용하는 언어 표기법대로 변환하여 문자열 반환
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString()}`);
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString('ko-KR')}`);
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString('ar-IQ')}`);
console.log(`(12345678910).toLocaleString() : ${(12345678910).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })}`);

//Math 내장객체를 이용한 연산
console.log(`Math.PI : ${Math.PI}`)
console.log(`Math.round(4.7) : ${Math.round(4.7)}`)
console.log(`Math.pow(2, 8) : ${Math.pow(2, 8)}`) //2 ** 8, 제곱값
console.log(`Math.sqrt(64) : ${Math.sqrt(64)}`) //루트값
console.log(`Math.abs(-5) : ${Math.abs(-5)}`) //절대값
console.log(`Math.random() : ${Math.random()}`) //난수생성
console.log(`Math.max(10,20,30,40,50) : ${Math.max(10,20,30,40,50)}`) //최대값
console.log(`Math.min(10,20,30,40,50) : ${Math.min(10,20,30,40,50)}`) //최소값


//----------논리 자료형----------
let x = 5;
let y = 10;
let z = 5;

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= z); // true
console.log(x <= z); // true
console.log(x === z); // true
console.log(x !== y); // true

//논리곱 &&
console.log(true && true); // true
console.log(true && false); // false
//논리합 ||
console.log(true || false); // true
console.log(false || false); // false
//논리부정 !
console.log(!true); // false
console.log(!false); // true
console.log(!!true); // true
console.log(!!false); // false
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!NaN); // false

//----------undefined----------
//변수값 할당되지 않은 경우(정의되지 않음)

let a;
console.log(a);

let b;
if(typeof b === "undefined") {}
if(b){}

//----------null----------
//값이 없는 데이터 타입, null을 사용하여 변수에 값을 지정하지 않도록 초기화할 수 있음

let value1;
var value2 = null;
console.log(value1); //undefined
console.log(value2); //null