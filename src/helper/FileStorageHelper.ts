import { readFile } from "fs";

var fs = require('fs');

function returnRelativePath(path:string){
    return `${__dirname}/../../public/${path}`;
}
export function deleteFile(path:string){
    var filePath = returnRelativePath(path); 
    fs.unlinkSync(filePath);
}
export async function saveFile(data:any, directory:string){
    let file = await fs.readFileSync(data.path);
    
    await fs.writeFile(`${__dirname}/../../public/${directory}/${data.originalFilename}`, file,function(res, err){
        if(err){
            throw err;
        }
    })
    return `/${data.originalFilename}`;
}
export async function readStaticFile(path:string){
    const fs = require("fs");
    // read the file
    const content = fs.readFileSync(path);
    return content;
}