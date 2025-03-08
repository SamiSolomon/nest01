/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    private readonly usersService: UsersService;

    @Get()
    findAll(@Query('role') role?: 'INTERN'|'ENGINEER'|'ADMIN') {
        return []
    }

    @Get(":id")
    findOne(@Param('id') id: string) {
        return [id]
    }

    @Post()
    create(@Body() user: object) {
        return user
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() updatedUser: object) {
        return {id, ...updatedUser}
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return id
    }




}
