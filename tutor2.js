const { log } = require('console');
const fs = require('fs');
const filejson = 'data.json';
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let askQuestion = (query, callback) => {
    rl.question(query, (answer) => {
        callback(answer);
    });
}

let Add = (first_name, last_name) => {
     // 
   
     // 
//  
fs.readFile(filejson,'utf8',(err,data)=>{
 
if(err){
console.log(err);
}else{ 
 let dataread = JSON.parse(data);
 dataread.push(last_name,first_name);
  let datawrit =JSON.stringify(dataread);
fs.writeFile(filejson,datawrit,(err)=>{
if(err){
console.log(err);

}else{
console.log("is done");

}
});
}
})
}

let Delete = (id) => {
    console.log(`delete ${id}`);
}

let startCalculator = () => {
    let first_name;
    let last_name;
    let id = 0;
    
    askQuestion("Enter the letter (a, d): ", (letter) => {
        if (letter === "a") {
            askQuestion("Enter the first_name: ", (fn) => {
                first_name = fn;
                askQuestion("Enter the last_name: ", (ln) => {
                    last_name = ln;
                    Add(first_name, last_name);
                    rl.close();
                });
            });
        } else if (letter === "d") {
            askQuestion("Enter the id: ", (idInput) => {
                id = idInput;
                Delete(id);
                rl.close();
            });
        } else {
            console.log("Invalid option");
            rl.close();
        }
    });
};

startCalculator();
