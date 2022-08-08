import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateTodo {

  @Field()
  title: string;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
