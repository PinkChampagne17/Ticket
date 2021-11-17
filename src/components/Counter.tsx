import { computed, defineComponent, ref, watch } from "vue";

const buttonClass = "w-full flex justify-center items-center border-[#C5C5C5]";

export default defineComponent({
  name: "Counter",
  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: Infinity,
    },
  },
  emits: ["update:value"],
  setup({ value, max }, { emit }) {
    const count = (function () {
      const countRef = ref(value);
      return computed<typeof countRef.value>({
        get: () => countRef.value,
        set: (value) => 0 <= value && value <= max && (countRef.value = value),
      });
    })();

    watch(count, (value) => emit("update:value", value));

    return { count };
  },
  render() {
    return (
      <div class="flex border w-[173px] h-[38px] bg-[#FBFBFB] border-[#C5C5C5]">
        <button class={[buttonClass, "border-r"]} onClick={() => this.count--}>
          {minusIcon}
        </button>
        <div class="w-full self-center text-center">{this.count}</div>
        <button class={[buttonClass, "border-l"]} onClick={() => this.count++}>
          {plusIcon}
        </button>
      </div>
    );
  },
});

const minusIcon = (
  <svg
    width="19"
    height="3"
    viewBox="0 0 19 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1 1.67147C1 1.26995 1.31217 0.944458 1.69725 0.944458H17.1916C17.5767 0.944458 17.8889 1.26995 17.8889 1.67147C17.8889 2.07298 17.5767 2.39847 17.1916 2.39847H1.69725C1.31217 2.39847 1 2.07298 1 1.67147Z"
      fill="#CACACA"
      stroke="#CACACA"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const plusIcon = (
  <svg
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.6111 0.5C11.0443 0.5 11.3955 0.851189 11.3955 1.2844V9.2156H19.3267C19.7599 9.2156 20.1111 9.56679 20.1111 10C20.1111 10.4332 19.7599 10.7844 19.3267 10.7844H11.3955V18.7156C11.3955 19.1488 11.0443 19.5 10.6111 19.5C10.1779 19.5 9.8267 19.1488 9.8267 18.7156V10.7844H1.8955C1.46229 10.7844 1.1111 10.4332 1.1111 10C1.1111 9.56679 1.46229 9.2156 1.8955 9.2156H9.8267V1.2844C9.8267 0.851189 10.1779 0.5 10.6111 0.5Z"
      fill="#16B9FF"
      stroke="#16B9FF"
      stroke-width="0.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
