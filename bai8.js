var yearjohn = 0;

// CÁCH 1 
// function tinhtuoi(year){
//     return 2019 - year;
// }
// function thaydoinamsinh(){
//     yearjohn=1990;
// }
// //gọi lên hàm 
// thaydoinamsinh();
// var age = tinhtuoi(yearjohn);
// console.log("tuoi john = ",age);


// CÁCH 2
// var tinhtuoi2 = function(year){
//     return 2019 - year;
// }
// var thaydoinamsinh2 = function(year){
//     yearjohn = 1990;
// }
// thaydoinamsinh2();
// var age = tinhtuoi2(yearjohn);
// console.log("tuoi john = ",age);



//CÁCH 3
var tinhtuoi3 = (year)=> {
    return 2019 - year;
}
var thaydoinamsinh3 = ()=>{
    yearjohn = 1991;
}
thaydoinamsinh3();
var age= tinhtuoi3(yearjohn);
console.log("tuoi john = ",age);