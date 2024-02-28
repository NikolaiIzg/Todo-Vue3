<template>
  <form class="todo-form" @submit.prevent="addItem">
    <input class="text-field-input" type="text" placeholder="Введите текст" v-model="todo">
    <button class="text-field-btn">Add Todo</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const todo = ref('');
const emit = defineEmits<{(e: 'addItem', value: string): void}>()

const addItem = () => {
  if (todo.value.trim() !== '') {
    emit('addItem', todo.value.trim());
    todo.value = '';
  }
};
</script>

<style lang="css" scoped>
.text-field-btn {
  line-height: 1.5;
  cursor: pointer;
  background-color: #eee;
  border: 1px solid #bdbdbd;
  padding: 7.6px 10px;
  transition: background-color .15s ease-in-out;
}
.text-field-btn:hover {
  background-color: #bdbdbd;
}
.text-field-input {
  padding: 10px 10px;
  border: 1px solid #bdbdbd;
  outline: none;
}
.text-field-btn {
  border-left-width: 0;
}
.todo-form {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
</style>
