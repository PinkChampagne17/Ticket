import { defineComponent, PropType } from "@vue/runtime-core";
import { Ticket, TicketWithCount } from "../types/ticket";
import TicketItem from "./Ticket";

export default defineComponent({
  name: "TicketList",
  props: {
    tickets: {
      type: Array as PropType<Ticket[]>,
      required: true,
    },
    onChange: {
      type: Function as PropType<(tickets: TicketWithCount[]) => void>,
    },
  },
  setup({ tickets, onChange }) {
    const shoppingCar = tickets.map((ticket) => ({
      ticket,
      count: 0,
    }));

    const handleChange = (index: number, count: number) => {
      shoppingCar[index].count = count;
      onChange?.([...shoppingCar]);
    };

    return { handleChange };
  },
  render() {
    const { tickets, handleChange } = this;
    return tickets?.map((ticket, index) => (
      <TicketItem
        ticket={ticket}
        key={ticket.id}
        onChange={(count) => handleChange(index, count)}
      />
    ));
  },
});
