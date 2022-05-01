let text: string;
text = 'Hello Wordl';
let text2: string;
text2 = 'Hello 2'
console.log(text);
console.log(text2)

//template string 1
// 1.
let str: string = 'this is String';
console.log(str)

// 2.
console.log(str.charAt(0))

// 3.
console.log(str[0])

// 4.
console.log(str.charAt(20))
console.log(str[20])

// 5.
let str1: string = 'hello'
let str2: string = 'world'
console.log(`${str1} ${str2}`)


//template string 2
// 1.
let str3: string = 'microsoft excel';
console.log(str3.toUpperCase())

// 2.
let str4: string = 'GOOGLE AND APPLE'
console.log(str4.toLowerCase())

// 3.
let str5: string = 'hello world'
let str6: string = `H${str5.slice(1, 5)} W${str5.slice(7)}`
console.log(str6)

// 4.
let str7: string = 'Hello world';
console.log(str7.startsWith('Hello'))
console.log(str7.startsWith('World'))

// 5.
console.log('Computer'.slice(3, 6))
console.log('Death Race'.slice(0, 5))
console.log('Republican'.substring(2, 8))

// number 1
// 1.
console.log(1e6)
console.log(1e7)
console.log(4.3e10)
console.log(1.2e-5)
console.log(1.234e-7)

// 2.
console.log(10000000000)
console.log(200000)
console.log(12200000000)
console.log(0.00000001)
console.log(0.00012)

// number 2
// 1.
let nums1: number[] = [100, 111, 55, 21, 99];
for (const num of nums1) {
    console.log(num.toString(8))
}

// 2.
for (const num of nums1) {
    console.log(num.toString(16))
}

// 3.
let nums2: number[] = [12.423, 31313.135, 42.809]
for (const num of nums2) {
    console.log(Math.round(num))
}

// number 3
// 1. 
function random(min: number, max: number): number {
    return Math.random() * (max - min) + min
}
console.log(random(5, 10))

// boolean
// 1.
let a: boolean = false
let b: boolean = true
let c: boolean = false

// 2.
console.log(a || (b && c))

// 3.
console.log(b || (a || c))

// 4.
console.log(b && (a || c))

// typeof
// 1.
console.log(typeof false)
console.log(typeof "ABD")
console.log(typeof 113113)
console.log(typeof null)
console.log(typeof "")

// operators
// 1.
console.log(Number("230"))

// 2.
console.log(String(230))

// 3.
console.log(3 ** 4)

// 4.
let x: number = 6
x *= 20
console.log(x)

// object
// 1.
interface Student {
    name: string,
    id: string,
    year: number,
    gpa: number,
    grades: object,
    isActive? : boolean
}
let student: Student = {
    name: 'adam',
    id: 'std-1',
    year: 4,
    gpa: 4.00,
    grades: {
        math: 4,
        science: 4
    }
}

// 2.
let student2 = Object.assign({}, student)
student2.grades = null

// 3.
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`)
}

// 4.
student2.isActive = true
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`)
}

// 5.
delete student2.isActive
for (const key in student2) {
    console.log(`${key} : ${student2[key]}`)
}

// array
// 1.
let fruits: string[] = ['Apples', 'Pear', 'Orange']
let shoppingCart: string[] = fruits
shoppingCart.push('Banana')
console.log(fruits.length) // 4