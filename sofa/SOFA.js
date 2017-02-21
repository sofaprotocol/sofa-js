const path = require('path');
const fs = require('fs');
const glob = require("glob");
const SOFAObject = require("./SOFAObject.js");

class SOFA  {
  constructor() {
    this.schemas = {};
    let root = path.resolve(__dirname, '../vendor/sofa-spec/schema');
    let schemaPaths = glob.sync(path.join(root,'*.json'));
    for (let schemaPath of schemaPaths) {
      let name = path.basename(schemaPath, '.json');
      let schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
      this.addSchema(name, schema);
    }
  }

  addSchema(name, schema) {
    this.schemas[name] = schema;
    this[name] = function(content) {
      if (content) {
        return new SOFAObject(name, schema, content);
      } else {
        return "SOFA::"+name+":";
      }
    }
  }

  parse(s) {
    let sofaRx = new RegExp(/^\s*SOFA::(\w+):({.+})/g);
    let match = sofaRx.exec(s);
    let name = match[1];
    let content = JSON.parse(match[2]);
    return this[name](content);
  }
}

module.exports = new SOFA();
