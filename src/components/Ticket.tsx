import { computed, defineComponent, PropType, ref, watch } from "vue";
import c from "../styles/Ticket.module.css";
import { Ticket } from "../types/ticket";
import Counter from "./Counter";

export default defineComponent({
  name: "Ticket",
  props: {
    ticket: {
      type: Object as PropType<Ticket>,
      required: true,
    },
    onChange: {
      type: Function as PropType<(count: number) => void>,
    },
  },
  setup({ ticket, onChange }) {
    const count = ref(0);
    const left = computed(() => ticket.quantity - count.value);

    watch(count, (value) => onChange?.(value));

    return { count, left };
  },
  render() {
    const { ticket, left } = this;
    const { name, description, price, quantity } = ticket;
    return (
      <div class="py-[8px] flex">
        <div style="max-width: calc(100% - 173px - 42px);">
          <div class={c["name"]}>{name}</div>
          <div class="text-[12px] leading-[17px] text-[#999999] mb-[3px] truncate">
            {description}
          </div>
          <div class="flex items-center gap-1">
            <span class={c["price"]}>{price}</span> 元
            {left < 10 && (
              <span class="text-[12px] leading-[17px] text-[#E23B3B]">
                仅剩{left}张
              </span>
            )}
          </div>
        </div>
        <div class="ml-auto flex items-center pl-[42px]">
          <Counter v-model={[this.count, "value"]} max={quantity} />
        </div>
      </div>
    );
  },
});
