const fs = require("fs");
class Reader {
    static readJsonFile(file){
        const rawdata = fs.readFileSync("explorers.json");
        return JSON.parse(rawdata);
    }
  }
  
  module.exports = Reader