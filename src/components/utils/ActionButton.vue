<script setup>
import { ref } from "vue";

const props = defineProps(["itemId"]);
const emit = defineEmits(["handleCompleteness", "handleDelete"]);

const actionsVisible = ref(false);

const toggleComplete = () => {
  emit("handleCompleteness", props.itemId);
  actionsVisible.value = false;
};
</script>
<template>
  <div class="relative py-5">
    <div
      class="flex flex-col pl-5 cursor-pointer"
      @click="actionsVisible = !actionsVisible"
    >
      <span
        class="block rounded-full bg-slate-500 w-[8px] h-[8px] mb-[2px]"
      ></span>
      <span
        class="block rounded-full bg-slate-500 w-[8px] h-[8px] mb-[2px]"
      ></span>
      <span
        class="block rounded-full bg-slate-500 w-[8px] h-[8px] mb-[2px]"
      ></span>
    </div>
    <div v-show="actionsVisible" class="absolute -top-5 right-6">
      <Transition name="top">
        <button
          v-if="actionsVisible"
          class="w-[50px] h-[50px] rounded-full bg-secondary mb-4 text-green-600"
          @click="toggleComplete"
        >
          ✔
        </button>
      </Transition>
      <Transition name="bottom">
        <button
          v-if="actionsVisible"
          class="w-[50px] h-[50px] rounded-full bg-secondary"
          @click="$emit('handleDelete', itemId)"
        >
          ❌
        </button>
      </Transition>
    </div>
  </div>
</template>
<style scoped>
.top-enter-active,
.bottom-enter-active {
  transition: 0.3s ease;
}
.top-leave-active,
.bottom-leave-active {
  transition: 0.3s ease;
}

.top-enter-from {
  opacity: 0;
  transform: translate(40px, 10px);
}

.bottom-enter-from {
  opacity: 0;
  transform: translate(40px, -10px);
}
.v-leave-to {
  opacity: 0;
}
</style>
