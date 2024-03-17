// var firstname = 'cuong';
// var expenssion = 'teachr';
// switch(expenssion){
//     case 'mother':
//         console.log(firstname + " la mother");
//         break;
//     case 'teacher':
//         console.log(firstname + 'la teacher');
//         break;
//     case 'father':
//         console.log(firstname + ' la father');
//         break;
//     default:
//         console.log(firstname+ 'khong xuat hien trong bang');
//         break;
// }

var firstname = 'cuong';
var age = 20;
switch(true){
    case age<13:
        console.log(firstname + " la hco sinh tieu hoc");
        break;
    case age >13 && age <=16:
        console.log(firstname + " la hoc sinh turng hoc");
        break;
    default:
        console.log(firstname+ ' la nguoi lon tuoi');
        break;
}