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