import { defineComponent } from "@vue/runtime-core";
import c from "../styles/AppBar.module.css";

export default defineComponent({
  name: "AppBar",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  render() {
    const { title } = this;
    return (
      <div class="flex items-center box-content h-[28px] pt-[30px] pb-[6px]">
        <button>{closeIcon}</button>
        <span class={c["title"]}>{title}</span>
        <button class="flex gap-[4px]">{menuIcon}</button>
      </div>
    );
  },
});

const closeIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 1.5L8.25 8.25M15 15L8.25 8.25M8.25 8.25L15 1.5M8.25 8.25L1.5 15"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const menuIcon = (
  <>
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="black" />
    </svg>
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="black" />
    </svg>
    <svg
      width="4"
      height="4"
      viewBox="0 0 4 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2" r="2" fill="black" />
    </svg>
  </>
);
