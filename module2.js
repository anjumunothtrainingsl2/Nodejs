/* var f1=require("./module1");// execute the module1

 f1.myFunc1(200,300)
//console.log(empObj)local to the module1
console.log(f1.str1) 
 */
var {myFunc1}=require("./module1")// destructuring; caching 
myFunc1(45,45)
//console.log(str1.toUpperCase())

/* var obj={bookId:101,bookName:"IntroToMongo"}
var {bookId}=obj
console.log(bookId);//101 */

function getPosition(empArr,empId)
{
    var pos=empArr.findIndex((item)=>{
        if(item.empId ==empId)
            return true
    })
    return pos;
}
// map,filter,find,findIndex,reduce
module.exports={getPosition}
//module.exports={getPosition:getPosition}