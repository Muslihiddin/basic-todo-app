<script setup>
import { ref } from "vue";
const emit = defineEmits(["passValue"]);

const inputValue = ref("");

const handleAdding = () => {
  const trimedInput = inputValue.value.trim();

  if (trimedInput !== "") {
    emit("passValue", {
      id: Date.now(),
      todo: trimedInput,
      done: false,
    });
  }
  inputValue.value = "";
};
</script>
<template>
  <div class="pb-4 w-full max-w-[720px]">
    <input
      type="text"
      class="outline-none rounded-l px-3 py-2 h-10 w-3/4 bg-creamy"
      v-model="inputValue"
      @keyup.enter="handleAdding"
    />
    <button
      @click="handleAdding"
      class="py-2 px-5 bg-secondary rounded-r h-10 w-1/4 font-xl"
    >
      Add
    </button>
  </div>
</template>
