var fname = 'cuong';
var age = 20;
console.log('ten cau ban la:', fname);
// đây là kiểu khai báo chuỗi
console.log('tuoi cua ban la: ', age);
// đây là kiểu khai báo số 
console.log(fname + age);
// ép kiểu (sẻ trả vê dạng string khi cộng string với number)
var isMaried;
isMaried = false;
//kiểu dữ liêu boolean chỉ có false và true

age= 'tewnty eight';
// alert(fname +'is a '+age+'year old' +'is the married?' + isMaried);
// alert chỉ thực thi câu lệnh sau nó khi người dùng ấn ok 
console.log('Maried = ',isMaried);


var x=5;
var y=4;
console.log('x+=y ',x+=y);
console.log('x= ',x);
// toán tử typeof = dùng để xác định kiểu dữ liệu của biến tại thời điểm dó
console.log("typeof x = ", typeof x);
//dùng để xác định kiểu dữ liệu của x : number
console.log("typeof firstname = ",typeof fname);
// dùng đẻ xác định kiểu dữ liệu của fname : string
console.log("typeof ismarire = ",typeof isMaried);
// dùng để xác định kiểu dữ liệu boolean

var number1=50;
var number2=150;
var double = (number1+ number2)/2;
console.log("(50+150)/2 ",double);

var massjohn = 60;
var heightjohn = 160;
var massmark= 70;
var heightmark= 170;
var heightjohn2=heightjohn;
var heightmark2 =heightmark;
var a=(massjohn/heightjohn2);
var b=(massmark/heightmark2);
console.log("john =",a);
console.log("mark =",b);
var sosanh=(a>b);
console.log("BMI của mark lớn hơn BMI của John?",sosanh);

