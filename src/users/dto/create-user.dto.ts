import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({ message: "Tên không được để trống" })
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    image: string;
}
