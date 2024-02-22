<template>
  <div class="todo-app">
    <h1>Todo List</h1>
    <todo-form />
    <todo-item />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TodoForm }  from '../todo-form'
import { TodoItem } from '../todo-item'

  export default defineComponent({
  name: 'TodoList',
  components: { TodoForm, TodoItem },
  setup() {
    return {}
  }
  })
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
