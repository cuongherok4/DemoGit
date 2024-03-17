// for(var run=1;run<=10;run++){
//     console.log("run = ",run);
// }

// var john = [
//     'john',
//     28,
//     'small',
//     true

// ];
// console.log(john);
// for(run=0;run<john.length;run++){
//     console.log("phan tu = "+run+" = ", john[run]);
// }





// function calaverrage(){
//     this.average = (this.math + this.physics)/2;
//     return this.average;
// }
// var student = [
//     {
//         fullname:'nguyen van a',
//         math:9,
//         physics:5
//     },
//     {
//         fullname:'nguyen van b',
//         math:10,
//         physics:6
//     },
//     {
//         fullname:'nguyen van c',
//         math:20,
//         physics:8
//     },
//     {
//         fullname:'nguyen van c',
//         math:20,
//         physics:8
//     }
// ]

// // for(var index =0;index<student.length;index++){
// //     console.log(student[index]);
// // }
// for(var index = 0; index<student.length;index++){
//     student[index].calaverrage =calaverrage;
//     student[index].calaverrage();
// }
// console.log('arrstudent = ',student);





var calaverrage2 =function(){//hàm đém khi object không có length
    var total =0;
    var totalscore = 0;
    for(key in this.score){
        // total = total+1;
        total+=1;
        totalscore+=this.score[key];
        // console.log("key = ",key);
        // console.log("score "+ key + " = ",this.score.math);
    }
    return totalscore/total;
    // console.log("total = ",total);
    // console.log("totalscore =",totalscore);
}

var studen2 = {
    fullname: 'nguyen van a',
    year:1992,
    score:{
        math:6,
        physic:8,
        chemischi:1
    },
    calaverrage:calaverrage2
}
// studen2.calaverrage();



var studen3 = {
    fullname: 'nguyen van b',
    year:1992,
    score:{
        math:9,
        physic:2,
        chemischi:1,
        englisht:10
    }
    ,calaverrage:calaverrage2

}
console.log("tb studen 2 = ",studen2.calaverrage());
console.log("tb studen3 = ",studen3.calaverrage());