export interface TodoItem {
  item: string;
  id: number;
  completed: boolean;
}

export interface TodoStore {
  todolist: TodoItem[], 
  id: number
}
