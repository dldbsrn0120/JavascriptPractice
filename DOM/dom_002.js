const bodyEl = document.body;
const bodyElChildren = bodyEl.children;
console.log(bodyElChildren);    // HTMLCollection(4) [h1, ul, script, script]

const cityList = bodyElChildren[1];

console.log(cityList.children.length);  // 4
const item2 = cityList.children.item(1);
console.log(item2); // <li>제주</li>
console.log(item2.previousElementSibling); // <li>서울</li>
console.log(item2.previousSibling); // #text 
console.log(item2.previousSibling.previousSibling); // <!-- <li>수원</li>-->
console.log(cityList.childNodes); // NodeList(11) [text, li, text, comment, text, li, text, li, text, li, text]
console.log(item2.firstChild);  // "제주"
console.log(item2.lastChild);   // "제주"
console.log(item2.parentElement);   // <ul></ul>