var massmark = 64;
var massjohn = 59;

var heightmark = 1.7;
var heightjohn=1.65;

var bmijohn = massjohn  / (heightjohn * heightjohn);
var bmimark = massmark/(heightmark* heightmark);

console.log("BMI mark = ", bmimark);
console.log("BMI john = ",bmijohn);


var sosanh= bmimark>bmijohn;
console.log('BMI cua Mark lon hon BMI cua John? ',sosanh);