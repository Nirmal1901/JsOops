export class User {
  constructor(id, name, role = "sales") {
    this.id = id;
    this.name = name;
    this.role = role;
  }

  getDetails() {
    return `${this.name} (${this.role})`;
  }
}
