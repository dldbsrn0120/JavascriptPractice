const div1El = document.getElementById('div1');
console.log(div1El.innerHTML);

console.log(div1El.nodeType);   // div1El의 nodeType는 1이고 ELEMENT_NODE 종류에 속합니다.
console.log(div1El.nodeType === Node.ELEMENT_NODE);

console.log(div1El.constructor);    // <div> 태그는 HTMLDivElement 타입의 객체로 만들어짐
console.log(div1El instanceof HTMLDivElement); // 각 태그들은 요소 노드(Element Node)가 되고 하위 세부 타입으로 나뉨
console.log(div1El instanceof HTMLElement); // HTMLDivElement에 의해 상속됨
console.log(div1El instanceof Element); // Node를 상속함
console.log(div1El instanceof Node);
console.log(Element.prototype);
console.log(div1El.tagName);

const liEls = document.querySelectorAll('ul li');   // querySelector는 CSS선택자를 이용하여 HTML요소를 선택할 수 있음
for(var i=0; i<liEls.length; i++) {
    console.log(liEls.item(i).innerHTML);
    console.log(liEls.item(i).textContent);
}