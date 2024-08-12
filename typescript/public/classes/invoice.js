export class Invoice {
    constructor(clients, details, amount) {
        this.clients = clients;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.clients} owes $${this.amount} for ${this.details}`;
    }
}
