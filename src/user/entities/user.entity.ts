import { Tweet } from './../../tweet/entities/tweet.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Scope } from '@nestjs/common';

@ObjectType()
@Table
export class User extends Model<User> {
  @Field()
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;
  @Field()
  @Column({ type: DataType.TEXT, allowNull: false })
  name: string;
  @Field()
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;
  // @Field()
  // @BelongsToMany(() => Tweet, { as: 'tweets', through: 'userId' })
  // tweets: Tweet[];
  @Field()
  @HasMany(() => Tweet, 'userId')
  Tweets: Tweet[];
///
// @Field()
// @HasMany(() => Tweet,{foreignKey:'id',Scope:{
//   tweet:'tweet'
// }
// )
// }Tweets:[Tweet]
}
