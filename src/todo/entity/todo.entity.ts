import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateTodo {
  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}

@InputType()
export class UpdateTodo extends PartialType(CreateTodo) {
  @Field()
  _id: string;
}
