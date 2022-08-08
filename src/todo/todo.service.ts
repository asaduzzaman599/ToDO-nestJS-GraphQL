import { Injectable } from '@nestjs/common';
import { Todo } from './dto/todo.dto';

@Injectable()
export class TodoService {
  findOneById() {
    const l: Todo = {
      title: 't',
      id: 5,
      votes: 10,
    };
    return l;
  }
}
