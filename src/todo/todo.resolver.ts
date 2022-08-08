import { Args, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './dto/todo.dto';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private authorsService: TodoService) {}

  @Query(() => Todo)
  async todo() {
    return this.authorsService.findOneById();
  }
}
