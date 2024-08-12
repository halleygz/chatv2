import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly clients: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.clients} owes $${this.amount} for ${this.details}`;
  }
}
