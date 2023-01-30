<script setup>
import { reactive } from "vue";
import AddTodo from "./utils/AddTodo.vue";
import ActionButton from "./utils/ActionButton.vue";
const todos = reactive([]);

// checking storage for todos if they available
const checkStorage = () => {
  if (localStorage.todosMus && localStorage.todosMus.length !== 0) {
    JSON.parse(localStorage.todosMus).map((item) => todos.push(item));
  }
};
checkStorage();

const saveToStorage = () => {
  const todosMus = [...todos];
  localStorage.setItem("todosMus", JSON.stringify(todosMus));
};

// adding new element into todo array
const handleEmit = (value) => {
  todos.unshift(value);
  saveToStorage();
};

// deleting element from array
const handleDelete = (id) => {
  todos.splice(
    todos.findIndex((i) => i.id === id),
    1
  );
  saveToStorage();
};

// toggling completness of given todo
const handleCompleteness = (id) => {
  const toggledElIndex = todos.findIndex((x) => x.id === id);
  todos[toggledElIndex].done = !todos[toggledElIndex].done;
  saveToStorage();
};
</script>

<template>
  <div class="flex flex-col items-center p-[30px]">
    <AddTodo @pass-value="handleEmit" />
    <p v-if="todos.length === 0">Seems like you have no plans... yet🙂</p>
    <ul v-for="item in todos" :key="item.id" class="w-full max-w-[720px]">
      <li
        class="flex justify-between items-center my-1 p-4 bg-creamy rounded"
        :class="{ 'text-slate-400 line-through': item.done }"
      >
        {{ item.todo[0].toUpperCase() + item.todo.substring(1) }}
        <ActionButton
          :item-id="item.id"
          @handle-delete="handleDelete"
          @handle-completeness="handleCompleteness"
        />
      </li>
    </ul>
  </div>
</template>
