// const { log } = require('console');
// const fs = require('fs');
// const filejson = 'data.json';
// let readline = require('readline');
// let rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let askQuestion = (query, callback) => {
//     rl.question(query, (answer) => {
//         callback(answer);
//     });
// }

// let Add = (first_name, last_name) => {
//      // 
   
//      // 
// //  
// fs.readFile(filejson,'utf8',(err,data)=>{
 
// if(err){
// console.log(err);
// }else{ 
//  let dataread = JSON.parse(data); 
//  let ob ={
//     "id": dataread.length+1,
//     "name" : first_name,
//     "first name ": last_name
//   }

//   dataread.push(ob);
//   let datawrit =JSON.stringify(dataread);
// fs.writeFile(filejson,datawrit,(err)=>{
// if(err){
// console.log(err);

// }else{
// console.log("is done");
// }
// });
// }
// })
// }

// let Delete = (id) => {
//     console.log(`delete ${id}`);
// }

// let startCalculator = () => {
//     let first_name;
//     let last_name;
//     let id = 0;
    
//     askQuestion("Enter the letter (a, d): ", (letter) => {
//         if (letter === "a") {
//             askQuestion("Enter the first_name: ", (fn) => {
//                 first_name = fn;
//                 askQuestion("Enter the last_name: ", (ln) => {
//                     last_name = ln;
//                     Add(first_name, last_name);
//                     rl.close();
//                 });
//             });
//         } else if (letter === "d") {
//             askQuestion("Enter the id: ", (idInput) => {
//                 id = idInput;
//                 Delete(id);
//                 rl.close();
//             });
//         } else {
//             console.log("Invalid option");
//             rl.close();
//         }
//     });
// };

// startCalculator();

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
let Delete = (id)=>{
console.log(id);
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
    else if(litter == "delete"){
id = await ask("enter the id :######## : ")
Delete(id);
    }
    rl.close();
}
start();