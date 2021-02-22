// read the entire content of text1.txt and write it into text3.txt
var fs=require("fs")
fs.readFile("text1.txt",(err,data)=>{
    if(err)
    {
        console.log("error",err)
    }
    else
    {
        result=data.toString();
        fs.writeFile("text3.txt",result,(err)=>{
            if(err)
            {
                console.log("error during write")
            }
            else
            {
                console.log("Finished the write op successfully")
            }

        })
    }
})
