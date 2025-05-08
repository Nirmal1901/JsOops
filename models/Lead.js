export class Lead {
  constructor(id, name, contactInfo, source) {
    this.id = id;
    this.name = name;
    this.contactInfo = contactInfo;
    this.source = source;
    this.status = "new";
  }

  qualify() {
    this.status = "qualified";
  }

  getDetails() {
    return `Lead: ${this.name}, Source: ${this.source}, Status: ${this.status}`;
  }
}
