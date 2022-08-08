import { Injectable } from '@nestjs/common';
import { Todo } from './dto/todo.dto';

@Injectable()
export class TodoService {
  data: Array<Todo> = [
    {
      title: 't',
      id: 1,
      votes: 10,
    },
    {
      title: 't',
      id: 5,
      votes: 10,
    },
    {
      title: 't',
      id: 5,
      votes: 10,
    },
    {
      title: 't',
      id: 5,
      votes: 10,
    },
    {
      title: 't',
      id: 5,
      votes: 10,
    },
    {
      title: 't',
      id: 5,
      votes: 10,
    },
  ];
  findAll() {
    return this.data;
  }

  findOneById(id) {
    id = parseInt(id);
    return this.data.filter((item) => item.id === id);
  }

  createTodo(todo) {
    const total = this.data.length;
    todo.id = total;
    this.data.push(todo);
    return this.data;
  }
}
