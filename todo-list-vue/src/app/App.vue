<template>
  <todo-list />
</template>


<script setup lang="ts">
import { TodoList } from '../entities/ui/todo-list'
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
