let fs = require("fs");
let path = require("path");

function createDirectory(noOfFiles){
  let nameOfFile = "file" + noOfFiles + ".json";
  if (fs.existsSync('randomDirectory')) {
    console.log('Directory exists!');
    createAnddeleteFile(nameOfFile);
   } else {
    fs.mkdir("randomDirectory", function(err, data){
      if(err){
        console.log(err);
      }
      else{
        console.log("Directory has been created");
        createAnddeleteFile(nameOfFile);
      }
  });
}

if(noOfFiles > 0) {
  createDirectory(1 - noOfFiles)
}

}

function createAnddeleteFile(nameOfFile){
  fs.writeFile(`${nameOfFile}`, "Json file", function(err, data){
    if(err){
      console.log(err);
    }
    else{
      console.log("file has been created");
        fs.unlink(`${nameOfFile}`, function(err){
          if(err){
            console.log(err);
          }
          else{
            console.log("file has been deleted");
          }

        }, 2000);
    }
  })
}

module.exports = createDirectory;
