var fs=require("fs")// core 
/*multi line comment
*/
fs.readFile("text1.txt",(err,data)=>{
    if(err)
    {
        console.log("Error reading the file")
        console.log(err)
    }
    else
    {
        console.log(data.toString());
    }
})