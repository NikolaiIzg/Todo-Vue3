export type TodoItemType = {
  item: string;
  id: number;
  completed: boolean;
}

export type Emits = {
(e: 'delete', value: number): void;
(e: 'toggleCompleted', value: number): void;
}
