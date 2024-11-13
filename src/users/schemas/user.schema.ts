// Model chịu trách nhiệm tạo và đọc các tài liệu từ cơ sở dữ liệu MongoDB cơ bản.
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    image: string;

    @Prop({ default: "USERS" })
    role: string;

    @Prop({ default: "LOCAL" })
    accountType: string;

    @Prop({ default: false })
    isActive: boolean;

    @Prop()
    codeId: string;

    @Prop()
    codeExpired: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
