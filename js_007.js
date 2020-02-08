// Javascript Regular Expression

var str = "Sejong University!";
console.log(str);

// i : perform case-insensitive matching

var n = str.search(/university/i);
console.log(n);

// g : perform a global-match
var n = str.search(/university/g);
console.log(n);
var n = str.search(/niversity/g);
console.log(n);

var tmpstr = str.replace("University", "College");
console.log(tmpstr);

// match

str = "To lose your path is the way to find that path";

const sensitiveCaseRegex = /to/;
const ignoreAllCaseRegex = /to/gi;
const findRangeRegex = /([a-f])\w+/i;
const findAllRangeRegex = /([a-f])\w+/gi;

console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));

// {} : 표현식에서 {a,b} 숫자 혹은 문자의 개수 a개 에서 b개 사이
// () : 그룹, 구분자의 역할, 그룹 끼리만의 표현식 적용
const emailRegExp = /^([-_.]?[0-9a-zA-z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

// ([-_.]?[0-9a-zA-z]{6,13})+ : 영문 대소자, 숫자, - _ . 를 허용하는 표현식

console.log(emailRegExp.test('test123@javascript.org'));
console.log(emailRegExp.test('test123@javascript'));
