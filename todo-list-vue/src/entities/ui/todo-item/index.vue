<template>
  <div class="todo-item">
    <span :class="{ completed: todo?.completed }" class="item">{{ todo?.item }}</span>
    <div>
      <span @click="toggleCompleted" class="btn-done">done</span>
      <span @click="deleteItem" class="btn-delete">delete</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TodoItemType } from '../../../shared/types';

export default defineComponent({
  name: 'TodoItem',
  props: {
    todo: Object as () => TodoItemType,
  },
  emits: ['delete', 'toggleCompleted'],
  setup(props, { emit }) {
    const deleteItem = () => {
      emit('delete', props.todo?.id);
    };

    const toggleCompleted = () => {
      emit('toggleCompleted', props.todo?.id);
    };

    return { deleteItem, toggleCompleted };
  }
});
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
