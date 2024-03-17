var demo=['john',
    20,
    'cuong',
    'hoang'
    ,'cuong',
    'cuong',
    'cuong'
];
console.log("demo pust= ", demo.push(2004));
//push thêm phần tử vào cuối phần tử và đếm số phần tử xuất hiện trong mảng

console.log("unshift unshift= ",demo.unshift(10));
// unshift thêm phần tử vào đầu phần tử và đếm số phần tử xuất hiện trong mảng

console.log("demo pop= ", demo.pop());
// pop lấy ra phần tử cuối cùng của mảng 

console.log("demo shift= ",demo.shift());
// shift lấy ra phần tử đầu tiên của mảng
console.log("demo indexof = ",demo.indexOf('cuong'));
// indexof lấy ra vị trí xuất hiện cuong trong mảng (lấy vị trí gần nhất)

console.log("demo lastindexof = ", demo.lastIndexOf('cuong'));
// lastindexof lấy ra vị trí xuất hiện cuong trong mảng (lấy vị trí xa nhất)
