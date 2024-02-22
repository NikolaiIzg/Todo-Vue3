<template>
  <todo-list />
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { TodoList } from '../entities/ui/todo-list'

  export default defineComponent({
    name: 'App', 
    components: {
      TodoList,
    },
  });
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
</style>
