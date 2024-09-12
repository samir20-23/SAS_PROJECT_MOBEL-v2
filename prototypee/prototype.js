 

let fs = require("fs");
let readline = require("readline");
const { json } = require("stream/consumers");
let  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
let ask=(query)=>{
return new Promise((sel)=>{
rl.question(query,sel)
})
}


let add = (out1,out2,out3)=>{ 
// read file
fs.readFile('data.json','utf8',(err,data)=>{
if(err){
console.log(err);
}else{
let readData = JSON.parse(data);
let newObject = {
    id : readData.length,
    number : out1,
    name : out2,
    last_name : out3
}
readData.push(newObject);
console.log("successfully👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽👌🏽");
//  writfile
let jsdata = JSON.stringify(readData);
fs.writeFile('data.json', jsdata, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳');
    }
});
//                                    writfile
}
})
//                                    read file
}
let Delete = (id) => {
    fs.readFile('data.json','utf8',(err,data)=>{
        if(err){
    console.log("ERROR ⚠️⚠️⚠️⚠️⚠️⚠️ :"+err);
        }else{
            let readData = JSON.parse(data); 
             let updatedData = readData.filter((item) => item.id !== parseInt(id));
    let jsonData2 = JSON.stringify(updatedData);
    fs.writeFile("data.json",jsonData2,(err)=>{
    if(err){
    console.log("errr:"+err);
    }else{
    console.log("DELETE is done");
    }
    })
        }
    })
    }
let start =async ()=>{
    let out1,  out2, out3 ;
    let id = 0 ;
    let litter = await ask (" enter (add &&  delete)########## : ");
    if (litter == "add"){
        out1 = await ask("####Add Number  :##### :");
        out2 = await ask("####add Name :##### :");
        out3 = await ask("####sdd last name :#### :");
        add(out1,out2,out3);
    }
    if (litter == "delete") {
        id = await ask(" ################### enter id you need delete :")
        if (id != 0) {
            out4 = await ask("????????????????????????????? ARE YOU SURE ? (yes,no)");
            if (out4 == "yes") {
                Delete(id);
            } else {
                console.log("nice");
            }
        }
    }
    rl.close();
}
start();
