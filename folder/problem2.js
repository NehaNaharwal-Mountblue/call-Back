let fs = require("fs");
let path = require("path");


function readFileLipsum(callback){
    fs.readFile("/lipsum.txt", "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Reading Successful')
            const dataConverter = data.toString().toUpperCase()
            callback(dataConverter)
        }
    })
}


function readFileUpper(callback){
    fs.readFile("/lipsum.txt", "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Reading Successful')
            const lowerString = data.toString().toLowerCase().split(".").join(".\n")
            const splitArray = lowerString.toString()
            callback(splitArray)
        }
    })
}


function readFileLower(callback){
    fs.readFile("/lipsum.txt", "utf-8", (err, data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Reading Successful')
            const dataArr = data.split(".").sort()
            const dataStr = data.toString()
            callback(dataStr)
        }
    })
}



function writeFile(data){
    fs.writeFile("/lipsum.txt", data, "utf-8", (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('writing successful')
        }
    })
}


function filenamesStore(data){
    fs.appendFile("/lipsum.txt", data, (err) => {
        if(err){
            console.log(err)
        }else{
            console.log('Appending filenames successful')
        }
    }) 
}


function deleteFiles(dir) {
    let files = fs.readFile(dir, "utf-8", (err,data) => {
        if(err){
            console.log(err)
        }else{
            let arr = data.split("\n")
            console.log(arr)
            arr.forEach((file) => {
                fs.unlink('../' +file, (err) => {
                    if (err){
                        console.log(err)
                    }else{
                        console.log('Deleted files')
                    }
                })
            } )
            
        }
    });
    
  }

  function testProblem(){
    const dir = path.join(__dirname, "/lipsum.txt");
    readFileLipsum('/'+ 'lipsum.txt', (data) => {
        writeFile( '/' + 'lipsumUpper.txt', data, ()=>{
            writeFile('/' + 'filenames.txt', 'lipsumUpper.txt', () => {
                readFileUpper( '/' + 'lipsumUpper.txt', (data) => {
                    writeFile( '/' + 'lipsumLower.txt', data, () => {
                        filenamesStore( '/' + 'filenames.txt', "\n" + 'lipsumLower.txt', () => {
                            readFileLower( '/' + 'lipsumLower.txt', (data) => {
                                writeFile( '/' + 'lipsumSorted.txt', data, () => {
                                    filenamesStore( '/' + 'filenames.txt', "\n" + 'lipsumSorted.txt', () => {
                                        deleteFiles( '/' + 'filenames.txt')
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

