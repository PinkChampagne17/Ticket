import { defineComponent, PropType } from "@vue/runtime-core";
import c from "../styles/TotalAmountBar.module.css";
import { TicketWithCount } from "../types/ticket";

export default defineComponent({
  name: "TotalAmountBar",
  props: {
    totalAmount: {
      type: Number,
      required: true,
    },
    totalTicketCount: {
      type: Number,
      required: true,
    },
  },
  render() {
    const { totalAmount, totalTicketCount } = this;
    return (
      <div class="flex bg-white h-[64px] py-[8px]" style="padding-right: 10px">
        <div class="inline-block">
          <div class="text-[14px]">
            共
            <span class="text-primary-color">
              &nbsp;{totalTicketCount}&nbsp;
            </span>
            张票
          </div>
          <div class="flex items-center text-[14px]">
            合计
            <span>
              <span class="text-primary-color text-[20px]">
                &nbsp;{Math.floor(totalAmount)}
              </span>
              <span class="text-primary-color">
                .{Math.floor((totalAmount % 1) * 100)}&nbsp;
              </span>
              元
            </span>
          </div>
        </div>
        <button class={c["button"]}>立即支付</button>
      </div>
    );
  },
});
