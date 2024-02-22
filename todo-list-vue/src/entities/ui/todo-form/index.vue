<template>
    <form class="todo-form" @submit.prevent = addItem(todo)>
      <input class="text-field-input" type="text" placeholder="Введите текст" v-model="todo">
      <button class="text-field-btn">Add Todo</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../../model'

export default defineComponent({
  name: 'TodoForm',
  setup () {
    const todo = ref('')
    const store = useTodoStore()

    const addItem = (item: string) => {
      store.addTodo(item)
      todo.value = ''
    }

    return { todo, store, addItem }
  }
})
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
