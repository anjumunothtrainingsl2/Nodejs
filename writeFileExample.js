const fs=require("fs")

fs.writeFile("text2.txt","We will be working with hapi.js as well. Happy day!!!",(err)=>{
    if(err)
    {
        console.log("Error writing the file",err)
    }
    else
    {
        console.log("Successfully fininshed writing into the file")
    }

})

