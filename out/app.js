let text;
text = 'Hello Wordl';
let text2;
text2 = 'Hello 2';
console.log(text);
console.log(text2);
//templat string 1
// 1.
let str = 'this is String';
console.log(str);
// 2.
console.log(str.charAt(0));
// 3.
console.log(str[0]);
// 4.
console.log(str.charAt(20));
console.log(str[20]);
// 5.
let str1 = 'hello';
let str2 = 'world';
console.log(`${str1} ${str2}`);
//template string 2
// 1.
let str3 = 'microsoft excel';
console.log(str3.toUpperCase());
// 2.
let str4 = 'GOOGLE AND APPLE';
console.log(str4.toLowerCase());
// 3.
let str5 = 'hello world';
let str6 = `H${str5.slice(1, 5)} W${str5.slice(7)}`;
console.log(str6);
// 4.
let str7 = 'Hello world';
console.log(str7.startsWith('Hello'));
console.log(str7.startsWith('World'));
// 5.
console.log('Computer'.slice(3, 6));
console.log('Death Race'.slice(0, 5));
console.log('Republican'.substring(2, 8));
//# sourceMappingURL=app.js.map