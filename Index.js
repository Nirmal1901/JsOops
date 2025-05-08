import { Lead } from "./models/Lead.js";
import { User } from "./models/User.js";
import { CRMService } from "./services/CRMService.js";

// Create CRM and user
const crm = new CRMService();
const user = new User(1, "Alice Johnson", "Sales Manager");

// Add a lead
const lead = new Lead(101, "Bob Corp", "bob@corp.com", "LinkedIn");
crm.addLead(lead);

// Convert to customer
const customer = crm.convertLeadToCustomer(101, "2024-05-01");

// Output
console.log(user.getDetails());
console.log("=== Converted Customers ===");
crm.listAllCustomers().forEach(console.log);
