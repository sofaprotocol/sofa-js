const Ajv = require('ajv');

class SOFAObject {
  constructor(name, schema, content) {
    this.preprocess(content);
    this.name = name;
    this.schema = schema;
    this.content = content;
    for (let [k,v] of Object.entries(content)) {
      if (!this.hasOwnProperty(k)) { this[k] = v; }
    }

    let ajv = new Ajv({allErrors: true});
    let validate = ajv.compile(schema);
    this._valid = validate(content);
    if (!this._valid) {
      // map error messages to errors property
      this._errors = validate.errors.map((e) => e.message);
    }
  }

  preprocess(content) {
    //noop
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
    return this.string;
  }

  get isValid() {
    return this._valid;
  }

  get validationErrors() {
    return this._errors;
  }
}

module.exports = SOFAObject;
