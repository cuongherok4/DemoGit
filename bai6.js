// var heigh= 0;
// if(heigh || heigh===0 ){
//     console.log("height co gia tri la: ", heigh);
// }else{
//     console.log("height khong co gia tri ",heigh);
// }
// var height2='23';
// if(height2 ===23){
//     console.log('chay vao day');
// }else{
//     console.log("chay vao ben duoi else");
// }

 // BÀI TẬP 1
var john = (89+ 120 + 103)/3, 
mark = (116 + 94 + 123)/3, 
mary = (97 + 134 + 105)/3;


console.log("Điểm trung bình của john là: " +john);
console.log("Điểm trung bình của mark là: " +mark);
console.log("Điểm trung bình của mary là: " +mary);

if(john > mark && john >mary){
    console.log("Đội john có số điểm trung bình cao nhất là" +john);
}else if(mark >john && mark > mary){
    console.log("Đội mark có số điểm trung bình cao nhất là : " + mark);
}else if(mary >john && mary > mark){
    console.log("Đội mery có số điểm trung bình lớn nhất là : ", mary);
}else if(mary === mark && mary ===john){
    console.log("cả ba đội đều có số điẻm trung bình bằng nhau", john);
}
else if(john===mark){
    console.log("Đội john và mark có số điểm bằng nhau : ", john);
}else if(john === mary){
    console.log("Đội john và mary có só điểm bằng nhau : ", john);
}else if(mary === mark){
    console.log("Đội của mary và mark có số điểm bằng nhau :", mary);
}