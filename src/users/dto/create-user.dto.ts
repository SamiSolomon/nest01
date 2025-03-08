/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import {IsEmail, IsNotEmpty, IsEnum, IsString } from "class-validator"
export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;

    @IsEnum(["INTERN", "ENGINEER", "ADMIN"], {
        message:"Valid role required"
    })
    role:"INTERN" |"ENGINEER" | "ADMIN"
}