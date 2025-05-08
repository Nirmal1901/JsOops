import { Lead } from "./Lead.js";

export class Customer extends Lead {
  constructor(id, name, contactInfo, source, customerSince) {
    super(id, name, contactInfo, source);
    this.status = "converted";
    this.customerSince = customerSince;
  }

  getDetails() {
    return `Customer: ${this.name}, Since: ${this.customerSince}`;
  }
}
