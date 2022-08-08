import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './dto/todo.dto';
import { CreateTodo, UpdateTodo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [Todo])
  async todoList(): Promise<any> {
    return this.todoService.findAll();
  }

  @Query(() => [Todo])
  async todoSingle(@Args('id') id: string): Promise<any> {
    return this.todoService.findOneById(id);
  }

  @Mutation(() => [Todo])
  async addTask(@Args('todo') todo: CreateTodo) {
    return this.todoService.createTodo(todo);
  }

  @Mutation(() => Todo)
  async updateTask(@Args('todo') todo: UpdateTodo) {
    return this.todoService.updateTodo(todo);
  }
}
