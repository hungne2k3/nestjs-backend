// Model chịu trách nhiệm tạo và đọc các tài liệu từ cơ sở dữ liệu MongoDB cơ bản.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop()
    age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
