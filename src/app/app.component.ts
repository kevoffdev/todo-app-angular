import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

interface Todo {
  id: `${string}-${string}-${string}-${string}-${string}`;
  value: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [NgClass, RouterOutlet, FormsModule],
})
export class AppComponent {
  title = '';
  todoList: Todo[] = [];
  addTodoList(value: string) {
    this.title = '';
    this.todoList = this.todoList.concat({
      id: crypto.randomUUID(),
      value,
      checked: false,
    });
  }
  removeTodoList(id: Todo['id']) {
    this.todoList = this.todoList.filter((value) => value.id !== id);
  }
  onChangeTodoList(id: Todo['id']) {
    this.todoList = this.todoList.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
  }
}
