// read the contents of text1,text2,text3 and put them into text4
var fs=require("fs")
fs.readFile("text1.txt",(err,data)=>{
    if(err)
    {
        console.log("error",err)
    }
    else
    {
        result1=data.toString()
        fs.readFile("text2.txt",(err,data)=>{
            if(!err)
            {
                result2=data.toString()
                fs.readFile("text3.txt",(err,data)=>{
                    if(!err)
                    {
                        result3=data.toString()
                        fs.writeFile("text4.txt",(result1+result2+result3),(err)=>{
                            if(!err)
                                console.log("done")

                        })
                    }

                })
            }
        })
    }
})
