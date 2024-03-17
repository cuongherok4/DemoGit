var student = {
    //dùng object tạo ra mảng 1 
    fullname:'hoang manh cuong',
    year:2004,
    scores:{
        //  dùng object tạo ra mảng 2
        maths:9,
        physics:7.5,
        chemischi:5
    },
    // calaverage function(){
    //     // tinh toan dua tren score

    // }
    
    test: function(){
        //tạo một function tên là test , trong function chứa dữ liệu 
        console.log(this);// this là vị trí con trỏ trỏ tới vị trí được lưu trong bject
        var maths = this.scores.maths;// chỏ tới object 1 , object 2 và chỉ tới vị trí môn toán 
        var physics = this.scores.physics; // chỏ tới object 1, object 2 và chỉ tới vị trí môn lý 
        var chemischi = this.scores.chemischi;// chỏ tới bjecct 1, object 2 và chỉ tới vị trí môn hóa


        return (maths + physics + chemischi)/3;// cuối cùng là tính điểm trung bình rồi lưu kết quả , chờ được gọi tới

    }
};
console.log('studen = ',student);// gọi tới object student
console.log('studen name = ',student.fullname);// gọi tới bject fullname trong student
console.log('studen score = ',student.scores);// gọi tới object score trong student
console.log('maths =',student.scores.maths);// gọi tới object score và gọi tới math trong nó
console.log('physics = ',student.scores.physics);// gọi tới object score và gọi tới physics
console.log('chemischi = ',student.scores.chemischi);// gọi tưới object score và goij tới chemischi 

var test = student.test();// khai báo và gán bién test bằng student.test , thay giá trị từ biến studen vào trong biến test
console.log("average = ",test);// gọi biến test  sau khi chạy 



console.log("++++++++++++++++");
// cách 2
var studen2 = new Object();// đầu tiên khai báo một dữ liệu ,tạo một object
console.log("student2 = ", studen2);// 
studen2.fullname= 'nguyen van b';// tại vị trí student2 lưu biến fulllname
studen2.year = 2004;// tại vị trí student2 lưu biên year
studen2.scores={// tại vị trí student2 tạo thêm một object (score)
    maths:8,// tại vị trí score lưu  math 
    physics:7,// tại vị trí score lưu physics
    chemischi:8// tại vị trí score lưu chemischi
}
studen2.test = student.test;// gán và lưu ( vì 2 vế có test bằng nhau nên suy ra hai student bằng nhau)
// studen2.tes = function(){
//     var maths = this.scores.maths;
//     var physics = this.scores.physics;
//     var chemischi = this.scores.chemischi;

//     return (maths + physics + chemischi)/3;
// }
console.log("student2.fullname = ", studen2.fullname);// gọi biênd fullname trong student 2 ra

console.log('student2 = ',studen2);// goi hàm student ra 
console.log("student2.calavrrage = ", studen2.test());// gọi studen và gọi function ra 

