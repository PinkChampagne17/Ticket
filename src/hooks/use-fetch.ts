import { ref } from "vue";

export function useFetch<T>(promise: Promise<T>) {
  const r = ref<T>();
  promise.then((value) => (r.value = value));
  return { value: r };
}
