<template>
<div v-for="todo in todolist" :key="todo.id" class="todo-item">
      <span :class="{ completed: todo.completed }" class="item">{{ todo.item }}</span>
      <div>
        <span @click="completedTodo(todo.id)" class="btn-done">done</span>
        <span @click="deleteTodo(todo.id)" class="btn-delete">delete</span>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTodoStore } from '../../model';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: "TodoItem",
  setup () {
    const store = useTodoStore()
    const { todolist } = storeToRefs(store);
    const { deleteTodo, completedTodo } = store
    

    return { todolist, deleteTodo, completedTodo }
  }
})
</script>

<style lang="css" scoped>
  span {
    cursor: pointer;
  }
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #eee;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;

    min-width: 350px;
  }
  .btn-done {
    font-size: 13px;
    
    border: 1px solid rgb(109, 255, 109);
    border-radius: 5px;
    padding: 1px 8px;
    margin-right: 10px;

    color: rgb(109, 255, 109);
    user-select: none;
  }
  .btn-delete {
    font-size: 13px;

    border: 1px solid rgb(244, 43, 43);
    border-radius: 5px;
    padding: 1px 8px;

    color: rgb(244, 43, 43);
    user-select: none;
  }
  .completed {
    text-decoration: line-through;
  }
  .item { 
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    font-size: 17px;

    margin-right: 10px;
  }
</style>
