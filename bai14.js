// bước đầu tiên ta tạo và khai báo hai  object chứa những tham só cần thiết 
var john = {
    fullname : "vuong hoang",
    mass:50,
    height:0.8,
    bmi:calbmi
    // calbmi:function(){
    //     //to do
    //     return this.mass/(this.height * this.height);
    // }
}
// tạo object thứ
var mak = {
    fullname:"mark tin",
    mass:50,
    height:1.8,
    bmi:calbmi
    // bmi:calbmi*()    => bản chất đây là lời gọi hàm , chứ không phải trỏ tới hàm 

    // calbmi:function(){
    //     // to do 
    //     return this.mass / (this.height * this.height);
    // }
}

function calbmi(){
    // console.log("this calbmi = ",this);
    // return this.mass / (this.height * this.height);
    this.bmivalue = this.mass / ( this.height * this.height);
    // return this.bmivalue;
}

// var calbmi2 = function(){
//     console.log("this calbmi = ", this);
//     return this.mass/(this.height * this.height);
// }
// console.log("typeof calbmi = ",typeof calbmi);
// console.log("typeof calbmi2 = ", typeof calbmi2);
john.bmi();
mak.bmi();
console.log("BMI john =  ",john.bmivalue);
console.log("BMI mark = ", mak.bmivalue)
// console.log("BMI JOHN = ",john.bmi());
// console.log("BMI mark = ",mak.bmi());
// john.bmi();
// mak.bmi();
if(john.bmivalue>mak.bmivalue){
    console.log("BMI cua john lon hon bmi cua mark");
}else if(john.bmivalue<mak.bmivalue){
    console.log("bmi cua john be hon bmi cua mark");
}else{
    console.log("bmi cua john va mark bang nhau");
}