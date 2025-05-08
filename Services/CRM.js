import { Lead } from "../models/Lead.js";
import { Customer } from "../models/Customer.js";

export class CRMService {
  constructor() {
    this.leads = [];
    this.customers = [];
  }

  addLead(lead) {
    this.leads.push(lead);
  }

  convertLeadToCustomer(leadId, conversionDate) {
    const lead = this.leads.find(l => l.id === leadId);
    if (!lead) throw new Error("Lead not found");

    lead.qualify();
    const customer = new Customer(
      lead.id,
      lead.name,
      lead.contactInfo,
      lead.source,
      conversionDate
    );

    this.customers.push(customer);
    return customer;
  }

  listAllCustomers() {
    return this.customers.map(c => c.getDetails());
  }
}
