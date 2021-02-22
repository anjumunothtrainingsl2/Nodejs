var obj1=require("./module1")
var obj2=require("./module2")
obj1.myFunc1(1,2)
var empList=[{
    "empId": 101,
    "empName": "asha",
    "salary": 1001,
    "deptId": "D1"
}, {
    "empId": 102,
    "empName": "Gaurav",
    "salary": 2000,
    "deptId": "D1"
}, {
    "empId": 103,
    "empName": "Karan",
    "salary": 2000,
    "deptId": "D2"
},
{
    "empId": 104,
    "empName": "Kishan",
    "salary": 3000,
    "deptId": "D1"
},
{
    "empId": 105,
    "empName": "Keshav",
    "salary": 3500,
    "deptId": "D2"
},
{
    "empId": 106,
    "empName": "Pran",
    "salary": 4000
},
{
    "empId": 107,
    "empName": "Saurav",
    "salary": 3800
}
]
var empId=107
var result=obj2.getPosition(empList,empId)
console.log(`Position of empId ${empId} is ${result}`)