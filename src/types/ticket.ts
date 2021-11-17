export interface Ticket {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

export interface TicketWithCount {
  ticket: Ticket;
  count: number;
}
