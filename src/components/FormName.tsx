import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "FormName",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  render() {
    return (
      <div class="text-[16px] leading-[19px] pt-[7px] pb-[12px]">
        {this.name}
      </div>
    );
  },
});
