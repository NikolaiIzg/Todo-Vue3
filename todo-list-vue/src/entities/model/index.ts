import { defineStore } from "pinia";
import { TodoItem, TodoStore } from "../../shared/types";

export const useTodoStore = defineStore('todolist', {
  state: () => {
    const storedData = localStorage.getItem('todolist');
    const initialState: TodoStore = {
      id: Date.now(),
      todolist: [],
    };
    if (storedData) {
      const parsedData: TodoStore = JSON.parse(storedData);
      initialState.id = parsedData.id;
      initialState.todolist = parsedData.todolist;
    }
    return initialState;
  },
  actions: {
    addTodo(item: string) {
      if (item.length !== 0) {
        this.todolist.push({ id: this.id++, item, completed: false });
        this.saveToLocalStorage();
      }
    },
    deleteTodo(id: number) {
      this.todolist = this.todolist.filter((item: TodoItem) => item.id !== id);
      this.saveToLocalStorage();
    },
    completedTodo(id: number) {
      const todo = this.todolist.find(item => item.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('todolist', JSON.stringify({ id: this.id, todolist: this.todolist }));
    }
  },
});
