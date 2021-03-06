let text;
text = 'Hello Wordl';
let text2;
text2 = 'Hello 2';
console.log(text);
console.log(text2);
//template string 1
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
// number 1
// 1.
console.log(1e6);
console.log(1e7);
console.log(4.3e10);
console.log(1.2e-5);
console.log(1.234e-7);
// 2.
console.log(10000000000);
console.log(200000);
console.log(12200000000);
console.log(0.00000001);
console.log(0.00012);
// number 2
// 1.
let nums1 = [100, 111, 55, 21, 99];
for (const num of nums1) {
    console.log(num.toString(8));
}
// 2.
for (const num of nums1) {
    console.log(num.toString(16));
}
// 3.
let nums2 = [12.423, 31313.135, 42.809];
for (const num of nums2) {
    console.log(Math.round(num));
}
// number 3
// 1.
function random(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(random(5, 10));
// boolean
// 1.
let a = false;
let b = true;
let c = false;
// 2.
console.log(a || (b && c));
// 3.
console.log(b || a || c);
// 4.
console.log(b && (a || c));
// typeof
// 1.
console.log(typeof false);
console.log(typeof 'ABD');
console.log(typeof 113113);
console.log(typeof null);
console.log(typeof '');
// operators
// 1.
console.log(Number('230'));
// 2.
console.log(String(230));
// 3.
console.log(Math.pow(3, 4));
// 4.
let x = 6;
x *= 20;
console.log(x);
let student = {
    name: 'adam',
    id: 'std-1',
    year: 4,
    gpa: 4.0,
    grades: {
        math: 4,
        science: 4,
    },
};
// 2.
let student2 = Object.assign({}, student);
student2.grades = null;
// 3.
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`);
}
// 4.
student2.isActive = true;
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`);
}
// 5.
delete student2.isActive;
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`);
}
// array
// 1.
let fruits = ['Apples', 'Pear', 'Orange'];
let shoppingCart = fruits;
shoppingCart.push('Banana');
console.log(fruits.length); // 4
// method array
// 1.
let str8 = 'Apple, Cat, Zoo, Bird, Dog';
let input = str8.split(', ').sort();
console.log(input);
// 2.
let arr1 = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
console.log(arr1.filter(item => String(item).startsWith('1')));
// 3.
let arr2 = ['Apple', 'Mango', 'Cat', 'Banana'];
arr2.splice(2, 1, 'Orange').sort();
console.log(arr2);
// 4.
let arr3 = arr1.map(item => item * 2);
console.log(arr3);
// 5.
let arr4 = arr2.filter(item => item == 'Apple');
console.log(arr4);
// 6.
let fruit = arr2.find(item => item == 'Mango');
console.log(fruit);
// 7.
arr2.forEach((item, index, arr) => {
    console.log(`${item} is at ${index} in ${arr}`);
});
// arrow function
// 1.
let calRectangleArea = (height, width) => {
    return height * width;
};
console.log(calRectangleArea(4, 4));
// 2.
let isPrimeNumber = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return true;
};
console.log(isPrimeNumber(5));
let icCard = {
    id: 1,
    name: 'adam'
};
console.log(icCard);
let mathId = {
    id: 'math-101'
};
let subject = {
    name: 'math',
    id: mathId
};
console.log(subject);
class Programmer {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
class CTO {
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log(`${this.name} is working`);
    }
}
let programmer = new Programmer('adam');
programmer.work();
let cto = new CTO('bob');
cto.work();
//# sourceMappingURL=app.js.map