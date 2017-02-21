const Ajv = require('ajv');

class SOFAObject {
  constructor(name, schema, content) {
    this.name = name;
    this.schema = schema;
    this.content = content;

    let ajv = new Ajv();
    this.validate = ajv.compile(schema);
    var valid = this.validate(content);
    if (!valid) console.log(ajv.errorsText());
  }

  get type() {
    return this.name;
  }

  get json() {
    return JSON.stringify(this.content);
  }

  get prefix() {
    return 'SOFA::'+this.name+':'
  }

  get string() {
    return this.prefix + this.json;
  }

  get display() {
    return "";
  }
}
