import { computed, defineComponent, ref } from "@vue/runtime-core";
import { fetchTickets } from "../api/ticket-api";
import { useFetch } from "../hooks/use-fetch";
import { TicketWithCount } from "../types/ticket";
import AppBar from "./AppBar";
import FormName from "./FormName";
import TicketList from "./TicketList";
import TotalAmountBar from "./TotalAmountBar";

export default defineComponent({
  name: "Main",
  setup() {
    const { value: tickets } = useFetch(fetchTickets());

    const shoppingCar = ref([] as TicketWithCount[]);
    const setShoppingCar = (value: TicketWithCount[]) => {
      shoppingCar.value = value;
    };

    const totalTicketCount = computed(() => {
      return shoppingCar.value.reduce((sum, { count }) => sum + count, 0);
    });
    const totalAmount = computed(() => {
      return shoppingCar.value.reduce((sum, { count, ticket }) => sum + count * ticket.price, 0);
    });

    return {
      tickets,
      setShoppingCar,
      totalTicketCount,
      totalAmount,
    };
  },
  render() {
    const { tickets, setShoppingCar, totalTicketCount, totalAmount } = this;
    return (
      <div>
        <AppBar title="活动报名" />
        <FormName name="选择票种" />
        <div class="bg-white">
          {tickets && <TicketList tickets={tickets} onChange={setShoppingCar} />}
        </div>
        <TotalAmountBar
          totalTicketCount={totalTicketCount}
          totalAmount={totalAmount}
        />
      </div>
    );
  },
});
