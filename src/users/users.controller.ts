/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    private readonly usersService: UsersService;

    @Get()
    findAll() {
        return []
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return [id]
    }

}
