console.log("Welcome to the training on nodejs")
var i=0,j=10;
//var(function scope),let(block scope),const(constant)
// type inference; 
var str1="hello"
function myFunc1(p1,p2)
{
    console.log("Sum = "+(p1+p2))
}

var empObj={
    "empId":101,
    "empName":"sara",
    "salary":8798
}
myFunc1(10,20)


module.exports={myFunc1:myFunc1,str1:str1}
