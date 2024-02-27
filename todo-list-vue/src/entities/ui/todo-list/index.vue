<template>
  <div class="todo-app">
    <h1>Todo List</h1>
    <todo-form @addItem="addItem" />
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete="deleteItem"
      @toggleCompleted="toggleCompleted"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TodoItemType } from '../../../shared/types';
import { TodoForm }  from '../todo-form'
import { TodoItem } from '../todo-item'

export default defineComponent({
  name: 'TodoList',
  components: { TodoForm, TodoItem },
  setup() {
    const todos = ref<TodoItemType[]>([]);

    const addItem = (item: string) => {
      todos.value.push({ id: Date.now(), item, completed: false });
    };

    const deleteItem = (id: number) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    };

    const toggleCompleted = (id: number) => {
      const todoIndex = todos.value.findIndex(todo => todo.id === id);
      if (todoIndex !== -1) {
        todos.value[todoIndex].completed = !todos.value[todoIndex].completed;
      }
    };
    return { todos, addItem, deleteItem, toggleCompleted };
  }
});
</script>


<style lang="css" scoped>
  h1 {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 40px;
  }
  .todo-app {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items:center;
  }
</style>
