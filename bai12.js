var bills =[124,48,268];
console.log("bills =",bills);
// function nhn vao mot hoa don => tra ve tien tip tinh toán trên hóa đơn đó
function caitip(bill){
    var percent;
    if(bill <50){
        percent = 0.2;
    }else if(bill >=50 && bill <=200){
        percent = 0.15;
    }else if(bill >200){
        percent = 0.1;
    }
    return percent * bill;
}
// cách 1
//tạo một mảng và gọi lần lượt giá trị của bills vòa hàm ( function) và lưu giá trị trực tiếp trong mảng 
var tip= [
    caitip(bills[0]),
    //gọi hàm và lấy giá trị của bills tại vị trí 0 và lưu kết quả sau khi thực thi vào tip
    caitip(bills[1]),
    // gọi hàm và lấy giá trị của bills tại vị trí 0 và lưu kết quả sau khi thực thi vào tip
    caitip(bills[2]),
    // gọi hà và lấy giá trị của bills tại vị trí 0 và lưu kết quả sau khi thực thi vào tip

];
console.log("tip 1= ",tip);


// cách 2
// tọa ra một mảng , dùng hàm .push để lưu vào mảng tip2 
var tips2=[];
tips2.push(caitip(bills[0]));
//gọi hàm caitip và lấy giá trị bills tại vị trí 0 thay vào function và lưu kết quả vào tip2
tips2.push(caitip(bills[1]));
//gọi hàm caitip và lấy giá trị bills tại vị trí 1 thay vào function và lưu kết quả vào tip2
tips2.push(caitip(bills[2]));
//gọi hàm caitip và lấy giá trị bills tại vị trí 2 thay vào function và lưu kết quả vào tip2
console.log("tip 2 = ",tips2);

// cách 3;
// tạo ra một mảng , gán giá trị đầu tiên vào tại vị trí đầu tiên của mảng
var tip3 =[];
tip3[tip3.length] = caitip(bills[0]);
// tại vị trí 0 ta gán cailtip có giá trị tại vị trí bills 0
tip3[tip3.length] = caitip(bills[1]);
// tại vị trí 0 ta gán cailtip có giá trị tại vị trí bills 1
tip3[tip3.length] = caitip(bills[2]);
// tại vị trí 0 ta gán cailtip có giá trị tại vị trí bills 2
console.log("tip3  = ",tip3);

var tonghoadon = [
    tip[0]+bills[0],
    tip[1]+bills[1],
    tip[2]+bills[2],
];
console.log("tong hoa don: ", tonghoadon);